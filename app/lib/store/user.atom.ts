import { atom } from 'nanostores';
import { User } from "@/app/lib/definitions/user"

export const $user = atom<User | null>(null)
export const $authToken = atom<string | null>(null)

export function saveUser(userData: User) {
  $user.set(userData as User);
}

export function saveToken(token: string) {
  $authToken.set(token);
}