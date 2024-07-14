export interface CaretakerSignup {
  reference?: string;
  username?: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  callNumber: string;
  imageURL?: string;
  whatsappNumber: string;
}

export interface Caretaker  {
  id?: string;
  reference?: string;
  username?: string;
  firstName: string;
  lastName: string;
  email: string;
  callNumber: String;
  imageURL?: string;
  whatsappNumber: string;
  credits: number;
}

export interface CaretakerLogin {
  email: string;
  password: string;
}