import { sendMail } from "@/lib/sendMail";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();
    console.log(name, email, message);
    await sendMail({ name, email, message });
    return NextResponse.json(
      { message: "Email enviado correctamente" },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error al enviar el correo", error);
    return NextResponse.json(
      { message: `Error al enviar el correo ${error}` },
      { status: 500 }
    );
  }
}
