import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { BaseComponent } from "@/components/Tracker/BaseComponent";
import {
  DropdownboxTypeDefaultValue,
  type DropdownboxType,
} from "@/types/tracker/components/Dropdownbox";

type TextboxProps = {
  textbox?: DropdownboxType;
  clicked?: boolean;
  onClick?: () => void;
};

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function Dropdownbox({
  textbox = DropdownboxTypeDefaultValue,
  clicked = false,
  onClick,
}: TextboxProps) {
  return (
    <BaseComponent clicked={clicked} component={textbox} onClick={onClick}>
      <Combobox items={frameworks}>
        <ComboboxInput placeholder="Select a framework" />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </BaseComponent>
  );
}
