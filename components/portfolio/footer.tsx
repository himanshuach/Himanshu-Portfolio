import { links } from "@/config";
import { footerLinks } from "@/data/portfolio";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-portfolio-border bg-[#131314] px-10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-base text-portfolio-text">
          © {year} {links.ownerName}. Engineered with precision.
        </p>

        <nav aria-label="Footer links">
          <ul className="flex flex-wrap gap-6">
            {footerLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="text-base text-portfolio-muted transition-colors hover:text-portfolio-text"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};
