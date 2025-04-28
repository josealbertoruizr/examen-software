import { visitors } from "@/db/visitors";

export function validateCredentials(username: string, password: string) {
  const visitor = visitors.find(
    (v) => v.username === username && v.password === password
  );

  if (!visitor) {
    throw new Error("Usuario o contraseña incorrectos");
  }

  return visitor;
}
