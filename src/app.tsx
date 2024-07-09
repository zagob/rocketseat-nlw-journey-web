import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { FormEvent, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "./components/Dialog";
import clsx from "clsx";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isDialogGuests, setIsDialogGuests] = useState(false);
  const [emailsToInvites, setEmailsToInvite] = useState<string[]>([
    "matheusbestana@gmail.com",
  ]);
  const [existEqualEmailToInvite, setExistEqualEmailToInvite] = useState(false);

  function onOpenGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function onCloseGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  function onAddNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) return null;

    if (emailsToInvites.includes(email)) {
      setExistEqualEmailToInvite(true);
      return;
    }
    setExistEqualEmailToInvite(false);

    setEmailsToInvite((prevEmails) => [...prevEmails, email]);

    event.currentTarget.reset();
  }

  function onRemoveEmailFromInvites(email: string) {
    setEmailsToInvite((prevState) =>
      prevState.filter((value) => value !== email)
    );
  }

  return (
    <div
      className={clsx(
        "min-h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center",
        {
          ["blur-sm"]: isDialogGuests,
        }
      )}
    >
      <div className="max-w-3xl w-full px-6 text-center space-y-10">
        <div>
          <div className="flex justify-center">
            <img src="Logo.svg" alt="plann.er" />
          </div>
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                disabled={isGuestsInputOpen}
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 disabled:cursor-not-allowed"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                disabled={isGuestsInputOpen}
                placeholder="Quando?"
                className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none disabled:cursor-not-allowed"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <button
                onClick={onCloseGuestsInput}
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 className="size-5" />
              </button>
            ) : (
              <button
                onClick={onOpenGuestsInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Continuar
                <ArrowRight className="size-5" />
              </button>
            )}
          </div>

          {isGuestsInputOpen ? (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <Dialog open={isDialogGuests} onOpenChange={setIsDialogGuests}>
                  <DialogTrigger asChild>
                    <input
                      type="text"
                      placeholder="Quem estará na viagem?"
                      className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1 text-left"
                    />
                  </DialogTrigger>

                  <DialogContent className="rounded-xl space-y-5">
                    <div className="space-y-2">
                      <DialogTitle asChild>
                        <h2 className="text-lg font-semibold">
                          Selecionar convidados
                        </h2>
                      </DialogTitle>

                      <p className="text-sm text-zinc-400">
                        Os convidados irão receber e-mails para confirmar a
                        participação na viagem.
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
                      <button
                        type="submit"
                        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
                      >
                        Convidar
                        <Plus className="size-5" />
                      </button>
                    </form>
                    {existEqualEmailToInvite && (
                      <span className="text-xs text-red-400 font-bold">
                        Email ja existente, tente outro*
                      </span>
                    )}
                  </DialogContent>
                </Dialog>
              </div>

              <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          ) : null}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default App;
