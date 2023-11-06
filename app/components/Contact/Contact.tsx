"use client"

/* eslint-disable react/no-unescaped-entities */
import { prosto_one } from "@/app/fonts"
import React from "react"
import styles from "./contact.module.scss"
import Image from "next/image"
import { MongoClient } from "mongodb"
import { redirect } from "next/navigation"
import SubmitButton from "@/app/SubmitButton"
import { createFormData } from "@/app/actions"
import { useFormState } from "react-dom"

// export default async function Contact() {
export default function Contact() {
  const initialState = {
    name: "",
    email: "",
    message: "",
  }

  const [state, formAction] = useFormState(createFormData, initialState)

  // async function create(formData: FormData) {
  //   "use server"
  //   const uri = process.env.MONGODB_URL

  //   try {
  //     const client = new MongoClient(uri)
  //     await client.connect()
  //     const database = client.db("portfolio")
  //     const collection = database.collection("messages")

  //     let message = {
  //       name: formData.get("name"),
  //       email: formData.get("email"),
  //       message: formData.get("message"),
  //       date: new Date(),
  //     }

  //     let result = await collection.insertOne(message)
  //     redirect("/success")
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }
  return (
    <div className=" overflow-hidden" id="contact">
      <div className="container max-w-[1100px] mx-auto py-20 px-3">
        <h1 className="text-2xl font-bold mb-4">
          <span className={`${prosto_one.className} ${styles.title} `}>
            Let's talk
          </span>
        </h1>
        <p className="text-white opacity-80 leading-[200%] lg:leading-[150%] xl:leading-[150%] 2xl:leading-[200%] mb-10 ">
          Would you like to learn more about me, explore potential
          collaborations, enlist my assistance for your projects, or perhaps
          satisfy your curiosity? If so, please don't hesitate to reach out. I
          truly enjoy receiving messages from the online community!
        </p>
        <div className="flex  justify-between items-center">
          <form
            action={formAction}
            className="flex flex-col  w-[100%] lg:w-[50%] xl:w-[50%] 2xl:w-[50%] space-y-8"
          >
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              className={` ${prosto_one.className} py-2 px-1 bg-transparent border-b-2 focus:outline-none focus:border-[#e815b7] text-white placeholder-gray-400 caret-[#e815b7]   focus:shadow-2xl	`}
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your email"
              className={` ${prosto_one.className} py-2 px-1 bg-transparent border-b-2 focus:outline-none focus:border-[#e815b7] text-white placeholder-gray-400 caret-[#e815b7]	`}
              required
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              id="message"
              cols={30}
              rows={7}
              required
              className={` ${prosto_one.className} py-2 px-1 bg-transparent border-b-2 focus:outline-none focus:border-[#e815b7] text-white placeholder-gray-400 caret-[#e815b7]	`}
            ></textarea>

            <SubmitButton />
            <p className="text-white opacity-90">{state?.message} </p>
          </form>
          <div
            className={` ${styles.contactBall} z-[-1] hidden lg:flex xl:flex 2xl:flex   rounded-full opacity-70`}
          >
            <Image
              src="/contact.svg"
              width={1000}
              height={1000}
              className="w-[300px] h-[auto] rounded-full "
              alt="contact image"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
