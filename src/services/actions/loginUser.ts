"use server";

import { TFromValue } from "@/app/login/page";

export const loginUser = async (payload: TFromValue) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKED_API_URL}/user/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    }
  );

  const paitentInfo = res.json();
  return paitentInfo;
};
