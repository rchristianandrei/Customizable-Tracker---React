import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { DropdownboxType } from "@/types/tracker/components/Dropdownbox";
import { CreateOption } from "./CreateOption";

type DropdownSettingsProps = {
  dropdown: DropdownboxType;
};

export function DropdownSettings({ dropdown }: DropdownSettingsProps) {
  return (
    <>
      <Dialog>
        <DialogTrigger>Manage Options</DialogTrigger>
        <DialogContent
          className="h-100 flex flex-col gap-2"
          aria-description="Lists of Options"
          aria-describedby=""
        >
          <DialogHeader>
            <DialogTitle>Dropdown Options</DialogTitle>
          </DialogHeader>
          <div className="flex justify-end">
            <CreateOption></CreateOption>
          </div>
          <div className="flex-1">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-25">Label</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody className="">
                {dropdown.options.map((o, i) => (
                  <TableRow key={i}>
                    <TableCell className="font-medium">{o}</TableCell>
                    <TableCell className="text-right flex justify-end gap-1">
                      <button type="button">Edit</button>
                      <button type="button">Delete</button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div>Count: {dropdown.options.length}</div>
        </DialogContent>
      </Dialog>
    </>
  );
}
