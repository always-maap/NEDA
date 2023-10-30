import { Button } from "@/components/ui/button";

export default function Root() {
  return (
    <main className="container max-w-md h-full flex flex-col justify-between py-8">
      <h1 className="text-center text-3xl">
        Make new <strong>Friends</strong>.
        <span className="block">
          Very <strong>Fast</strong>.
        </span>
      </h1>
      <Button className="w-full rounded-3xl">Find a match</Button>
    </main>
  );
}
