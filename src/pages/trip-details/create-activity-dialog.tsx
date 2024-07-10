import { Plus, Tag } from "lucide-react";
import { Button } from "../../components/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../components/Dialog";

interface CreateActivityDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CreateActivityDialog({
  onOpenChange,
  open,
}: CreateActivityDialogProps) {
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

        <form className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Tag className="text-zinc-400 size-5" />
            <input
              name="title"
              placeholder="Qual a atividade?"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
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
