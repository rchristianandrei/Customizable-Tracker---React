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
import { useTrackerComponent } from "@/contexts/TrackerContext";

type DropdownboxProps = {
  dropdownbox: DropdownboxType;
};

export function Dropdownbox({ dropdownbox }: DropdownboxProps) {
  const { isDisabled } = useTrackerComponent();

  return (
    <BaseComponent component={dropdownbox}>
      <Combobox
        items={dropdownbox.options.map((o) => o.value)}
        disabled={isDisabled}
      >
        <ComboboxInput
          placeholder={dropdownbox.placeholder}
          disabled={isDisabled}
        />
        <ComboboxContent>
          <ComboboxEmpty>No items found.</ComboboxEmpty>
          <ComboboxList>
            {(item) => (
              <ComboboxItem key={item.id} value={item}>
                {item}
              </ComboboxItem>
            )}
          </ComboboxList>
        </ComboboxContent>
      </Combobox>
    </BaseComponent>
  );
}
