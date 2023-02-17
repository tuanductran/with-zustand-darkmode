import Head from 'next/head'
import { ThemeSelect } from '../components/ThemeToggle'

export default function IndexPage() {
  return (
    <>
      <Head>
        <title>With Zustand Dark Mode Tailwind</title>
      </Head>
      <div className="relative max-w-5xl py-20 mx-auto sm:py-24 lg:py-32">
        <h1 className="text-4xl font-extrabold tracking-tight text-center text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
          With Zustand <span className="text-sky-500 dark:text-sky-400">Dark Mode</span> Tailwind
        </h1>
      </div>
      <div className="relative mx-40 mt-6">
        <ThemeSelect />
      </div>
    </>
  )
}
