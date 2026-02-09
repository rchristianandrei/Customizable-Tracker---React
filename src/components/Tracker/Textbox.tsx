import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  TextboxTypeDefaultValue,
  type TextboxType,
} from "@/types/tracker/components/Textbox";

type TextboxProps = {
  textbox?: TextboxType;
};

export function Textbox({ textbox = TextboxTypeDefaultValue }: TextboxProps) {
  return (
    <Field
      className="absolute border rounded border-background"
      style={{ width: textbox.Width, left: textbox.Left, top: textbox.Top }}
    >
      <Label>Sample Text</Label>
      <Input type="text" placeholder="placeholder"></Input>
    </Field>
  );
}
