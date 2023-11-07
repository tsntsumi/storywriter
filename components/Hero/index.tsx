'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Join from '@/components/Join'

const Hero = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="overflow-hidden pb-8 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className=" md:w-1/2 md:mx-auto">
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🖋️ あなたのビジネスの次のステップは？
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                あなたのストーリー・セールスファネル戦略を
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  構築
                </span>
              </h1>
              <p className="text-justify">
                あなたがスモールビジネスの
                <ruby>
                  ストーリー・セールスファネル<rp>(</rp>
                  <rt>マーケティング</rt>
                  <rp>)</rp>
                </ruby>
                戦略を構築するなら、ストーリー・マーケティング・ライターのつつみきくお（Alizza
                Ideal）をご指名ください。
              </p>
              <p>
                あなたの
                <ruby>
                  コアバリュー<rp>(</rp>
                  <rt>真の価値</rt>
                  <rp>)</rp>
                </ruby>
                と、
                <ruby>
                  フィロソフィー<rp>(</rp>
                  <rt>想い</rt>
                  <rp>)</rp>
                </ruby>
                を、 お客様に伝わるシンプルで明解なストーリーを構築します。
              </p>

              <div className="mt-10">
                {/*<form onSubmit={handleSubmit}>*/}
                <div className="flex flex-wrap gap-5">
                  {/* <input value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="メアドを入力"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                      /> */}
                  <Join>一緒に始めましょう</Join>
                  {/*</button>*/}
                </div>
                {/*</form>*/}

                <p className="mt-5 text-black dark:text-white"></p>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 md:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/hero-light.jpg"
                    alt="Hero"
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block"
                    src="/images/hero/hero-dark.jpg"
                    alt="Hero"
                    fill
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="overflow-hidden px-4 py-2 md:px-8 2xl:px-0">
          <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-0">
            <div className="flex flex-nowrap gap-8 sm:flex-nowrap md:items-center justify-start md:gap-0">
              <div className="h-full p-0 min-w-[160px] relative">
                <Image
                  alt="ご提案"
                  src="/images/shape/offer-01-small.png"
                  width={300}
                  height={240}
                  className="object-cover mx-0 rounded-lg"
                />
                <img
                  src="https://qr-official.line.me/gs/M_259nufef_GW.png?oat__id=3206600&oat_content=qr"
                  className="mx-auto w-1/3 max-w-[80px] min-w-[40px] bottom-[6px] right-[6px] absolute"
                />
              </div>
              <div className="mx-6 lg:mx-auto lg:w-2/3 xl:w-3/5">
                <p>
                  ３６５日２４時間　働いてる間も　寝てる間も　売れ続けるLP型のHP
                  Webサイトテンプレートをプレゼント中。 LINEでお友だちになってダウンロードしよう。
                  <a data-v-6fa6a74a="" href="https://lin.ee/dIMYuwu" className="p-4 inline">
                    <img
                      data-v-6fa6a74a=""
                      src="/images/icon/line-add-friend-ja.png"
                      alt="友だちになる"
                      className="w-[80px] inline"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Hero
