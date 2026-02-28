import React from 'react'
import Hero from '@/src/components/landing/hero'
import Solutions from '@/src/components/landing/solutions'
import Benefits from '@/src/components/landing/benefits'
import Testimonial from '@/src/components/landing/testimonial'
import Alternative from '@/src/components/landing/alternative'
import Faq from '@/src/components/landing/faq'
import Cta from '@/src/components/landing/cta'

const Page = () => {
  return (
    <>
    <Hero />
      <Solutions />
      <Benefits />
      <Testimonial />
      <Alternative />
      <Faq />
      <Cta />
    </>
  )
}

export default Page