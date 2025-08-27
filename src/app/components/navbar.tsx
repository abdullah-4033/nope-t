import React from 'react'
import Link from 'next/link'
const navbar = () => {
  return (
    <div  className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <Link href="/">home</Link>
        <Link href="/about">about</Link>
        <Link href="/contact">contact</Link>
    </div>
  )
}

export default navbar