/* eslint-disable react/no-unescaped-entities */
import { prosto_one } from "@/app/fonts";
import localFont from "next/font/local";
import styles from "./experience.module.scss";

const myFont = localFont({
  src: "../../Stardom-Regular.woff",
  display: "swap",
});

export default function Experience() {
  return (
    <div>
      <div className="container max-w-[1100px] mx-auto pb-20 px-3">
        <h1 className="text-2xl font-bold mb-4">
          <span className={`${myFont.className} ${styles.title} `}>
            Experience
          </span>
        </h1>
        {/* Experience Container */}
        <div>
          {/* Experience Items */}
          <div>
            <h1 className="text-2xl text-white font-bold opacity-90 mb-1">
              Batayon
            </h1>
            <h3
              className={`text-white opacity-80 mb-2  font-medium ${styles.experienceFont} ${prosto_one.className}`}
            >
              <span className={styles.experienceFont}>Frontend</span>{" "}
              <span className={styles.experienceFont}>Developer</span>
            </h3>
            <h5 className="text-sm  opacity-90 text-gray-300 mb-5">
              Aug 2022 - Sep 2023
            </h5>
            <p className="text-white opacity-80 max-w-[100%] text-left lg:text-justify 2xl:text-justify xl:text-justify leading-[200%]">
              {/* I led the transformation of Batayon Library's digital platform,
              enhancing user experience and accessibility for children and
              adolescents. Inspired by Batayon's mission to promote a love for
              reading, I developed a responsive website and intuitive UI/UX
              design using Figma. Migrating from Wordpress to a custom-coded
              solution, I optimized usability with tailored features and
              organized an extensive database for easy knowledge access. My work
              contributed to creating a transformative learning space where
              technology and reading joyously converge, enriching the
              educational journey for young minds. */}
              As a Frontend Developer at Batayon, I played a pivotal role in
              optimizing the user experience. I led the migration to a custom
              Next.js codebase, resulting in a smoother, faster platform and a
              surge in user engagement. By leveraging TailwindCSS, I crafted a
              fully responsive website accessible across all devices,
              contributing to a wider reach and more seamless interactions. My
              dedication to reliability ensured a robust database infrastructure
              built with MongoDB and Firebase, minimizing downtime and
              guaranteeing uninterrupted access to Batayon's services.
              Additionally, I focused on attracting and onboarding new students,
              successfully welcoming over 10,000 to the platform and propelling
              a significant increase in usage. To protect exclusive content, I
              developed a sophisticated video player with access control,
              safeguarding valuable resources. Furthermore, I implemented an
              exam software that empowers users with personalized feedback,
              leading to measurable improvements in learning outcomes and
              solidifying Batayon's position as a leader in education.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
