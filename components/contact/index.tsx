"use client";
import React from "react";
import { BackgroundLines } from "../ui/background-lines";
import { FloatingDock } from "../ui/floating-dock";
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

const links = [
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
  return (
    <section id="contact">
      <BackgroundLines className=" bg-slate-700 relative w-full overflow-hidden flex flex-col items-center justify-center text-gray-400">
        <div className="h-screen flex flex-col items-center justify-between pt-28">
          <div>
            <h2>Contact</h2>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FloatingDock mobileClassName="translate-y-20" items={links} />
          </div>
        </div>
      </BackgroundLines>
    </section>
  );
};

export default Contact;
