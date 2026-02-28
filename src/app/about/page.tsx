import React from 'react'
import About from '@/src/components/about/about'
import Commit from '@/src/components/about/commit'
import Team from '@/src/components/about/team'
import Testimonial from '@/src/components/about/testimonial'
import Cta from '@/src/components/about/cta'

const AboutPage = () => {
  return (
    <>
      <About />
      <Commit />
      <Team />
      <Testimonial />
      <Cta />
    </>
  )
}

export default AboutPage