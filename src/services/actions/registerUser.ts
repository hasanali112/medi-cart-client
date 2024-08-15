"use server";

import { IUser } from "@/app/register/page";

export const registerUser = async (payload: IUser) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKED_API_URL}/user/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...payload, role: "user" }),
      cache: "no-store",
    }
  );

  const paitentInfo = res.json();
  return paitentInfo;
};
