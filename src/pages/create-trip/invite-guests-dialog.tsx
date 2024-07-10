import { AtSign, Plus, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../../components/Dialog";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface InviteGuestsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  emailsToInvites: string[];
  onAddNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
  onRemoveEmailFromInvites: (email: string) => void;
  existEqualEmailToInvite: boolean;
}

export function InviteGuestsDialog({
  open,
  onOpenChange,
  emailsToInvites,
  onAddNewEmailToInvite,
  onRemoveEmailFromInvites,
  existEqualEmailToInvite,
}: InviteGuestsDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <button
          type="button"
          className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left"
        >
          {emailsToInvites.length > 0 ? (
            <span className="text-zinc-100 text-lg flex-1">
              {emailsToInvites.length} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="text-zinc-400 text-lg flex-1">
              Quem estará na viagem?
            </span>
          )}
        </button>
      </DialogTrigger>

      <DialogContent className="rounded-xl space-y-5">
        <div className="space-y-2">
          <DialogTitle asChild>
            <h2 className="text-lg font-semibold">Selecionar convidados</h2>
          </DialogTitle>

          <p className="text-sm text-zinc-400">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvites.map((email) => (
            <div
              key={email}
              className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2"
            >
              <span className="text-zinc-300">{email}</span>
              <button
                onClick={() => onRemoveEmailFromInvites(email)}
                type="button"
              >
                <X className="size-4 text-zinc-400" />
              </button>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={onAddNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center flex-1 gap-2">
            <AtSign className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado"
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
            />
          </div>
          <Button type="submit">
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
        {existEqualEmailToInvite && (
          <span className="text-xs text-red-400 font-bold">
            Email ja existente, tente outro*
          </span>
        )}
      </DialogContent>
    </Dialog>
  );
}
