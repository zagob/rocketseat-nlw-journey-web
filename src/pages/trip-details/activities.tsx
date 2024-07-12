import { CircleCheck } from "lucide-react";
import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

type ActivitieProps = {
  id: string;
  title: string;
  occurs_at: string;
  trip_id: string;
};
interface ActivitiesProps {
  date: string;
  activities: ActivitieProps[] | [];
}

export function Activities() {
  const { tripid } = useParams();
  const [activities, setActivities] = useState<ActivitiesProps[]>([]);

  useEffect(() => {
    api.get(`/trips/${tripid}/activities`).then((response) => {
      setActivities(response.data.activities);
    });
  }, [tripid]);

  return (
    <div className="space-y-8">
      {activities.map((category) => {
        return (
          <div key={category.date} className="space-y-2.5">
            <div className="flex gap-2 items-baseline">
              <span className="text-xl text-zinc-300 font-semibold">
                Dia {format(category.date, "d")}
              </span>
              <span className="text-xs text-zinc-500">
                {format(category.date, "EEEE", {
                  locale: ptBR,
                })}
              </span>
            </div>
            {category.date.length > 0 ? (
              <div className="space-y-2.5">
                {category.activities.map((activity) => (
                  <div
                    key={activity.id}
                    className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3"
                  >
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">{activity.title}</span>
                    <span className="text-zinc-400 text-sm ml-auto">
                      {format(activity.occurs_at, "HH:mm")}h
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
