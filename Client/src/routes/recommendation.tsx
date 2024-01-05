import { MixerHorizontalIcon, Cross2Icon, HeartFilledIcon } from "@radix-ui/react-icons";

import sampleImage from "../assets/sample.png";
import { Container } from "@/components/Container";

export default function Recommendation() {
  return (
    <>
      <Container asChild>
        <header className="flex justify-between py-2">
          <div>Logo</div>
          <MixerHorizontalIcon width={24} height={24} />
        </header>
      </Container>
      <div className="relative grid h-full px-1">
        <img className="rounded-md h-full object-cover row-start-1 col-start-1" src={sampleImage} />
        <div className="row-start-1 col-start-1 flex flex-col justify-between">
          <div className="flex gap-1 p-2">
            {Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="h-0.5	 w-full bg-white rounded-lg" />
            ))}
          </div>
          <div className="flex justify-evenly py-3">
            <div className="rounded-full bg-slate-900 p-3">
              <Cross2Icon width={40} height={40} className="text-red-600" />
            </div>
            <div className="rounded-full bg-slate-900 p-3">
              <HeartFilledIcon width={40} height={40} className="text-green-500" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
