import React from 'react'
import styles from './skills.module.scss'
import { prosto_one } from '@/app/fonts'
import Image from 'next/image'

export default function Skills() {
  return (
    <div className="" id="skills">
      <div className="container max-w-[1100px] mx-auto text-white py-20 px-3">
        <h1 className="text-2xl font-bold mb-4">
          <span className={`${prosto_one.className} ${styles.title} `}>
            Skills
          </span>
        </h1>
        <div className={`${styles.skillsBorder}`}>
          <div
            className={` grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3  justify-items-start   items-start px-2  lg:justify-items-center xl:justify-items-center 2xl:justify-items-center py-10 	 ${styles.skillsBg}`}
          >
            {/* Skills  Item */}
            <div className="language">
              <Image
                src="/programming.svg"
                width={85}
                height={85}
                alt="s"
                className="mb-5"
              />
              <h1 className="mb-2">
                <span
                  className={`${prosto_one.className} text-[1.4rem] ${styles.skillFont} `}
                >
                  Language
                </span>
              </h1>
              <ul className=" space-y-2  opacity-80">
                <li>HTML</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
              </ul>
            </div>
            <div className="language">
              <Image
                src="/technology.svg"
                width={85}
                height={85}
                alt="s"
                className="mb-5"
              />
              <h1 className="mb-2">
                <span
                  className={`${prosto_one.className} text-[1.4rem] ${styles.skillFont} `}
                >
                  Technology
                </span>
              </h1>
              <ul className="space-y-2 opacity-80">
                <li>React.js</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>TailwindCSS</li>
                <li>Material UI</li>
                <li>Radix UI</li>
                <li>Vite</li>
                <li>Firebase SDK</li>
                <li>D3.js</li>
              </ul>
            </div>
            <div className="language">
              <Image
                src="/framework.svg"
                width={85}
                height={85}
                alt="s"
                className="mb-5"
              />
              <h1 className="mb-2">
                <span
                  className={`${prosto_one.className} text-[1.4rem] ${styles.skillFont} `}
                >
                  Tools
                </span>
              </h1>
              <ul className="space-y-2  opacity-80">
                <li>Figma</li>
                <li>Powerpoint</li>
                <li>Git</li>
                <li>Github</li>
                <li>Terminal</li>
                <li>VS Code</li>
                <li>Canva</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
