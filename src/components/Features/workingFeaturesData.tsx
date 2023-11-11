import { Feature } from '@/types/feature'

const featuresData: Feature[] = [
  {
    id: 1,
    icon: '/images/features/story_simple.svg',
    title: 'シンプルに',
    description: (
      <>
        Alizza Ideal との作業は、とてもシンプルで簡単です。
        <br />
        今すぐご相談下さい。
      </>
    ),
  },
  {
    id: 2,
    icon: '/images/features/story_fast.svg',
    title: '素早く',
    description: (
      <>
        Alizza Idealは、あなたが試したことのあるマーケティング・ソリューションとは違います。
        あなたの時間も自分の時間も無駄にしません。クライアントのため、すぐにでも結果を出すことにフォーカスしています。
      </>
    ),
  },
  {
    id: 3,
    icon: '/images/features/story_effective.svg',
    title: '効果的に',
    description: (
      <>
        Alizza
        Idealと一緒に戦略を構築すれば、あなたが仕事に集中している間にも、寝ている間にも、ストーリー・セールスファネルが見込み客と注文を獲得します。
      </>
    ),
  },
]

export default featuresData
