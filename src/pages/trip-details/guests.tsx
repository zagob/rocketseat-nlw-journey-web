import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h2 className="font-semibold text-xl">Convidados</h2>
      <div className="space-y-5">
        {[
          { name: "Jessica White", email: "jessica.white44@yahoo.com" },
          {
            name: "Dr. Rita Pacocha",
            email: "lacy.stiedemann@gmail.com",
            enable: true,
          },
          {
            name: "Wilfred Dickens III",
            email: "marian.hyatt@hotmail.com",
            enable: true,
          },
          {
            name: "Rodney White",
            email: "ford_prosacco@hotmail.com",
          },
          {
            name: "Sherman Swaniawski",
            email: "stanley_emard@yahoo.com",
          },
        ].map((item) => (
          <div
            key={item.email}
            className="flex items-center justify-between gap-4"
          >
            <div className="space-y-1.5">
              <span className="block font-medium text-zinc-100">
                {item.name}
              </span>
              <span className="block font-medium text-sm text-zinc-400 truncate">
                {item.email}
              </span>
            </div>
            {item.enable ? (
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
