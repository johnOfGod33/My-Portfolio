import Github from "@/assets/icon/Github";
import { buttonVariants } from "../ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import Linkedin from "@/assets/icon/Linkedin";
import Twitter from "@/assets/icon/Twitter";

const Intro = () => {
  return (
    <div className="h-screen w-screen px-32 lg:p-52 flex items-center">
      <div className="h-auto w-full">
        <div className="my-5">
          <span className="my-2 text-lg text-primary font-semibold">
            Hi, my name is
          </span>
        </div>
        <div className="my-5">
          <span className="text-4xl md:text-5xl xl:text-7xl font-bold block">
            Jean de Dieu.
          </span>
        </div>
        <div className="my-5">
          <span className="text-3xl md:text-4xl xl:text-6xl text-muted-foreground block font-bold">
            I build things for the web.
          </span>
        </div>
        <div className="my-5 lg:w-2/3">
          <p className="text-sm md:text-base">
            I'm a self-taught full stack developer with a passion for creating
            impactful projects. Focused on modern backend technologies, I strive
            to deliver high-quality code and secure APIs.
          </p>
        </div>
        <div>
          <Link
            to={"https://github.com/johnOfGod33"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 cursor-pointer mr-2"
            )}
          >
            <Github size={20} />
          </Link>
          <Link
            to={"https://linkedin.com/in/jean-de-dieu-sessou-260897292"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 cursor-pointer mr-2"
            )}
          >
            <Linkedin size={20} />
          </Link>
          <Link
            to={"https://x.com/RYUUSAN5742"}
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-8 p-0 cursor-pointer mr-2"
            )}
          >
            <Twitter size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
