import { useForm } from "react-hook-form";
import { Label } from "@radix-ui/react-label";

import { Container } from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateProfile } from "../apis/iam/update-profile";

type FormData = {
  firstName: string;
  lastName: string;
  gender: string;
};

export default function EditProfile() {
  const { register, handleSubmit } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    const x = { ...data, avatar: "", gender: "" };
    await updateProfile(x);
  }

  return (
    <Container asChild>
      <div className="h-full">
        <form onSubmit={handleSubmit(onSubmit)} className="h-full">
          <main className="flex flex-col pt-8 h-full">
            <Label htmlFor="firstName">First name</Label>
            <Input {...register("firstName")} name="firstName" id="firstName" placeholder="Alan" />

            <Label htmlFor="lastName">Last name</Label>
            <Input {...register("lastName")} name="lastName" id="lastName" placeholder="Alipanah" />

            <Label htmlFor="gender">Gender</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select your gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value="male">Male</SelectItem>
                  <SelectItem value="female">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <div className="flex mt-auto pb-8 gap-2">
              <Button variant="ghost">Reset</Button>

              <Button className="w-full rounded-3xl">Submit</Button>
            </div>
          </main>
        </form>
      </div>
    </Container>
  );
}
