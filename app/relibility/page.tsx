import React from 'react'
import HeroImg from '@/app/components/hero'
import { Metadata } from 'next'

export const metadate: Metadata = {
  title: "Relibility"
}

export default function page() {
  return (
    <HeroImg 
    imgUrl='http://browser9.qhimg.com/bdr/__85/t01a5211bae6d28520e.jpg'
    altText='relibility img'
    content='Relibility'
    />
  )
}
