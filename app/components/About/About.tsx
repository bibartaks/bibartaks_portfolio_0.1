/* eslint-disable react/no-unescaped-entities */
import { prosto_one } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import styles from './about.module.scss'

export default function About() {
  return (
    <div className="relative scroll-mb-20" id="about">
      <div className=" container max-w-[1100px] mx-auto text-white py-20  px-3">
        <div className=" absolute z-[-1] opacity-40  left-[20%]  top-[85%] lg:left-[0%]  xl:left-[0%]  2xl:left-[0%] xl:top-[0%] lg:top-[0%] 2xl:top-[0%]">
          <Image
            src="/projects.svg"
            width={1000}
            height={1000}
            className=" opacity-80 block w-[600px] h-[auto]"
            alt="gradient ball"
          />
        </div>
        <h1 className="text-2xl font-bold mb-4">
          <span className={`${prosto_one.className} ${styles.title}`}>
            About Me
          </span>
        </h1>

        <p className=" leading-[200%] opacity-80 text-left lg:text-justify xl:text-justify 2xl:text-justify mb-5">
          {/* Hi there! I'm Bibarta,a full-stack developer. Starting at age 10 as a
          self-taught programmer, I quickly captured my father's attention, who
          enrolled me in a prestigious online platform for learning code. Later,
          Scholarships from various world-leading developer platforms soon
          followed. My mother often says I had a keen interest in drawing &
          playing games. And so, she bought me a tablet to fuel my artistic
          spirit. Now, as a front-end developer, I enjoy combining artistic
          flair with technical expertise to create captivating and user-friendly
          interfaces. With the latest web technologies and a dedication to
          staying up-to-date with the ever-evolving industry trends, I can
          ensure my work remains at the forefront of innovation. Every day I've
          been honing my skills and learning JavaScript, TypeScript, React,
          TailwindCSS, Node.js, Firebase, MongoDB, and other frameworks. I'm
          seeking a full-time role where I can help a company achieve their
          goals. Beyond coding, Cricket has been a cherished pastime for me
          since an early age. As a valuable team player, I have actively
          participated in various age-based domestic district cricket
          tournaments. Additionally, my love for animals shines through, as I
          find solace and joy in petting and caring for them. */}
          Hello! I'm Bibarta Kumar Sarkar, a passionate full-stack developer
          with a journey that began at the age of 10 when I delved into
          programming as a self-taught enthusiast. My early aptitude for coding
          caught my father's attention, leading to enrollment in a prestigious
          online platform that fueled my love for coding. Subsequently,
          scholarships from renowned developer platforms furthered my
          educational journey. While my initial interests included drawing and
          gaming, my mother nurtured my artistic spirit by providing a tablet.
          Today, as a full-stack developer, I merge artistic flair with
          technical expertise to craft captivating and user-friendly interfaces.
          Keeping abreast of the latest web technologies and industry trends is
          paramount to me, ensuring my work remains innovative. I am proficient
          in JavaScript, TypeScript, ReactJS, TailWindCSS, NextJS, Node.js,
          Firebase, Supabase, MongoDB, and more. Seeking a full-time role, I
          aspire to contribute my skills and dedication to help a company
          achieve its goals. Beyond coding, cricket has been a cherished pastime
          since my early years, and I actively participate in age-based domestic
          district cricket tournaments, embodying the spirit of a valuable team
          player. Aside from my tech pursuits, my love for animals is evident as
          I find solace and joy in petting and caring for them. I bring a
          holistic approach to both my professional and personal life, aiming to
          make meaningful contributions wherever I go.
        </p>
        <Link
          className={`${styles.aboutBtn} px-3 py-2 text-sm`}
          target="_blank"
          href="/BibartaKSarkar_Resume.pdf"
        >
          Resume
        </Link>
      </div>
    </div>
  )
}
