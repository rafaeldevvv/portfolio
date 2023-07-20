import { createContext, useContext } from "react";

export const AuthorContext = createContext(null);

export function useAuthor() {
   return useContext(AuthorContext);
}