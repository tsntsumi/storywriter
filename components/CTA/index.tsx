'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-0">
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left md:w-[70%] lg:w-1/2"
            >
              無料Webサイト・テンプレートをダウンロードして
              <h2 className="mb-4 w-11/12 text-3xl text-justify font-bold text-black dark:text-white xl:text-sectiontitle4">
                シンプルなLP型ホームページを作ろう
              </h2>
              <p>
                たくさんメッセージを書いているのに、 なかなか分かってもらえないホームページ。
                伝わらないから、注文の入らないホームページを見直しましょう。
              </p>
              <p>
                シンプル明解なメッセージで、見込み客と注文を獲得できるLP型のホームページをつくりませんか？
              </p>
              <p>
                LINEでお友だちになって、無料のWebサイト・テンプレートをダウンロードして下さい。
                LP型のホームページが簡単に構築できます。
              </p>
              <div>
                <a data-v-6fa6a74a="" href="https://lin.ee/dIMYuwu" className="p-4">
                  <img
                    data-v-6fa6a74a=""
                    src="/images/icon/line-add-friend-ja.png"
                    alt="友だちになる"
                    className="max-h-10 mx-auto"
                  />
                </a>
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right lg:w-[45%]"
            >
              <div className="flex items-center justify-end xl:justify-between">
                <Image
                  width={299}
                  height={299}
                  src="/images/shape/shape-06.png"
                  alt="Saly"
                  className="hidden xl:block"
                />
                <div className="inline w-fit mx-auto">
                  <a data-v-6fa6a74a="" href="https://lin.ee/dIMYuwu" className="p-4">
                    <img
                      src="https://qr-official.line.me/gs/M_259nufef_GW.png?oat__id=3206600&oat_content=qr"
                      className="mx-auto"
                    />
                    <img
                      data-v-6fa6a74a=""
                      src="/images/icon/line-add-friend-ja.png"
                      alt="友だちになる"
                      className="m-4 mx-auto w-2/3"
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
