import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";

type ParticipantProps = {
  id: string;
  name?: string;
  email: string;
  is_confirmed: boolean;
};

export function Guests() {
  const { tripid } = useParams();
  const [participants, setParticipants] = useState<ParticipantProps[]>([]);

  useEffect(() => {
    api.get(`/trips/${tripid}/participants`).then((response) => {
      setParticipants(response.data.participants);
    });
  }, [tripid]);

  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {participants?.map((participant, index) => (
          <div
            key={participant.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {participant?.name ?? `Convidado ${index}`}
              </span>
              <span className="block font-medium text-sm text-zinc-400 truncate">
                {participant.email}
              </span>
            </div>
            {participant.is_confirmed ? (
              <CircleCheck className="text-lime-400 size-5 shrink-0" />
            ) : (
              <CircleDashed className="text-zinc-400 size-5 shrink-0" />
            )}
          </div>
        ))}
      </div>
      <Button variant="secondary" className="w-full justify-center h-11">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
