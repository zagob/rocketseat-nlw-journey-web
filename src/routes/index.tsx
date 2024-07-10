import { createBrowserRouter } from "react-router-dom";
import { TripDetailsPage } from "../pages/trip-details";
import { CreateTripPage } from "../pages/create-trip";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CreateTripPage />,
  },
  {
    path: "/trips/:tripid",
    element: <TripDetailsPage />,
  },
]);
