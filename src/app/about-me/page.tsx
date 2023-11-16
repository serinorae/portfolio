import Image from "next/image";
import { SocialIcon } from "react-social-icons";

export default function AboutMe() {
  return (
    <main className="overflow-hidden">
      <div className="bg-gradient-to-b from-pink-500 to-pink-200 h-screen flex items-center">
        <div className="w-1/2 flex justify-center">
          <div className="glow-border">
            <Image
              className="rounded-full"
              src="/me.jpg"
              alt="Me Image"
              width={330}
              height={330}
            />
          </div>
        </div>
        <div className="p-2 flex justify-end items-center h-screen">
          <div className="bg-pink-200 rounded-lg py-12 w-96 mt-28">
            <p className="text-xl font-serif font-medium px-4">
              A FEW WORDS ABOUT ME
            </p>
            <p className="text-sm font-serif leading-relaxed tracking-wide align-middle whitespace-pre-line px-4">
              I&lsquo;m an IGCSE student who is currently attending in Institute
              of International Professionalisim.
            </p>
            <br></br>
            <p className="text-sm font-serif leading-relaxed tracking-wide align-middle whitespace-pre-line px-4">
              Technology has never been intriguing to me until I started
              learning Python in Year-9. I have been deeply fascinated by the
              complexities of technology and coding ever since. My passion now
              is diving into projects and learning about the intricate workings
              of everyday technological wonders. Even though debugging can often
              be frustrating, I see it as an invaluable way to learn new things
              and improve problem-solving abilities.
              <div className="my-4"></div>
              <p className="text-xl font-serif font-medium">LET'S CONNECT</p>
              <div className="bg-pink-300 rounded-lg py-5 w-70 align-bottom">
                <div className=" flex gap-4 mx-4">
                  <SocialIcon url="https://www.instagram.com/sulicanoble/" />
                  <SocialIcon url="https://www.facebook.com/shu.htun.5" />
                  <SocialIcon url="https://github.com/serinorae" />
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
