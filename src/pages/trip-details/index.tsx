import {
  Calendar,
  CircleCheck,
  CircleDashed,
  Link2,
  MapPin,
  Plus,
  Settings2,
  UserCog,
} from "lucide-react";
import { Divider } from "../../components/Divider";
import { Button } from "../../components/button";
import { useState } from "react";
import { CreateActivityDialog } from "./create-activity-dialog";

export function TripDetailsPage() {
  const [isCreateActivityDialogOpen, setIsCreateActivityDialogOpen] =
    useState(false);

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="px-4 h-16 rounded-xl bg-zinc-900 shadow-shape flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="size-5 text-zinc-400" />
          <span className="text-zinc-100">Florianópolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 a 23 de Agosto</span>
          </div>

          <Divider />

          <Button variant="secondary">
            Alterar local/data
            <Settings2 className="size-5" />
          </Button>
        </div>
      </div>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <CreateActivityDialog
              open={isCreateActivityDialogOpen}
              onOpenChange={setIsCreateActivityDialogOpen}
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 17
                </span>
                <span className="text-xs text-zinc-500">Sabado</span>
              </div>
              <p className="text-sm text-zinc-500">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
            <div className="space-y-2.5">
              <div className="flex gap-2 items-baseline">
                <span className="text-xl text-zinc-300 font-semibold">
                  Dia 18
                </span>
                <span className="text-xs text-zinc-500">Domingo</span>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="px-4 py-2.5 bg-zinc-900 rounded-xl shadow-shape flex items-center gap-3">
                  <CircleCheck className="size-5 text-lime-300" />
                  <span className="text-zinc-100">Academia em grupo</span>
                  <span className="text-zinc-400 text-sm ml-auto">08:00h</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="font-semibold text-xl">Links importantes</h2>
            <div className="space-y-5">
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Reserva do AirBnB
                  </span>
                  <a
                    href="#"
                    className="block font-medium text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.airbnb.com.br/rooms/104700011
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>
              <div className="flex items-center justify-between gap-4">
                <div className="space-y-1.5">
                  <span className="block font-medium text-zinc-100">
                    Regras da casa
                  </span>
                  <a
                    href="#"
                    className="block font-medium text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    https://www.notion.com/pages/1047000112354648336?adults=13&children=0&infants=0&pets=0&wishlist_item_id=11003621872995&check_in=2024-08-17&check_out=2024-08-26&source_impression_id=p3_1717600906_P3DL0E-bJZzguEci&previous_page_section_name=1000
                  </a>
                </div>
                <Link2 className="text-zinc-400 size-5 shrink-0" />
              </div>
            </div>
            <Button variant="secondary" className="w-full justify-center h-11">
              <Plus className="size-5" />
              Cadastrar novo link
            </Button>
          </div>

          <div className="w-full h-px bg-zinc-800" />

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
        </div>
      </main>
    </div>
  );
}
