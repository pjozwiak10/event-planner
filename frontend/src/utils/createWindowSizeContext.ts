import { createContext } from "react";

export const WindowSizeContext = createContext<null | { width: number, height: number }>(null);