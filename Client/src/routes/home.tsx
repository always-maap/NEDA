import { Container } from "@/components/Container";
import { Outlet } from "react-router-dom";
import { PersonIcon, HeartIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <Container asChild>
      <div>
        <main className="mt-8">
          <Outlet />
          <nav className="flex justify-evenly">
            <HeartIcon width={24} height={24} />
            <LightningBoltIcon width={24} height={24} />
            <PersonIcon width={24} height={24} />
          </nav>
        </main>
      </div>
    </Container>
  );
}
