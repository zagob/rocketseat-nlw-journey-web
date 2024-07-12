import { Calendar, Plus, Tag } from "lucide-react";
import { Button } from "../../components/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../components/Dialog";
import { FormEvent } from "react";
import { api } from "../../lib/axios";
import { useParams } from "react-router-dom";

interface CreateActivityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateActivityDialog({
  onOpenChange,
  open,
}: CreateActivityDialogProps) {
  const { tripid } = useParams();

  async function createActivity(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const title = data.get("title")?.toString();
    const occurs_at = data.get("occurs_at")?.toString();

    await api.post(`/trips/${tripid}/activities`, {
      title,
      occurs_at,
    });

    window.document.location.reload();
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="size-5" />
          Cadastrar atividade
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-xl space-y-5">
        <div className="space-y-2">
          <DialogTitle asChild>
            <h2 className="text-lg font-semibold">Cadastrar atividade</h2>
          </DialogTitle>

          <p className="text-sm text-zinc-400">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form onSubmit={createActivity} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
            />
          </div>

          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Calendar className="text-zinc-400 size-5" />
            <input
              type="datetime-local"
              name="occurs_at"
              placeholder="Data e Horário da atividade"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed [color-scheme:dark]"
            />
          </div>

          <Button
            className="w-full flex items-center justify-center h-11"
            type="submit"
          >
            Salvar atividade
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
