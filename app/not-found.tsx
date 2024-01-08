import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-[calc(100vh-60px)] flex justify-center items-center">
      <div className="flex flex-col justify-center text-center">
        <h1 className="text-[7rem] text-white font-bold mb-[-1rem]">404</h1>
        <h1 className="text-white text-2xl mb-2">Not Found!</h1>
        <h3 className="text-white mb-4">Could not find requested resource</h3>
        <Link
          href="/"
          className="bg-white text-white mx-auto px-4 py-2 rounded-lg bg-[#e815b793] hover:opacity-90 transition-opacity"
        >
          Return Home
        </Link>
      </div>
    </div>
  )
}
