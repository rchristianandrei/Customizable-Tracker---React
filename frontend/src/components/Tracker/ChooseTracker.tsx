import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useManageTrackers } from "@/hooks/useManageTrackers";

export const ChooseTracker = ({
  onSelectTracker,
}: {
  onSelectTracker?: (id: number) => void;
}) => {
  const { trackers, getTrackers } = useManageTrackers();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    getTrackers();
  }, []);

  return (
    <Dialog open={open}>
      <DialogContent
        className="w-75 [&>button]:hidden"
        aria-description="Lists of Trackers"
        aria-describedby=""
      >
        <DialogHeader>
          <DialogTitle>Choose Tracker</DialogTitle>
        </DialogHeader>
        <div className="flex-1 overflow-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tracker Name</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="">
              {trackers &&
                trackers.map((t) => (
                  <TableRow
                    key={t.id}
                    className="cursor-pointer"
                    onClick={() => {
                      if (onSelectTracker) onSelectTracker(t.id);
                      setOpen(false);
                    }}
                  >
                    <TableCell className="font-medium">{t.name}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  );
};
