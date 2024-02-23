import React from "react";
import { Home } from "@/pages";

type AppRoute = {
  path: string;
  component: React.ElementType;
};

type AppRoutes = Record<string, AppRoute>;

export const APP_ROUTES: AppRoutes = {
  HOME: { path: "início", component: Home },
  EXPERIENCE: { path: "experiência", component: Home },
  CONTACT: { path: "contato", component: Home }
};
