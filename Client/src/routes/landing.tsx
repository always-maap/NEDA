import { Link } from "react-router-dom";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";

export default function Root() {
  return (
    <Container asChild>
      <main className="flex flex-col justify-between py-8">
        <h1 className="text-center text-3xl">
          Make new <strong>Friends</strong>.
          <span className="block">
            Very <strong>Fast</strong>.
          </span>
        </h1>
        <Button className="w-full rounded-3xl" asChild>
          <Link to="/login">Find a match</Link>
        </Button>
      </main>
    </Container>
  );
}
