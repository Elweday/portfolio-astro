import type { APIRoute } from "astro";
import { RESUME } from "@config";

export const GET: APIRoute = ({ redirect }) => {
  return redirect(RESUME);
};
