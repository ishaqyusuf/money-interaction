import React, { useContext } from "react";

export const BreadCrumbProvider = React.createContext(null);
export const useBreadCrumbProvider = () => useContext(BreadCrumbProvider);
