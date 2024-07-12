import { Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../../components/Dialog";
import { DateRange, DayPicker } from "react-day-picker";
import { format } from "date-fns";
import "react-day-picker/dist/style.css";

interface DatePickerDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  isGuestsInputOpen: boolean;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
  eventStartAndEndDates: DateRange | undefined;
}

export function DatePickerDialog({
  open,
  onOpenChange,
  isGuestsInputOpen,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DatePickerDialogProps) {
  const displayedDate =
    eventStartAndEndDates &&
    eventStartAndEndDates.from &&
    eventStartAndEndDates.to
      ? format(eventStartAndEndDates.from, "d ' de 'LLL")
          .concat(" até ")
          .concat(format(eventStartAndEndDates.to, "d ' de 'LLL"))
      : null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          disabled={isGuestsInputOpen}
          className="flex items-center gap-2 disabled:cursor-not-allowed"
        >
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-lg text-zinc-400 w-fit text-left">
            {displayedDate ?? "Quando?"}
          </span>
        </button>
      </DialogTrigger>

      <DialogContent className="rounded-xl space-y-5 w-fit">
        <div className="space-y-2">
          <DialogTitle asChild>
            <h2 className="text-lg font-semibold">Selecione a data</h2>
          </DialogTitle>
        </div>

        <DayPicker
          mode="range"
          selected={eventStartAndEndDates}
          onSelect={setEventStartAndEndDates}
        />
      </DialogContent>
    </Dialog>
  );
}
