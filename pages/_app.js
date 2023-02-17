import '../styles/tailwind.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="flex flex-col">
        <main className="flex-1 min-h-screen">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  )
}
