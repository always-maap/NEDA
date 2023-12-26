import { Container } from "@/components/Container";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
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

export default function EditProfile() {
  return (
    <Container asChild>
      <div>
        <main className="flex flex-col pt-8 h-full">
          <Label htmlFor="firstName">First name</Label>
          <Input name="firstName" id="code" placeholder="Alan" />

          <Label htmlFor="lastName">Last name</Label>
          <Input name="lastName" id="lastName" placeholder="Alipanah" />

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
      </div>
    </Container>
  );
}
