import { Tracker } from "@/components/Tracker/Tracker";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function ManageTracker() {
  return (
    <section className="h-full flex flex-col">
      <section className="border-b flex justify-center gap-2 py-2">
        Top bar
      </section>
      <section className="flex-1 overflow-auto flex flex-row">
        <section className="flex-1 overflow-auto flex items-center justify-center">
          <Tracker></Tracker>
        </section>
        <section className="border-l w-100 p-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-center">Tracker Settings</h3>
            <Field>
              <Label>Name</Label>
              <Input type="text"></Input>
            </Field>
          </div>
        </section>
      </section>
    </section>
  );
}
