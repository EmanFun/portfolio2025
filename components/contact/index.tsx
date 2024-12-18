"use client";
import React, { useEffect, useState } from "react";
import { BackgroundLines } from "../ui/background-lines";
import { FloatingDock } from "../ui/floating-dock";
import FormContact from "../formContact";
import {
  MessageCircleMore,
  Linkedin,
  Github,
  AtSign,
  File,
} from "lucide-react";

const message = `"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."%0D%0A\nNo hay nadie que ame el dolor mismo, que lo busque, lo encuentre y lo quiera, simplemente porque es el dolor.%0D%0A`;
const subject = `Saludos!`;
const mailTo = "emanuelfun.95@gmail.com";

interface Link {
  title: string;
  icon: React.ReactNode;
  href: string;
}

const links: Link[] = [
  {
    title: "Linkedin",
    icon: <Linkedin />,
    href: "https://www.linkedin.com/in/emanuelfun/",
  },
  {
    title: "Github",
    icon: <Github />,
    href: "https://github.com/EmanFun",
  },
  {
    title: "Email",
    icon: <AtSign />,
    href: `mailto:${mailTo}?subject=${subject}&body=${message}`,
  },
  {
    title: "Whatsapp",
    icon: <MessageCircleMore />,
    href: "whatsapp://send?phone=5493518018687",
  },
  {
    title: "CV",
    icon: <File />,
    href: "/cv.pdf",
  },
];

const Contact = () => {
  // Añadimos hook para detectar viewport
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px es el breakpoint de lg en Tailwind
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="contact">
      <BackgroundLines className="min-h-screen bg-slate-700 relative w-full overflow-hidden flex flex-col items-center justify-between text-gray-400">
        <div className="h-auto z-10 lg:mt-28">
          <FormContact />
        </div>
        <div>
          {isMobile ? (
            <SimpleDock links={links} />
          ) : (
            <FloatingDock mobileClassName="translate-y-20" items={links} />
          )}
        </div>
      </BackgroundLines>
    </section>
  );
};

const SimpleDock = ({ links }: { links: Link[] }) => (
  <div
    className="flex gap-4 justify-center p-4 rounded-2xl backdrop-blur-sm"
    style={{
      background: "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
    }}
  >
    {links.map((link, index) => (
      <a
        key={index}
        href={link.href}
        className="bg-black/50 rounded-full p-2  transition-colors"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          color: "rgb(156, 163, 175)",
        }}
      >
        {link.icon}
      </a>
    ))}
  </div>
);

export default Contact;
