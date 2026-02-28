import React from 'react'
import Service from '@/src/components/service/service'
import Solutions from '@/src/components/service/solutions'
import Testimonial from '@/src/components/service/testimonail'
import Cta from '@/src/components/service/cta'

const ServicePage = () => {
  return (
    <main className="main-wrapper">
      <Service />
      <Solutions />
      <Testimonial />
      <Cta />
    </main>
  )
}

export default ServicePage