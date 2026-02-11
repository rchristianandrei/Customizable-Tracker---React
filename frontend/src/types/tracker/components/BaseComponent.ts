export type BaseComponent = {
  id: number;
  type: "Textbox" | "Dropdown";
  name: string;
  placeholder: string;
  width: number;
  x: number;
  y: number;
};
