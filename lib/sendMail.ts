import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: 'smpt.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMPT_EMAIL_USER,
    pass: process.env.SMPT_EMAIL_PASSWORD,
  },
});

export async function sendMail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const info = await transporter.sendMail({
    from: `Formulario de contacto Portfolio 2025${name} - ${email}`,
    to: process.env.EMAIL_USER,
    subject: "Nuevo Message de contacto",
    text: `Nombre: ${name} - Email: ${email} - Mensaje: ${message}`,
    html: `<p>Nombre:${name} - Email: ${email} - Mensaje: ${message}</p>`,
  });

  console.log(info);
}
