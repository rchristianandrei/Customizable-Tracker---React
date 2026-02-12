import { type CSSProperties } from "react";
import { TrackerComponentFactory } from "./TrackerComponentFactory";
import {
  TrackerTypeDefaultValue,
  type TrackerType,
} from "@/types/tracker/Tracker";

type TrackerProps = {
  tracker: TrackerType;
  selectedComponentId?: number;
  style?: CSSProperties;
  onComponentClick?: (componentId: number) => void;
};

export function TrackerComponent({
  tracker,
  selectedComponentId = 0,
  style,
  onComponentClick,
}: TrackerProps) {
  return (
    <section
      className="flex flex-col border border-foreground rounded shadow h-175"
      style={style}
    >
      <section className="border-b border-foreground flex items-center justify-center py-4 h-15">
        {tracker.name}
      </section>
      <section
        className="flex-1 relative overflow-hidden"
        style={{ width: `${tracker.width ?? TrackerTypeDefaultValue.width}px` }}
      >
        {tracker.components.map((c) => (
          <TrackerComponentFactory
            key={c.id}
            clicked={selectedComponentId === c.id}
            component={c}
            onComponentClick={() =>
              onComponentClick ? onComponentClick(c.id) : null
            }
          />
        ))}
      </section>
      <section className="border-t border-foreground p-1 flex justify-center">
        <button type="button" className="w-full">
          Submit
        </button>
      </section>
    </section>
  );
}
