import Caretaker from "@/app/lib/models/caretaker";
import connectToDB from "../db";
import $http from "../services/$http";

export async function fetchAllCaretakers(id?: string) {
  try {
    console.log("here mate");

    const response = await $http.get("/api/caretaker");

    console.log("caretaker data", response);
  } catch (error: any) {
    console.log("caretaker fetch error", error);
    return new Error(error.message);
  }
}

export async function fetchSingleCaretaker(id: string) {}
