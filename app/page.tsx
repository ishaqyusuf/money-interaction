import { Icons } from "@/components/common/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export default function Home() {
  return (
    <div className="">
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <Link
            href="https://twitter.com/codehagen"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "animate-fade-up opacity-0_"
            )}
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            target="_blank"
          >
            Introducing on <Icons.calendar className="ml-2 h-4 w-4" />
          </Link>

          <h1
            className="animate-fade-up font-urban text-4xl font-extrabold tracking-tight opacity-0_ sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Better Forms, with{" "}
              <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
                Badget
              </span>{" "}
              No more Excels
            </Balancer>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground opacity-0_ sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Empower your financial management with AI-driven insights, making
              tracking and optimizing your finances effortless.
            </Balancer>
          </p>

          <div
            className="flex animate-fade-up justify-center space-x-2 opacity-0_ md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            {/* <GetStartedButton /> */}
            <Link
              href="https://www.badget.io/"
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-4"
              )}
            >
              <Icons.chevronDown className="mr-2 h-4 w-4" />
              <p>
                <span className="hidden sm:inline-block">Lets explore</span>{" "}
                Badget{" "}
              </p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
