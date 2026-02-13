import { Input } from "@/components/ui/input";
import { type TextboxType } from "@/types/tracker/components/Textbox";
import { BaseComponent } from "@/components/Tracker/BaseComponent";
import { useTrackerComponent } from "@/contexts/TrackerContext";

type TextboxProps = {
  textbox: TextboxType;
};

export function Textbox({ textbox }: TextboxProps) {
  const { isDisabled } = useTrackerComponent();
  return (
    <BaseComponent component={textbox}>
      <Input
        type="text"
        placeholder={textbox.placeholder}
        maxLength={textbox.maxLength}
        disabled={isDisabled}
      ></Input>
    </BaseComponent>
  );
}
