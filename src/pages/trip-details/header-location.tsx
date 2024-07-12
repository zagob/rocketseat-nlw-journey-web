import { Calendar, MapPin, Settings2 } from "lucide-react";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/button";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { format } from "date-fns";

interface TripProps {
  id: string;
  destination: string;
  starts_at: string;
  ends_at: string;
  is_confirmed: boolean;
}

export function HeaderLocation() {
  const { tripid } = useParams();
  const [trip, setTrip] = useState<TripProps | undefined>();

  useEffect(() => {
    api.get(`/trips/${tripid}`).then((response) => {
      setTrip(response.data.trip);
    });
  }, [tripid]);

  const displayedDate = trip
    ? format(trip.starts_at, "d ' de 'LLL")
        .concat(" até ")
        .concat(format(trip.ends_at, "d ' de 'LLL"))
    : null;

  return (
    <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
      <div className="flex items-center gap-2">
        <MapPin className="size-5 text-zinc-400" />
        <span className="text-zinc-100">{trip?.destination}</span>
      </div>

      <div className="flex items-center gap-5">
        <div className="flex items-center gap-2">
          <Calendar className="size-5 text-zinc-400" />
          <span className="text-zinc-100">{displayedDate}</span>
        </div>

        <Divider />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>
    </div>
  );
}
