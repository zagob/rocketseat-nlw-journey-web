import { UserRoundPlus } from "lucide-react";
import { ReactNode } from "react";

interface InviteGuestsStepProps {
  dialogInviteGuests: ReactNode;
  dialogConfirmTrip: ReactNode;
}

export function InviteGuestsStep({
  dialogConfirmTrip,
  dialogInviteGuests,
}: InviteGuestsStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="flex items-center gap-2 flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />

        {dialogInviteGuests}
      </div>

      {dialogConfirmTrip}
    </div>
  );
}
