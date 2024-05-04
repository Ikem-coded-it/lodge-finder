export type AuthProvider = "auth0";
export type Token = {
  type: string;
  name?: string;
  token: string;
  abilities: string[];
  lastUsedAt?: Date;
  expiresAt: Date;
};

export interface Geoip {
  cityName: string;
  continentCode: string;
  countryCode: string;
  countryCode3: string;
  countryName: string;
  latitude: number;
  longitude: number;
  subdivisionCode: string;
  subdivisionName: string;
  timeZone: string;
}

export interface Identity {
  connection: string;
  isSocial: boolean;
  provider: string;
  userId: string;
  user_id: string;
}

export interface Custom {
  geoip: Geoip;
  host: string;
  identities: Identity[];
  stats: {
    logins_count: number;
  };
}

export interface OAuthMeta {
  sub: string;
  nickname: string;
  name: string;
  picture: string;
  updated_at: Date;
  email: string;
  email_verified: boolean;
  _custom: Custom;
  meta: {
    app_metadata: any;
    phone: boolean;
    user_id: string;
    whatsApp: boolean;
  };
}

export interface User {
  token: Token;
  userReference: string;
  firstname: string;
  lastname: string | null;
  email: string;
  phone: string | null;
  emailVerified: boolean;
  phoneVerified: boolean;
  picture: string | null;
  oauthSub: string;
  oauthService: string | null;
  userType: string | null;
  accountType: string | null;
  onboarding: string;
  meta: any | null;
  oauthMeta: OAuthMeta;
  createdAt: Date;
  updatedAt: Date;
}
