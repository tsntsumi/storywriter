import SectionHeader from "@/components/Common/SectionHeader"
import { storage } from "@/lib/firebase"
import { ref, getDownloadURL } from "firebase/storage"

const metadata = {
  title: "About",
  description: "わたしたちの自己紹介です"
}

export default async function Page() {
  const weAre = ref(storage(), "videos/who-we-are-alizza-ideal.mp4")
  const weAreURL = await getDownloadURL(weAre)
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `WHO WE ARE`,
              subtitle: (
                <div className="text-center">Alizza Ideal の自己紹介</div>
              ),
              description: (
                <>
                  <p>
                    Alizza
                    Idealは、つつみきくおと、アリザ・つつみが２人で運営しています。
                  </p>
                  <p>実務はきくおが担当。</p>
                  <p>アリザはきくおの応援担当です。</p>
                </>
              )
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          <div>
            <h3>Alizza Idealの紹介動画をご覧ください</h3>
            <div>
              <video
                width="1080"
                height="1920"
                src={weAreURL}
                alt="We are Alizza Ideal"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
