import { Textbox } from "@/components/Tracker/Textbox";
import { Dropdownbox } from "@/components/Tracker/Dropdownbox";
import type { TrackerComponentType } from "@/types/tracker/components/TrackerComponent";

type TrackerComponentFactoryProps = {
  component: TrackerComponentType;
};

export function TrackerComponentFactory({
  component,
}: TrackerComponentFactoryProps) {
  switch (component.type) {
    case "Dropdown":
      return <Dropdownbox dropdownbox={component}></Dropdownbox>;

    case "Textbox":
      return <Textbox textbox={component}></Textbox>;
  }
}
