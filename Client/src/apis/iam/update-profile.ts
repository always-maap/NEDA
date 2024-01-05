import { iam } from "@/constants/api-url";
import { UserUpdateRequest } from "@neda/iam";

export async function updateProfile(params: UserUpdateRequest) {
  const token = localStorage.getItem("token");
  const resp = await fetch(`${iam}/user`, {
    method: "PUT",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
}
