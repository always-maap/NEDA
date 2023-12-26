import { OtpRequest } from "@neda/iam";

import { iam } from "@/constants/api-url";

export async function otp(params: OtpRequest) {
  const resp = await fetch(`${iam}/otp`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
}
