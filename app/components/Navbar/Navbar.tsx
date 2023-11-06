"use client"

import { prosto_one } from "@/app/fonts"
import Link from "next/link"
import React, { useState, useEffect } from "react"
import styles from "./navbar.module.scss"

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navClass = `${
    styles.navBg
  } flex flex-col backdrop-blur-2xl text-white justify-center items-center ml-0 mr-0 w-auto px-2 mt-5 py-4 rounded-full   transition hidden lg:flex xl:flex 2xl:flex ${
    scrolling ? styles.borderOnScroll : ""
  }`

  return (
    <nav
      className={`fixed top-0 flex flex-col justify-center items-center ml-0 mr-0 w-[100%] z-[10000] rounded-full`}
    >
      <div
        // className={`${
        //   styles.navBg
        // } flex flex-col backdrop-blur-2xl  text-white  justify-center  items-center ml-0 mr-0 w-[auto] px-2 mt-5 py-4 rounded-full ${
        //   scrolling ? styles.borderOnScroll : ""
        // }`}
        className={navClass}
      >
        <ul className={` ${prosto_one.className} flex  space-x-4`}>
          <li>
            <Link
              href="#"
              className={` px-4 py-2 rounded-full  ${styles.navLinks}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={` px-4 py-2 rounded-full ${styles.navLinks}`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className={` px-4 py-2 rounded-full ${styles.navLinks}`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className={` px-4 py-2 rounded-full ${styles.navLinks}`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className={` px-4 py-2 rounded-full ${styles.navLinks}`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
