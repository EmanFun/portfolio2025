"use client";
import React from "react";
import { cn } from "../../lib/utils";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const FormContact = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      console.log("Mensaje enviado correctamente");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  return (
    <div
      className="max-w-md w-full mx-auto  rounded-md p-4 md:p8  bg-black/50 "
      style={{
        background:
          "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
      }}
    >
      <h2 className="font-bold text-xl text-gray-400">Contactame</h2>
      <p className=" text-sm max-w-sm mt-2 text-neutral-300">
        Enviame un mensaje y te responderé lo antes posible
      </p>
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-col space-y-8 md:space-y-0 md:space-x-2 mb-4 justify-center items-center gap-4">
          <LabelInputContainer>
            <Label htmlFor="name" className="text-neutral-300">
              Nombre
            </Label>
            <Input
              id="name"
              placeholder="Nombre"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="text-neutral-300 bg-black/50 border-neutral-700"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="email" className="text-neutral-300">
              Email
            </Label>
            <Input
              id="email"
              placeholder="Email"
              type="text"
              value={formData.email}
              onChange={handleChange}
              className="text-neutral-300 bg-black/50 border-neutral-700"
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="message" className="text-neutral-300">
              Mensaje
            </Label>
            <textarea
              id="message"
              placeholder="Deja tu mensaje"
              className="h-28 rounded-md px-3 py-1 placeholder:text-gray-400 text-neutral-300 bg-black/50 border-neutral-700"
              value={formData.message}
              onChange={handleChange}
            />
          </LabelInputContainer>
          <button
            className="bg-gradient-to-br relative group/btn text-gray-400 from-black to-neutral-900 w-full  rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900)",
            }}
          >
            Contactar
            <BottomGradient />
          </button>
        </div>
      </form>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default FormContact;
