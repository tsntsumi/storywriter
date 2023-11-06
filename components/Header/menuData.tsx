import { Menu } from '@/types/menu'

const menuData: Menu[] = [
  {
    id: 1,
    title: 'ホーム',
    newTab: false,
    path: '/',
  },
  {
    id: 2,
    title: '特徴',
    newTab: false,
    path: '/#features',
  },
  {
    id: 2.1,
    title: 'ブログ',
    newTab: false,
    path: '/blog',
  },

  {
    id: 4,
    title: 'コンタクト',
    newTab: false,
    path: '#footer',
  },
]

export default menuData
