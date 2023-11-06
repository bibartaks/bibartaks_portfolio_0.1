"use server"

import { MongoClient } from "mongodb"
import { revalidatePath } from "next/cache"

export async function createFormData(prevState: any, formData: FormData) {
  const uri: any = process.env.MONGODB_URL

  try {
    const client = new MongoClient(uri)
    await client.connect()
    const database = client.db("portfolio")
    const collection = database.collection("messages")

    let message = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      date: new Date(),
    }

    let result = await collection.insertOne(message)
    revalidatePath("/")
    return { message: "Form submitted successfully 🥳" }
  } catch (e) {
    return { message: "Failed to submit form" }
  }
}
