import { loginHandler } from "@/handlers/authHandlers";

export function loginRoute(reqBody: { username: string; password: string }) {
  try {
    const visitor = loginHandler(reqBody);
    return {
      success: true,
      message: "Inicio de sesión exitoso",
      data: {
        fullName: visitor.fullName,
        ticketNumber: visitor.ticketNumber,
      },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        success: false,
        message: error.message,
      };
    }
    return {
      success: false,
      message: "Error desconocido",
    };
  }
}
