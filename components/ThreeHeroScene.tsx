"use client";

import React, { useEffect, useRef } from "react";

interface ThreeHeroSceneProps {
  className?: string;
}

export const ThreeHeroScene: React.FC<ThreeHeroSceneProps> = ({ className = "" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl =
      (canvas.getContext("webgl", { alpha: true, antialias: true }) as WebGLRenderingContext | null) ||
      (canvas.getContext("experimental-webgl", { alpha: true, antialias: true }) as WebGLRenderingContext | null);

    if (!gl) return;

    let animationFrameId: number;

    // Shader sources for 3D sphere & ring visualizer
    const vs = `
      attribute vec3 aPosition;
      attribute vec3 aNormal;
      uniform mat4 uProjection;
      uniform mat4 uView;
      uniform mat4 uModel;
      varying vec3 vNormal;
      varying vec3 vPosition;

      void main() {
        vNormal = aNormal;
        vec4 pos = uModel * vec4(aPosition, 1.0);
        vPosition = pos.xyz;
        gl_Position = uProjection * uView * pos;
      }
    `;

    const fs = `
      precision highp float;
      varying vec3 vNormal;
      varying vec3 vPosition;
      uniform vec3 uColor;
      uniform float uEmissive;
      uniform float uAlpha;
      uniform float uTime;

      void main() {
        vec3 normal = normalize(vNormal);
        vec3 lightDir = normalize(vec3(1.0, 1.5, 2.0));
        float diff = max(dot(normal, lightDir), 0.25);
        
        vec3 glowColor = uColor * (diff * 0.7 + uEmissive);
        float rim = 1.0 - max(dot(normalize(-vPosition), normal), 0.0);
        glowColor += uColor * pow(rim, 3.0) * 0.6;

        gl_FragColor = vec4(glowColor, uAlpha);
      }
    `;

    function createShader(type: number, source: string) {
      if (!gl) return null;
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertShader = createShader(gl.VERTEX_SHADER, vs);
    const fragShader = createShader(gl.FRAGMENT_SHADER, fs);
    if (!vertShader || !fragShader) return;

    const program = gl.createProgram();
    if (!program) return;

    gl.attachShader(program, vertShader);
    gl.attachShader(program, fragShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

    gl.useProgram(program);

    // Build Sphere Geometry
    function createSphere(radius: number, latBands: number, longBands: number) {
      const positions: number[] = [];
      const normals: number[] = [];
      const indices: number[] = [];

      for (let lat = 0; lat <= latBands; lat++) {
        const theta = (lat * Math.PI) / latBands;
        const sinTheta = Math.sin(theta);
        const cosTheta = Math.cos(theta);

        for (let long = 0; long <= longBands; long++) {
          const phi = (long * 2 * Math.PI) / longBands;
          const sinPhi = Math.sin(phi);
          const cosPhi = Math.cos(phi);

          const x = cosPhi * sinTheta;
          const y = cosTheta;
          const z = sinPhi * sinTheta;

          normals.push(x, y, z);
          positions.push(radius * x, radius * y, radius * z);
        }
      }

      for (let lat = 0; lat < latBands; lat++) {
        for (let long = 0; long < longBands; long++) {
          const first = lat * (longBands + 1) + long;
          const second = first + longBands + 1;

          indices.push(first, second, first + 1);
          indices.push(second, second + 1, first + 1);
        }
      }

      return { positions, normals, indices };
    }

    // Build Torus Geometry
    function createTorus(radius: number, tube: number, radialSegments: number, tubularSegments: number) {
      const positions: number[] = [];
      const normals: number[] = [];
      const indices: number[] = [];

      for (let j = 0; j <= radialSegments; j++) {
        for (let i = 0; i <= tubularSegments; i++) {
          const u = (i / tubularSegments) * Math.PI * 2;
          const v = (j / radialSegments) * Math.PI * 2;

          const x = (radius + tube * Math.cos(v)) * Math.cos(u);
          const y = (radius + tube * Math.cos(v)) * Math.sin(u);
          const z = tube * Math.sin(v);

          const nx = Math.cos(v) * Math.cos(u);
          const ny = Math.cos(v) * Math.sin(u);
          const nz = Math.sin(v);

          positions.push(x, y, z);
          normals.push(nx, ny, nz);
        }
      }

      for (let j = 0; j < radialSegments; j++) {
        for (let i = 0; i < tubularSegments; i++) {
          const a = (tubularSegments + 1) * j + i;
          const b = (tubularSegments + 1) * (j + 1) + i;
          const c = (tubularSegments + 1) * (j + 1) + i + 1;
          const d = (tubularSegments + 1) * j + i + 1;

          indices.push(a, b, d);
          indices.push(b, c, d);
        }
      }

      return { positions, normals, indices };
    }

    const sphereData = createSphere(0.85, 24, 24);
    const ringData = createTorus(2.2, 0.04, 16, 64);
    const ring2Data = createTorus(2.8, 0.025, 16, 64);

    // Buffers setup
    function createMeshBuffers(mesh: { positions: number[]; normals: number[]; indices: number[] }) {
      if (!gl) return { posBuf: null, normBuf: null, idxBuf: null, count: 0 };
      const posBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.positions), gl.STATIC_DRAW);

      const normBuf = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, normBuf);
      gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(mesh.normals), gl.STATIC_DRAW);

      const idxBuf = gl.createBuffer();
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, idxBuf);
      gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(mesh.indices), gl.STATIC_DRAW);

      return { posBuf, normBuf, idxBuf, count: mesh.indices.length };
    }

    const sphereMesh = createMeshBuffers(sphereData);
    const ringMesh = createMeshBuffers(ringData);
    const ring2Mesh = createMeshBuffers(ring2Data);

    const aPosLoc = gl.getAttribLocation(program, "aPosition");
    const aNormLoc = gl.getAttribLocation(program, "aNormal");

    const uProjLoc = gl.getUniformLocation(program, "uProjection");
    const uViewLoc = gl.getUniformLocation(program, "uView");
    const uModelLoc = gl.getUniformLocation(program, "uModel");
    const uColorLoc = gl.getUniformLocation(program, "uColor");
    const uEmissLoc = gl.getUniformLocation(program, "uEmissive");
    const uAlphaLoc = gl.getUniformLocation(program, "uAlpha");
    const uTimeLoc = gl.getUniformLocation(program, "uTime");

    // Simple 4x4 matrix utilities
    function perspectiveMat(fovy: number, aspect: number, near: number, far: number) {
      const f = 1.0 / Math.tan(fovy / 2);
      const nf = 1 / (near - far);
      return [
        f / aspect, 0, 0, 0,
        0, f, 0, 0,
        0, 0, (far + near) * nf, -1,
        0, 0, 2 * far * near * nf, 0
      ];
    }

    function identityMat() {
      return [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ];
    }

    function rotateY(m: number[], angle: number) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const res = [...m];
      res[0] = m[0] * c + m[8] * s;
      res[2] = m[2] * c + m[10] * s;
      res[8] = m[8] * c - m[0] * s;
      res[10] = m[10] * c - m[2] * s;
      return res;
    }

    function rotateX(m: number[], angle: number) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const res = [...m];
      res[5] = m[5] * c - m[9] * s;
      res[6] = m[6] * c - m[10] * s;
      res[9] = m[5] * s + m[9] * c;
      res[10] = m[6] * s + m[10] * c;
      return res;
    }

    function rotateZ(m: number[], angle: number) {
      const c = Math.cos(angle);
      const s = Math.sin(angle);
      const res = [...m];
      res[0] = m[0] * c - m[4] * s;
      res[1] = m[1] * c - m[5] * s;
      res[4] = m[0] * s + m[4] * c;
      res[5] = m[1] * s + m[5] * c;
      return res;
    }

    function scaleMat(m: number[], sx: number, sy: number, sz: number) {
      const res = [...m];
      res[0] *= sx; res[1] *= sx; res[2] *= sx; res[3] *= sx;
      res[4] *= sy; res[5] *= sy; res[6] *= sy; res[7] *= sy;
      res[8] *= sz; res[9] *= sz; res[10] *= sz; res[11] *= sz;
      return res;
    }

    function translateMat(m: number[], tx: number, ty: number, tz: number) {
      const res = [...m];
      res[12] += tx;
      res[13] += ty;
      res[14] += tz;
      return res;
    }

    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      targetMouseX = (x / rect.width) * 0.8;
      targetMouseY = (y / rect.height) * 0.8;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const parentW = canvas.parentElement.clientWidth;
      const parentH = canvas.parentElement.clientHeight;
      if (parentW === 0 || parentH === 0) return;
      canvas.width = parentW;
      canvas.height = parentH;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const startTime = performance.now();

    const drawMesh = (
      mesh: { posBuf: WebGLBuffer | null; normBuf: WebGLBuffer | null; idxBuf: WebGLBuffer | null; count: number },
      modelMatrix: number[],
      color: [number, number, number],
      emissive: number,
      alpha: number
    ) => {
      if (!gl || !mesh.posBuf || !mesh.normBuf || !mesh.idxBuf) return;

      gl.bindBuffer(gl.ARRAY_BUFFER, mesh.posBuf);
      gl.enableVertexAttribArray(aPosLoc);
      gl.vertexAttribPointer(aPosLoc, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ARRAY_BUFFER, mesh.normBuf);
      gl.enableVertexAttribArray(aNormLoc);
      gl.vertexAttribPointer(aNormLoc, 3, gl.FLOAT, false, 0, 0);

      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, mesh.idxBuf);

      gl.uniformMatrix4fv(uModelLoc, false, new Float32Array(modelMatrix));
      gl.uniform3f(uColorLoc, color[0], color[1], color[2]);
      gl.uniform1f(uEmissLoc, emissive);
      gl.uniform1f(uAlphaLoc, alpha);

      gl.drawElements(gl.TRIANGLES, mesh.count, gl.UNSIGNED_SHORT, 0);
    };

    const render = (time: number) => {
      if (!gl || !canvas || canvas.height === 0 || canvas.width === 0) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }
      const now = (time - startTime) * 0.001;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.enable(gl.DEPTH_TEST);
      gl.enable(gl.BLEND);
      gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

      const aspect = canvas.width / (canvas.height || 1);
      const proj = perspectiveMat((45 * Math.PI) / 180, aspect, 0.1, 100);
      let view = identityMat();
      view = translateMat(view, 0, 0, -6.5);

      gl.uniformMatrix4fv(uProjLoc, false, new Float32Array(proj));
      gl.uniformMatrix4fv(uViewLoc, false, new Float32Array(view));
      gl.uniform1f(uTimeLoc, now);

      // Smooth mouse movement interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Vertical Floating Motion ("Sphere going up & floating")
      const floatY = Math.sin(now * 1.8) * 0.35;

      // Pulse Core scale
      const scale = 1.0 + Math.sin(now * 2.5) * 0.12;

      // 1. Render Core Sphere
      let coreModel = identityMat();
      coreModel = translateMat(coreModel, 0, floatY, 0);
      coreModel = rotateY(coreModel, mouseX * 0.8);
      coreModel = rotateX(coreModel, -mouseY * 0.8);
      coreModel = scaleMat(coreModel, scale, scale, scale);
      drawMesh(sphereMesh, coreModel, [0.18, 0.85, 0.95], 0.9, 0.95);

      // 2. Render Inner Orbital Ring
      let ringModel = identityMat();
      ringModel = translateMat(ringModel, 0, floatY, 0);
      ringModel = rotateY(ringModel, mouseX * 0.8 + now * 0.4);
      ringModel = rotateX(ringModel, -mouseY * 0.8 + 0.8);
      ringModel = rotateZ(ringModel, now * 0.6);
      drawMesh(ringMesh, ringModel, [0.53, 0.81, 1.0], 0.4, 0.65);

      // 3. Render Outer Orbital Ring
      let ring2Model = identityMat();
      ring2Model = translateMat(ring2Model, 0, floatY, 0);
      ring2Model = rotateY(ring2Model, mouseX * 0.8 - now * 0.3);
      ring2Model = rotateX(ring2Model, -mouseY * 0.8 - 0.6);
      ring2Model = rotateZ(ring2Model, -now * 0.5);
      drawMesh(ring2Mesh, ring2Model, [0.38, 0.4, 0.94], 0.3, 0.5);

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className={`relative z-10 flex items-center justify-center w-full h-full min-h-[350px] sm:min-h-[450px] ${className}`}>
      <canvas ref={canvasRef} className="block w-full h-full cursor-grab active:cursor-grabbing" />
    </div>
  );
};
