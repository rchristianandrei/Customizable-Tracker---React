import { Textbox } from "@/components/Tracker/Textbox";
import { Dropdownbox } from "@/components/Tracker/Dropdownbox";
import type { TrackerComponentType } from "@/types/tracker/components/TrackerComponent";

type TrackerComponentFactoryProps = {
  component: TrackerComponentType;
  clicked: boolean;
  onComponentClick: () => void;
};

export function TrackerComponentFactory({
  component,
  clicked = false,
  onComponentClick,
}: TrackerComponentFactoryProps) {
  function triggerSelectComponentEvent() {
    onComponentClick();
  }

  switch (component.type) {
    case "Dropdown":
      return (
        <Dropdownbox
          dropdownbox={component}
          clicked={clicked}
          onClick={triggerSelectComponentEvent}
        ></Dropdownbox>
      );

    case "Textbox":
      return (
        <Textbox
          textbox={component}
          clicked={clicked}
          onClick={triggerSelectComponentEvent}
        ></Textbox>
      );
  }
}
