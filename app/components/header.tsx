"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const linkData = [
    { name: "Performance", path: "/performance" },
    { name: "Relibility", path: "/relibility" },
    { name: "Scale", path: "/scale" },
]

export default function Header() {
  const pathName = usePathname()
  return (
      <div className="absolute w-full z-10">
          <div className="flex justify-between container text-white mx-auto p-8 items-center">
            <div className="text-3xl font-bold">
                <Link className={pathName === "/" ? "text-orange-800" : "" } href ="/">Home</Link>
            </div>
            <div className="flex space-x-4 text-xl text-white">
              {
                linkData.map((link) => 
                    <Link key={link.path} className={ pathName === link.path ? "text-purple-500" : ""} href={link.path}  >{link.name}</Link>
                )
              }
            </div>
          </div>
        </div>
  )
}
