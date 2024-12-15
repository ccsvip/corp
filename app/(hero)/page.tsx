import React from 'react'
import HeroImg from '@/app/components/hero'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: "Home"
}

export default function page() {
  return (
    <HeroImg
      imgUrl='http://browser9.qhimg.com/bdr/__85/t013a4ed4683039d101.jpg'
      altText='home img'
      content='Professional Cloud Hosting'
    />
  )
}