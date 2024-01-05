import { Container } from "@/components/Container";
import { Outlet } from "react-router-dom";
import { PersonIcon, HeartIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <Container asChild>
      <div>
        <main className="flex flex-col h-full">
          <div className="flex-grow">
            <Outlet />
          </div>
          <nav className="flex justify-evenly py-8">
            <HeartIcon width={36} height={36} className="text-gray-600" />
            <LightningBoltIcon width={36} height={36} className="text-gray-600" />
            <PersonIcon width={36} height={36} className="text-gray-600" />
          </nav>
        </main>
      </div>
    </Container>
  );
}
