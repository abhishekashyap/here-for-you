export type Message = {
  id: number;
  type: "bot" | "user";
  message: string;
};
