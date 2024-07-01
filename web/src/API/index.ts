import axios, { AxiosResponse } from "axios";
import { Task } from "~/utils";

export const apiURL = import.meta.env.VITE_API_URL;

export async function search(query: string): Promise<AxiosResponse> {
  const url = `${apiURL}/search?query=${query}`;
  try {
    return await axios.get(url, { withCredentials: true });
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("Axios Error:", error);
    } else {
      console.log("Unexpected Error:", error);
    }
    throw error;
  }
}

export interface ApiDesc extends Task {
  createdAt: Date;
  updatedAt: Date;
}
