import { Film } from "lucide-react";
import { FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Описание", href: "#hero" },
      { name: "Функции", href: "#features" },
      { name: "Цены", href: "#pricing" },
      // { name: "Examples", href: "#examples" },
      // { name: "Testimonials", href: "#testimonials" },
    ],
    resources: [
      { name: "Блог", href: "https://t.me/loborifm_in_public" },
      // { name: "Help Center", href: "#" },
      // { name: "Tutorials", href: "#" },
      {
        name: "Связаться со службой поддержки",
        href: "https://t.me/zimbabwe_js",
      },
    ],
    company: [
      { name: "About", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
    ],
    legal: [
      { name: "Политика конфиденциальности", href: "#" },
      { name: "Условия", href: "#" },
      { name: "Контакты", href: "https://t.me/Rwuet" },
    ],
  };

  const socialLinks = [
    { icon: <FaTwitter size={18} />, href: "#" },
    { icon: <FaInstagram size={18} />, href: "#" },
    { icon: <FaTiktok size={18} />, href: "#" },
  ];

  return (
    <footer className="bg-[#27282B] text-white pt-16 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-20">
          <div className="md:justify-self-start">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-primary">
                <Film className="h-5 w-5" />
              </div>
              <span className="font-bold text-xl">Video Cliper</span>
            </div>
            <p className="text-white/60 mb-6 md:max-w-[250px]">
              Шаблоны и умный планировщик публикаций берут монтаж на себя — вам
              остаётся только креативить.
            </p>
            {/* <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.href} 
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div> */}
          </div>

          <div className="md:justify-self-center">
            <h3 className="font-bold text-lg mb-4">Навигация</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-white/60 hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Video Cliper. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            {footerLinks.legal.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="text-white/60 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
