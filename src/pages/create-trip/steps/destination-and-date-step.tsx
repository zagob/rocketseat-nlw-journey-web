import { ArrowRight, MapPin, Settings2 } from "lucide-react";
import { Divider } from "../../../components/Divider";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DatePickerDialog } from "./date-picker-dialog";
import { DateRange } from "react-day-picker";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  onCloseGuestsInput: () => void;
  onOpenGuestsInput: () => void;
  setDestination: (destination: string) => void;
  setEventStartAndEndDates: (dates: DateRange | undefined) => void;
  eventStartAndEndDates: DateRange | undefined;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  onCloseGuestsInput,
  onOpenGuestsInput,
  setDestination,
  setEventStartAndEndDates,
  eventStartAndEndDates,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          onChange={(event) => setDestination(event.target.value)}
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
        />
      </div>

      <DatePickerDialog
        open={isDatePickerOpen}
        onOpenChange={setIsDatePickerOpen}
        isGuestsInputOpen={isGuestsInputOpen}
        setEventStartAndEndDates={setEventStartAndEndDates}
        eventStartAndEndDates={eventStartAndEndDates}
      />

      <Divider />

      {isGuestsInputOpen ? (
        <Button variant="secondary" onClick={onCloseGuestsInput}>
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      ) : (
        <Button onClick={onOpenGuestsInput}>
          Continuar
          <ArrowRight className="size-5" />
        </Button>
      )}
    </div>
  );
}
