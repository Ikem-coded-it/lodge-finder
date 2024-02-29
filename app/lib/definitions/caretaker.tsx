export interface CaretakerSignup {
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
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  callNumber: number;
  imageURL?: string;
  whatsappNumber: number;
}

export interface CaretakerLogin {
  email: string;
  password: string;
}