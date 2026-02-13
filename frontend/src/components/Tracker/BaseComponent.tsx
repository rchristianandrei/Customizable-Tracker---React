import type React from "react";
import { Field } from "@/components/ui/field";
import { Label } from "@/components/ui/label";
import type { BaseComponent } from "@/types/tracker/components/BaseComponent";
import { useTrackerComponent } from "@/contexts/TrackerContext";
import { useMemo } from "react";

type BaseComponentProps = {
  children: React.ReactNode;
  component: BaseComponent;
};

export function BaseComponent({ children, component }: BaseComponentProps) {
  const { isClicked: selectedComponentId, setOnSelectComponent } =
    useTrackerComponent();

  const clicked = useMemo(
    () => selectedComponentId === component.id,
    [selectedComponentId],
  );

  return (
    <Field
      className={`absolute border rounded gap-1 ${clicked ? "border-foreground" : "border-background"}`}
      onClick={() => setOnSelectComponent(component.id)}
      style={{
        width: `${component.width}px`,
        left: `${component.x}px`,
        top: `${component.y}px`,
      }}
    >
      <div className="flex items-center justify-between">
        <Label className="h-3.5">{component.name}</Label>
        <span className="text-red-700">*</span>
      </div>
      {children}
    </Field>
  );
}
