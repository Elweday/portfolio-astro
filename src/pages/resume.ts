export const prerender = false;
import type { APIRoute } from "astro";
import { RESUME } from "@config";

const { TELEGRAM_BOT_TOKEN, MY_CHAT_ID } = import.meta.env;
type IpData = {
  query: string;
  status: "success" | "fail";
  country: string;
  countryCode: string;
  region: string;
  regionName: string;
  city: string;
  zip: string;
  lat: number;
  lon: number;
  timezone: string;
  isp: string;
  org: string;
  as: string;
};

export const GET: APIRoute = async ({ redirect, clientAddress }) => {
  console.log("clientAddress ", clientAddress);
  const response = await fetch(`http://ip-api.com/json/${clientAddress}`);
  const data = (await response.json()) as IpData;
  const endPoint = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage?chat_id=${MY_CHAT_ID}&text=${JSON.stringify(
    data
  )}`;

  await fetch(endPoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  return redirect(RESUME.normal);
};
