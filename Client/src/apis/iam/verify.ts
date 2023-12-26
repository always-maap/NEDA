import { VerifyRequest, AuthenticationResponse } from "@neda/iam";

import { iam } from "@/constants/api-url";

export async function verify(params: VerifyRequest) {
  const resp = await fetch(`${iam}/verify`, {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (resp.ok) {
    const data: AuthenticationResponse = await resp.json();
    return data;
  }
}
