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
  type DropdownboxType,
  type DropdownOption,
} from "@/types/tracker/components/Dropdownbox";

type DropdownboxProps = {
  dropdownbox: DropdownboxType;
  clicked?: boolean;
  onClick?: () => void;
};

export function Dropdownbox({
  dropdownbox,
  clicked = false,
  onClick,
}: DropdownboxProps) {
  return (
    <BaseComponent clicked={clicked} component={dropdownbox} onClick={onClick}>
      <Combobox items={dropdownbox.options.map((o) => o.value)}>
        <ComboboxInput placeholder={dropdownbox.placeholder} />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {dropdownbox.options.map((o) => (
              <ComboboxItem key={o.id} value={o.value}>
                {o.value}
              </ComboboxItem>
            ))}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </BaseComponent>
  );
}
