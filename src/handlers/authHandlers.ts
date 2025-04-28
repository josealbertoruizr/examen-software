import { validateCredentials } from "@/controllers/authController";

export function loginHandler(req: { username: string; password: string }) {
  if (!req.username || !req.password) {
    throw new Error("Faltan campos obligatorios");
  }

  const visitor = validateCredentials(req.username, req.password);
  return visitor;
}
