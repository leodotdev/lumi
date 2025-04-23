import Link from "next/link";

export default function SimpleFooter() {
  const socialLinks = [
    { name: "Twitter", href: "#", icon: "𝕏" },
    { name: "LinkedIn", href: "#", icon: "in" },
    { name: "Instagram", href: "#", icon: "📷" },
  ];

  return (
    <footer className="w-full py-16 px-6 md:px-10 bg-gradient-to-b from-slate-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-10">
          <Link
            href="/"
            className="text-4xl font-bold text-white hover:text-blue-300 transition-colors inline-block mb-6"
          >
            RealTicket
          </Link>
          <p className="text-xl text-gray-300 max-w-md mx-auto">
            The future of event ticketing powered by blockchain technology.
          </p>
        </div>

        <div className="flex justify-center space-x-8 mb-12">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              className="text-white text-2xl hover:text-blue-300 transition-colors hover:-translate-y-1 inline-block transition-transform"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} RealTicket. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
