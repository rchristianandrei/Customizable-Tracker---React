import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { BaseComponent } from "@/components/Tracker/BaseComponent";
import { type DropdownboxType } from "@/types/tracker/components/Dropdownbox";

type DropdownboxProps = {
  dropdownbox: DropdownboxType;
  clicked?: boolean;
  onClick?: () => void;
};

const frameworks = ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"];

export function Dropdownbox({
  dropdownbox,
  clicked = false,
  onClick,
}: DropdownboxProps) {
  return (
    <BaseComponent clicked={clicked} component={dropdownbox} onClick={onClick}>
      <Combobox items={frameworks}>
        <ComboboxInput placeholder={dropdownbox.placeholder} />
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
