import type { BaseComponent } from "./BaseComponent";

export type DropdownboxType = BaseComponent & {
  type: "Dropdown";
  maxCount: number;
};
