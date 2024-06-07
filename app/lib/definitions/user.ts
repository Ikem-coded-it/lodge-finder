export type AuthProvider = "auth0";
export type Token = {
  type: string;
  name?: string;
  token: string;
  abilities: string[];
  lastUsedAt?: Date;
  expiresAt: Date;
};

// export interface User {
//   token: Token;
//   userReference: string;
//   firstname: string;
//   lastname: string | null;
//   email: string;
//   emailVerified: boolean;
//   picture: string | null;
//   callNumber: string;
//   whatsappNumber: string;
//   createdAt: Date;
//   updatedAt: Date;
// }

export type User = {
  given_name: string
  family_name: string
  nickname: string
  name: string
  picture: string
  locale: string
  updated_at: string,
  email: string,
  email_verified: true | false,
  sub: string,
  sid: string
}
