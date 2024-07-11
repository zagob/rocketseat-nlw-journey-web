import { ArrowRight, MapPin, Settings2 } from "lucide-react";
import { Divider } from "../../../components/Divider";
import { Button } from "../../../components/button";
import { useState } from "react";
import { DatePickerDialog } from "./date-picker-dialog";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  onCloseGuestsInput: () => void;
  onOpenGuestsInput: () => void;
}

export function DestinationAndDateStep({
  isGuestsInputOpen,
  onCloseGuestsInput,
  onOpenGuestsInput,
}: DestinationAndDateStepProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);

  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
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
      />

      {/* <button
        onClick={openDatePicker}
        disabled={isGuestsInputOpen}
        className="flex items-center gap-2 disabled:cursor-not-allowed"
      >
        <Calendar className="size-5 text-zinc-400" />
        <span className="text-lg text-zinc-400 w-40 text-left">Quando?</span>
      </button> */}

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
