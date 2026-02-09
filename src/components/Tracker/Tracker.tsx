import type { CSSProperties } from "react";
import { Textbox } from "@/components/Tracker/Textbox";
import type { TrackerType } from "@/types/tracker/Tracker";
import { TrackerComponentFactory } from "./TrackerComponentFactory";

type TrackerProps = {
  tracker: TrackerType;
  style?: CSSProperties;
};

export function TrackerComponent({ tracker, style }: TrackerProps) {
  return (
    <section
      className="flex flex-col border border-foreground rounded shadow w-150 h-175"
      style={style}
    >
      <section className="border-b border-foreground flex items-center justify-center py-4 h-15">
        {tracker.Name}
      </section>
      <section className="flex-1 relative">
        {/* <Textbox></Textbox> */}
        {tracker.Components.map((c) => (
          <TrackerComponentFactory component={c} />
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
