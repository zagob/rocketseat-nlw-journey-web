import { ArrowRight, Mail, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../components/Dialog";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ConfirmTripDialog({
  open,
  onOpenChange,
}: ConfirmTripDialogProps) {
  const navigate = useNavigate();

  function onCreateTrip(event: FormEvent) {
    event.preventDefault();
    navigate("/trips/123");
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          Confirmar viagem
          <ArrowRight className="size-5" />
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-xl space-y-5">
        <div className="space-y-2">
          <DialogTitle asChild>
            <h2 className="text-lg font-semibold">
              Confirmar criação da viagem
            </h2>
          </DialogTitle>

          <p className="text-sm text-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="font-semibold text-zinc-100">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="font-semibold text-zinc-100">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={onCreateTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
            />
          </div>

          <Button
            className="w-full flex items-center justify-center h-11"
            type="submit"
          >
            Confirmar criação da viagem
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
