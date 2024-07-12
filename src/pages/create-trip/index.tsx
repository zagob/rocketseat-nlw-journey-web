import { FormEvent, useState } from "react";

import clsx from "clsx";
import { InviteGuestsDialog } from "./invite-guests-dialog";
import { ConfirmTripDialog } from "./confirm-trip-dialog";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-step";
import { DateRange } from "react-day-picker";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [existEqualEmailToInvite, setExistEqualEmailToInvite] = useState(false);

  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isDialogGuests, setIsDialogGuests] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);

  const [destination, setDestination] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [ownerEmail, setOwnerEmail] = useState("");
  const [eventStartAndEndDates, setEventStartAndEndDates] = useState<
    DateRange | undefined
  >();

  const [emailsToInvites, setEmailsToInvite] = useState<string[]>([
    "matheusbestana@gmail.com",
  ]);

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

  async function onCreateTrip(event: FormEvent) {
    event.preventDefault();

    if (!destination) {
      return;
    }

    if (!eventStartAndEndDates?.from || !eventStartAndEndDates?.to) {
      return;
    }

    if (emailsToInvites.length === 0) {
      return;
    }

    if (!ownerName || !ownerEmail) {
      return;
    }

    const response = await api.post("/trips", {
      destination,
      starts_at: eventStartAndEndDates?.from,
      ends_at: eventStartAndEndDates.to,
      emails_to_invite: emailsToInvites,
      owner_name: ownerName,
      owner_email: ownerEmail,
    });

    const { tripId } = response.data;

    navigate(`/trips/${tripId}`);
  }

  return (
    <div
      className={clsx(
        "min-h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center",
        {
          ["blur-sm"]: isDialogGuests || isConfirmTripModalOpen,
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
          <DestinationAndDateStep
            isGuestsInputOpen={isGuestsInputOpen}
            onCloseGuestsInput={onCloseGuestsInput}
            onOpenGuestsInput={onOpenGuestsInput}
            setDestination={setDestination}
            setEventStartAndEndDates={setEventStartAndEndDates}
            eventStartAndEndDates={eventStartAndEndDates}
          />

          {isGuestsInputOpen ? (
            <InviteGuestsStep
              dialogInviteGuests={
                <InviteGuestsDialog
                  emailsToInvites={emailsToInvites}
                  existEqualEmailToInvite={existEqualEmailToInvite}
                  open={isDialogGuests}
                  onOpenChange={setIsDialogGuests}
                  onAddNewEmailToInvite={onAddNewEmailToInvite}
                  onRemoveEmailFromInvites={onRemoveEmailFromInvites}
                />
              }
              dialogConfirmTrip={
                <ConfirmTripDialog
                  open={isConfirmTripModalOpen}
                  onOpenChange={setIsConfirmTripModalOpen}
                  setOwnerName={setOwnerName}
                  setOwnerEmail={setOwnerEmail}
                  onCreateTrip={onCreateTrip}
                />
              }
            />
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
