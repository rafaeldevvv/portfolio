import { createContext, useContext } from "react";

export const AuthorContext = createContext(null);

export function getAuthor() {
   return useContext(AuthorContext);
}