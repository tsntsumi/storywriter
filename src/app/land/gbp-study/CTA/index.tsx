"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Join from "../Join"
import { motion } from "framer-motion"

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-8 md:px-8">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-4 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left lg:w-1/2"
            >
              <h2 className="my-4 w-11/12 text-3xl text-justify font-bold text-black dark:text-white xl:text-sectiontitle4">
                一緒にGoogleビジネスプロフィールを勉強しよう
              </h2>
              <p>
                Googleビジネスプロフィールは、適切にビジネス情報を設定するだけで、信頼度を挙げられます。
                Googleからの信頼度もアップしますので、検索上位に表示させることも難しくありません。
              </p>
              <p>
                逆に適当に設定してしまうと、あなたのお店がGoogleマップで見つけにくくなってしまいます。
              </p>
              <p>
                つまり、新しいお客さんが来店する機会を失うことになるのです。
              </p>
              <p>
                LINEで「Googleマップ集客情報室」(@534dvpmo)のお友だちになっていただくと、
                勉強会で使用するスライドをPDFにした「Googleビジネスプロフィール：ビジネス情報設定ガイド」をダンロードしていただけます。
              </p>
              <p>
                参加費は、わたしの誕生日１２月４日まで通常3,000円のところ、０円です
              </p>
              <Join>一緒に勉強する</Join>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end xl:justify-between">
                <Image
                  width={800}
                  height={800}
                  src="/images/hero/gbp-setup-guide-table.png"
                  alt="GBP Setup Guide"
                  className="mx-auto h-[300px] w-[300px] object-cover rounded-lg"
                />
                <div className="inline w-fit mx-auto">
                  <a
                    data-v-6fa6a74a=""
                    href="https://lin.ee/dIMYuwu"
                    className="p-4"
                  >
                    <Image
                      src="https://qr-official.line.me/gs/M_534dvpmo_GW.png?oat__id=3226879&oat_content=qr"
                      className="mx-auto w-[180px] min-w-[180px]"
                      alt="QR"
                      width={180}
                      height={180}
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  )
}

export default CTA
