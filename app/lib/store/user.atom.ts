import { persistentMap } from "@nanostores/persistent";
import { Token, User } from "@/app/lib/definitions/user";
import { atom } from "nanostores";

// @ts-ignore
export const authToken = persistentMap<Token | null>("@", null);

// @ts-ignore
export const userAtomMap = persistentMap<User | null>("@chreestis", null);
export const saveUser = (user: User | null) => {
  if (!user) return userAtomMap.set(null);
  userAtomMap.set(JSON.stringify(user) as unknown as User);
};
export const logoutModal = atom(false);
