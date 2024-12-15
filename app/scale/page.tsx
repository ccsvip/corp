import React from 'react'
import HeroImg from '@/app/components/hero'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: "Scale"
}

export default function page() {
  return (
    <HeroImg 
    imgUrl='http://browser9.qhimg.com/bdr/__85/t01db50c0a5f456997c.jpg'
    altText='scale img'
    content='Scale'
    />
  )
}
