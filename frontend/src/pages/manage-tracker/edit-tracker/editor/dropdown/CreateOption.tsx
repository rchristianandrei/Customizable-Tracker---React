import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CreateOption() {
  return (
    <Dialog>
      <DialogTrigger>Add</DialogTrigger>
      <DialogContent
        className="w-75"
        aria-description="Lists of Options"
        aria-describedby=""
      >
        <DialogHeader>
          <DialogTitle>Create Option</DialogTitle>
        </DialogHeader>
        <Field className="gap-1">
          <Label>Label</Label>
          <Input
            name="label"
            //   onChange={handleChange}
            type="text"
            // value={selectedComponent.name}
          ></Input>
        </Field>
        <Field className="gap-1">
          <Label>Value</Label>
          <Input
            name="value"
            //   onChange={handleChange}
            type="text"
            // value={selectedComponent.name}
          ></Input>
        </Field>
        <Button variant="default">Add</Button>
      </DialogContent>
    </Dialog>
  );
}
