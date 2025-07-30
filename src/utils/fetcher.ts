import { NEXT_PUBLIC_BACKEND_URL } from "./env";
import { ApplicationError } from "./error";
import { APIResponse } from "./types/api";

export async function fetcher<T>(
  input: string,
  init?: RequestInit
): Promise<APIResponse<T> | void> {
  try {
    const res = await fetch(`${NEXT_PUBLIC_BACKEND_URL}${input}`, init);

    const data = (await res.json()) as APIResponse<T>;

    if (!res.ok) throw new ApplicationError(data.message, res.status);

    return data;
  } catch (error) {
    if (error instanceof ApplicationError) {
      console.log(error.statusCode, error.message);
    }

    console.log(error);
  }
}
