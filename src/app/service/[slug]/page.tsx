import Service from '@/src/components/service/slug/service'
import Hiring from '@/src/components/service/slug/hiring'
import Process from '@/src/components/service/slug/process'
import Testimonial from '@/src/components/service/slug/testimonial'
import Faq from '@/src/components/service/slug/faq'
import Cta from '@/src/components/service/slug/cta'

const page = () => {
  return (
    <main className="main-wrapper">
      <Service />
      <Hiring />
      <Process />
      <Testimonial />
      <Faq />
      <Cta />
    </main>
  )
}

export default page