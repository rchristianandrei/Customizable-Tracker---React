import type { TrackerType } from "@/types/tracker/Tracker";
import { TrackerComponent } from "@/components/Tracker/Tracker";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TopBar } from "@/pages/manage-tracker/TopBar";
import { useState } from "react";
import { TextboxTypeDefaultValue } from "@/types/tracker/components/Textbox";

export function ManageTracker() {
  const [tracker, setTracker] = useState<TrackerType>({
    Name: "Tracker Name",
    Components: [
      TextboxTypeDefaultValue,
      {
        Name: "Textbox",
        Width: "200px",
        Left: "20px",
        Top: "100px",
      },
      {
        Name: "Textbox",
        Width: "200px",
        Left: "220px",
        Top: "20px",
      },
      {
        Name: "Textbox",
        Width: "200px",
        Left: "220px",
        Top: "100px",
      },
    ],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTracker((t) => ({
      ...t,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="h-full flex flex-col">
      <TopBar></TopBar>
      <section className="flex-1 overflow-auto flex flex-row">
        <section className="flex-1 overflow-auto flex items-center justify-center">
          <TrackerComponent tracker={tracker}></TrackerComponent>
        </section>
        <section className="border-l border-foreground w-100 p-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-center">Tracker Settings</h3>
            <Field>
              <Label>Name</Label>
              <Input
                name="Name"
                onChange={handleChange}
                type="text"
                value={tracker.Name}
              ></Input>
            </Field>
          </div>
        </section>
      </section>
    </section>
  );
}
