import { Textbox } from "@/components/Tracker/Textbox";
import type { BaseComponent } from "@/types/tracker/components/BaseComponent";

type TrackerComponentFactoryProps = {
  component: BaseComponent;
};

export function TrackerComponentFactory({
  component,
}: TrackerComponentFactoryProps) {
  return <Textbox textbox={component}></Textbox>;
}
