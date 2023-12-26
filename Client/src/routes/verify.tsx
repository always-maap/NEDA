import { useSearchParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import invariant from "tiny-invariant";
import { verify } from "@/apis/iam/verify";

type FormData = {
  phone: string;
  code: string;
};

export default function Verify() {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const phone = searchParams.get("phone");
  invariant(phone);

  async function onSubmit(data: FormData) {
    const { code, phone } = data;
    console.log({ phone, code });
    await verify({ phone, code: +code });
    navigate(`/edit-profile`);
  }

  return (
    <Container asChild>
      <div>
        <header className="mt-4 flex justify-center">Create account</header>
        <main className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid max-w-sm items-center gap-1.5">
              <Label htmlFor="code">Enter OTP</Label>
              <Input {...register("code")} name="code" type="number" id="code" placeholder="*****" />
              <Input {...register("phone")} defaultValue={phone} name="phone" />
            </div>
            <Button className="block mx-auto mt-6 rounded-3xl" size="lg">
              Submit
            </Button>
          </form>
        </main>
      </div>
    </Container>
  );
}
