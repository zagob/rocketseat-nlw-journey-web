import { useState } from "react";
import { CreateActivityDialog } from "./create-activity-dialog";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { HeaderLocation } from "./header-location";

export function TripDetailsPage() {
  const [isCreateActivityDialogOpen, setIsCreateActivityDialogOpen] =
    useState(false);

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <HeaderLocation />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-semibold">Atividades</h2>

            <CreateActivityDialog
              open={isCreateActivityDialogOpen}
              onOpenChange={setIsCreateActivityDialogOpen}
            />
          </div>

          <Activities />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="w-full h-px bg-zinc-800" />

          <Guests />
        </div>
      </main>
    </div>
  );
}
