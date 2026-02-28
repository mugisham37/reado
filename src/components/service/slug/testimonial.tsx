import React from 'react'

const testimonial = () => {
  return (
    <section className="section_testimonial-slider">
                <div className="padding-section-medium"></div>
                <div className="padding-global">
                    <div className="container-large">
                        <div data-delay="4000" data-animation="slide" className="slider scroll-animation w-slider"
                            data-autoplay="false" data-easing="ease" data-hide-arrows="false" data-disable-swipe="false"
                            data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true"
                            role="region" aria-label="carousel"
                            style={{opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d'}}>
                            <div className="slider-mask is-testimonial w-slider-mask" id="w-slider-mask-0">
                                <div className="slide-item is-testimonial w-slide" aria-label="1 of 3" role="group"
                                    style={{transition: 'all', transform: 'translateX(0px)', opacity: 1}}>
                                    <div className="testimonial_slider">
                                        <div className="testimonial_img-wrap">
                                            <div className="testimonial-slider_img"><img
                                                    src="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/69023d38b3dfba39822f94be_testimonial-slider-01.avif"
                                                    loading="lazy" sizes="(max-width: 698px) 100vw, 698px"
                                                    srcSet="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/69023d38b3dfba39822f94be_testimonial-slider-01.avif 500w, https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/69023d38b3dfba39822f94be_testimonial-slider-01.avif 698w"
                                                    alt="A casually dressed woman smiling, representing approachable talent and a friendly recruitment experience."
                                                    className="img" /></div>
                                        </div>
                                        <div className="testimonial_info">
                                            <div className="text-5xl">A true partner in growth.</div>
                                            <div className="spacer-medium"></div>
                                            <div>"We launched our Mexico City operations in 30 days – no local entity
                                                needed. Their payroll and benefits infrastructure saved us $280K in
                                                setup costs, and their talent retention rate is 40% higher than industry
                                                average."</div>
                                            <div className="spacer-xhuge"></div>
                                            <div className="text-xl">Mark Tressler</div>
                                            <div className="spacer-xsmall"></div>
                                            <div>COO, FinTech Global</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-item is-testimonial w-slide" aria-label="2 of 3" role="group"
                                    aria-hidden="true" style={{transition: 'all', transform: 'translateX(0px)', opacity: 1}}>
                                    <div className="testimonial_slider" aria-hidden="true">
                                        <div className="testimonial_img-wrap" aria-hidden="true">
                                            <div className="testimonial-slider_img" aria-hidden="true"><img
                                                    src="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/69023d38b3dfba39822f94b3_hero-two-img-2.avif"
                                                    loading="lazy"
                                                    alt="A serious professionally dressed man with his hand on his chin, portraying strategic thinking and leadership in recruitment decisions."
                                                    className="img" aria-hidden="true" /></div>
                                        </div>
                                        <div className="testimonial_info" aria-hidden="true">
                                            <div className="text-5xl" aria-hidden="true">A true partner in growth.</div>
                                            <div className="spacer-medium" aria-hidden="true"></div>
                                            <div aria-hidden="true">"In 2024, we onboarded 12 pre-vetted LatAm
                                                specialists through Hirely – from paralegals to senior developers. Not
                                                only did we cut payroll costs by 72%, but the talent outperformed our
                                                local hires in productivity. Their end-to-end compliance support
                                                eliminated our legal headaches."</div>
                                            <div className="spacer-xhuge" aria-hidden="true"></div>
                                            <div className="text-xl" aria-hidden="true">Mark Tressler</div>
                                            <div className="spacer-xsmall" aria-hidden="true"></div>
                                            <div aria-hidden="true">COO, FinTech Global</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="slide-item is-testimonial w-slide" aria-label="3 of 3" role="group"
                                    aria-hidden="true" style={{transition: 'all', transform: 'translateX(0px)', opacity: 1}}>
                                    <div className="testimonial_slider" aria-hidden="true">
                                        <div className="testimonial_img-wrap" aria-hidden="true">
                                            <div className="testimonial-slider_img" aria-hidden="true"><img
                                                    src="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/69023d38b3dfba39822f94b4_hero-two-img-3.avif"
                                                    loading="lazy"
                                                    alt="A serious professionally dressed woman, conveying confidence and expertise in HR and recruitment decisions."
                                                    className="img" aria-hidden="true" /></div>
                                        </div>
                                        <div className="testimonial_info" aria-hidden="true">
                                            <div className="text-5xl" aria-hidden="true">A true partner in growth.</div>
                                            <div className="spacer-medium" aria-hidden="true"></div>
                                            <div aria-hidden="true">"We scaled our engineering team 3X faster using
                                                Hirely’s 14-day hiring guarantee. Their AI matching delivered candidates
                                                who coded in our tech stack from day one – something our internal
                                                recruiters couldn’t achieve in months."</div>
                                            <div className="spacer-xhuge" aria-hidden="true"></div>
                                            <div className="text-xl" aria-hidden="true">Priya Nair</div>
                                            <div className="spacer-xsmall" aria-hidden="true"></div>
                                            <div aria-hidden="true">COO, FinTech Global</div>
                                        </div>
                                    </div>
                                </div>
                                <div aria-live="off" aria-atomic="true" className="w-slider-aria-label" data-wf-ignore="">
                                </div>
                            </div>
                            <div className="arrow w-slider-arrow-left" role="button" tabIndex={0}
                                aria-controls="w-slider-mask-0" aria-label="previous slide"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                                    className="icon-1x1-main">
                                    <path
                                        d="M10.5 19.5L11.5575 18.4425L5.8725 12.75H21V11.25H5.8725L11.5575 5.5575L10.5 4.5L3 12L10.5 19.5Z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div className="arrow is-right w-slider-arrow-right" role="button" tabIndex={0}
                                aria-controls="w-slider-mask-0" aria-label="next slide"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="100%" viewBox="0 0 24 24" fill="none"
                                    className="icon-1x1-main">
                                    <path
                                        d="M13.5 19.5L12.4425 18.4425L18.1275 12.75H3V11.25H18.1275L12.4425 5.5575L13.5 4.5L21 12L13.5 19.5Z"
                                        fill="currentColor"></path>
                                </svg></div>
                            <div className="hide w-slider-nav w-round">
                                <div className="w-slider-dot w-active" data-wf-ignore="" aria-label="Show slide 1 of 3"
                                    aria-pressed="true" role="button" tabIndex={0}
                                    style={{marginLeft: '3px', marginRight: '3px'}}></div>
                                <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 2 of 3"
                                    aria-pressed="false" role="button" tabIndex={-1}
                                    style={{marginLeft: '3px', marginRight: '3px'}}></div>
                                <div className="w-slider-dot" data-wf-ignore="" aria-label="Show slide 3 of 3"
                                    aria-pressed="false" role="button" tabIndex={-1}
                                    style={{marginLeft: '3px', marginRight: '3px'}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="padding-section-medium"></div>
            </section>
            
  )
}

export default testimonial