'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Join = ({ children }) => {
  return (
    <>
      {/* <!-- ===== Join Start ===== --> */}
      <section className="overflow-hidden px-4 py-4 md:px-8 lg:py-10 xl:py-10 2xl:px-0">
        <div className="mx-auto">
          {/*<form onSubmit={handleSubmit}>*/}
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <Link
              href="tel:07090352231"
              className="font-bold text-xl large rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
            >
              070 9035 2231
            </Link>
            {/*<button aria-label="get started button"*/}
            <Link
              href="tel:07090352231"
              className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
            >
              {children}
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ===== Join End ===== --> */}
    </>
  )
}

export default Join
