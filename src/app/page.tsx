import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative h-screen overflow-hidden">
      <div className="absolute -z-10 w-full ">
        <Image
          src="/hero.jpg"
          alt="Hero Image"
          className="h-auto w-full"
          width={0}
          height={0}
          sizes="100vw"
        />
      </div>
      <div className="z-10 flex h-screen flex-col items-center justify-center gap-8">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-4xl font-medium uppercase font-serif">
            Welcome to Sulica&lsquo;s Webpage
          </h1>
          <p className="text-lg font-serif">
            I&lsquo;m just a girl with a passion for accounting and computer
            science
          </p>
        </div>

        <Button className="rounded-3xl font-serif" asChild>
          <Link href="/login">Get Started</Link>
        </Button>
      </div>
    </main>
  );
}
