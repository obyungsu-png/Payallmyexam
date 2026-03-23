import { createBrowserRouter } from "react-router";
import { Dashboard } from "./pages/Dashboard";
import { Students } from "./pages/Students";
import { Schedule } from "./pages/Schedule";
import { Attendance } from "./pages/Attendance";
import { Billing } from "./pages/Billing";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "students", Component: Students },
      { path: "schedule", Component: Schedule },
      { path: "attendance", Component: Attendance },
      { path: "billing", Component: Billing },
    ],
  },
]);
