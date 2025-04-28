export interface Visitor {
  username: string;
  password: string;
  fullName: string;
  ticketNumber: string;
}

export const visitors: Visitor[] = [
  {
    username: "alejandra.m",
    password: "verde123",
    fullName: "Alejandra Morales",
    ticketNumber: "00123",
  },
  {
    username: "david.p",
    password: "bosque456",
    fullName: "David Pérez",
    ticketNumber: "00124",
  },
  {
    username: "lucia.r",
    password: "eco789",
    fullName: "Lucía Ramírez",
    ticketNumber: "00125",
  },
];

export function validateVisitor(username: string, password: string) {
  return visitors.find(
    (visitor) => visitor.username === username && visitor.password === password
  );
}
