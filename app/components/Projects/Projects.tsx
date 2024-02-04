"use client";

import { prosto_one } from "@/app/fonts";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import styles from "./projects.module.scss";

const myFont = localFont({
  src: "../../Stardom-Regular.woff",
  display: "swap",
});

const SatoshiFont = localFont({
  src: "../../Satoshi-Regular.woff",
  display: "swap",
});

export default function Projects() {
  return (
    <div id="projects">
      <div className="container max-w-[1100px] mx-auto py-20 px-3">
        <h1 className="text-2xl font-bold mb-4">
          <span className={`${myFont.className} ${styles.title}`}>
            Projects
          </span>
        </h1>
        {/* Projects */}
        <div>
          <Splide
            aria-label="My Projects"
            className="pb-20"
            options={{
              type: "loop",
              rewind: true,
              autoWidth: true,
              autoplay: true,
              interval: 3000,
              perPage: 2,
              gap: 20,
              keyboard: "global",
            }}
          >
            <SplideSlide role="listitem">
              <div className="flex flex-col mx-auto w-[100%] max-w-[356px] lg:max-w-[456px] xl:max-w-[456px] 2xl:max-w-[456px]">
                <div className=" mx-auto  h-[100%]">
                  <Image
                    src="https://res.cloudinary.com/dano2nyff/image/upload/v1699375732/dmus4u19gjdtv5ejl7pg.png"
                    width={1000}
                    height={1000}
                    alt="Project one Image"
                    // className="pl-0 mb-2 hover:opacity-90 w-[400px]  lg:w-[500px]   h-[280px]"
                    className="pl-0 mb-2 hover:opacity-90 w-[400px] lg:w-[500px] h-[100%]  block mr-0"
                    priority={true}
                  />
                </div>
                <h1
                  className={`${styles.projectFont} ${prosto_one.className} mb-2`}
                >
                  Coinify
                </h1>
                <p
                  className={` ${SatoshiFont.className} max-w-[500px] text-white opacity-80 mb-2`}
                >
                  Conify is a web app where you can see real-time cryptographic
                  data. trending coins and many more!
                </p>
                <div>
                  <Link
                    href="https://coinify-bibartaks.vercel.app/"
                    target="_blank"
                    className="text-white opacity-80 border-b mr-5"
                  >
                    Live
                  </Link>
                  <Link
                    href="https://github.com/bibartaks/coinify"
                    target="_blank"
                    className="text-white opacity-80 border-b"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide role="listitem">
              <div className=" flex flex-col w-[100%] max-w-[356px] lg:max-w-[456px] xl:max-w-[456px] 2xl:max-w-[456px]">
                <div className="mx-auto">
                  <Image
                    // src="/project_2.png"
                    src="https://res.cloudinary.com/dano2nyff/image/upload/v1699375731/oawldzlwzozfeg6jgau1.png"
                    width={1000}
                    height={1000}
                    alt="Project two Image"
                    // className="pl-0 mb-2 hover:opacity-90 w-[400px] lg:w-[500px] h-[280px]"
                    className="pl-0 mb-2 hover:opacity-90 w-[400px] lg:w-[500px] h-[100%]  block mr-0"
                    priority
                  />
                </div>
                <h1
                  className={`${styles.projectFont} ${prosto_one.className} mb-2`}
                >
                  Codeverse explorer
                </h1>
                <p
                  className={` ${SatoshiFont.className} max-w-[500px] text-white opacity-80 mb-2`}
                >
                  Codeverse Explorer is a platform where you can read various
                  types of programming blogs and publish yours
                </p>
                <div>
                  <Link
                    href="https://codeverse-explorer.vercel.app/"
                    target="_blank"
                    className="text-white opacity-80 border-b mr-5"
                  >
                    Live
                  </Link>
                  <Link
                    href="https://github.com/bibartaks/codeverse_explorer"
                    className="text-white opacity-80 border-b"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide role="listitem">
              <div className=" flex flex-col w-[100%] max-w-[356px] lg:max-w-[456px] xl:max-w-[456px] 2xl:max-w-[456px]">
                <div className="mx-auto">
                  <Image
                    // src="/project_3.png"
                    src="https://res.cloudinary.com/dano2nyff/image/upload/v1699375733/hrgeywpzplfmlhljeyet.png"
                    width={1000}
                    height={1000}
                    alt="Project three Image"
                    className="pl-0 mb-2 hover:opacity-90 w-[400px] lg:w-[500px] h-[100%]  block mr-0"
                    priority
                  />
                </div>
                <h1
                  className={`${styles.projectFont} ${prosto_one.className} mb-2`}
                >
                  ShopXPress
                </h1>
                <p
                  className={` ${SatoshiFont.className} max-w-[500px] text-white opacity-80 mb-2`}
                >
                  Shopxpress is a website where you find products and add in You
                  can also filter your products in your cart.
                </p>
                <div>
                  <Link
                    href="https://shopxpress-bibartaks.vercel.app/"
                    target="_blank"
                    className="text-white opacity-80 border-b mr-5"
                  >
                    Live
                  </Link>
                  <Link
                    href="https://github.com/bibartaks/shopxpress"
                    target="_blank"
                    className="text-white opacity-80 border-b"
                  >
                    Code
                  </Link>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </div>
  );
}
