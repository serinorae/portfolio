import { Button } from "@/components/ui/button"
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative">
      <NavBar/>
      <MainContainer />
      </div>
  );
}
const NavBar = () => {
  return (
  <nav className="absolute w-full my-2 px-2">
    <div className="inline-block">
      <Link className="hover:text-white hover:bg-primary px-2 py-2 rounded-xl transition" href="/">
      Sulica @ Shu Ma Wa Win Htun
      </Link>
      </div>
    <div className="float-right inline-block">
      Nav
    </div>
  </nav>
  );
};

const MainContainer = () => {
  return (
     <main className='flex items-center justify-center flex-col h-screen gap-8'>
    <div className="flex flex-col gap-4 text-center">
    <h1 className="uppercase text-3xl font-medium">
      Welcome to Sulica&lsquo;s webpage!
      </h1>
    <p className="text-lg">
      I&lsquo;m just a girl with a passion for accounting and computer science.
      </p>
    </div>
    <Button asChild className="rounded-3xl">
    <Link href="/login">Get Started</Link>
</Button>
  </main>
);
};