import React from 'react'
import HeroImg from '@/app/components/hero'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: "Performance"
}


export default function page() {
  return (
    <HeroImg 
    imgUrl='http://browser9.qhimg.com/bdr/__85/t018160b069da5cac0d.jpg'
    altText='performance alt'
    content='Performance'
    />
  )
}
