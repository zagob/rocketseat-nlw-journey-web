import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Divider } from "../../../components/Divider";
import { Button } from "../../../components/button";

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

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none disabled:cursor-not-allowed"
        />
      </div>

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
