import { BreadCrumHeader } from "@/app/(app)/(loggedin)/components/header/bread-crumb-server";
import React, { useContext } from "react";

export const BreadCrumbProvider = React.createContext(null);
export const useBreadCrumbProvider = () =>
  useContext(BreadCrumbProvider) as any as BreadCrumHeader;
