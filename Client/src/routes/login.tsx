import { useForm } from "react-hook-form";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { otp } from "../apis/iam/otp";
import { useNavigate } from "react-router-dom";

type FormData = {
  phone: string;
};

export default function Login() {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  async function onSubmit(data: FormData) {
    const { phone } = data;
    await otp({ phone: phone.toString() });
    const encodedPhone = encodeURIComponent(phone.toString());
    navigate(`/verify?phone=${encodedPhone}`);
  }

  return (
    <Container asChild>
      <div>
        <header className="mt-4 flex justify-center">Create account</header>
        <main className="mt-8">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid max-w-sm items-center gap-1.5">
              <Label htmlFor="phone">What's your number?</Label>
              <Input {...register("phone")} name="phone" type="tel" id="phone" placeholder="+989*********" />
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
