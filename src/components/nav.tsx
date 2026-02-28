import React from 'react'

const Nav = () => {
  return (
    <div data-animation="default" className="navbar w-nav" data-easing2="ease-in-back" data-easing="ease-out"
            data-collapse="none" data-w-id="9edf84aa-1c78-d247-2c17-fa546717f184" role="banner" data-no-scroll="1"
            data-duration="500">
            <div className="padding-global">
                <div className="nav_container">
                    <div data-w-id="9edf84aa-1c78-d247-2c17-fa546717f187" className="navbar_content"
                        style={{ willChange: 'background', backgroundColor: 'rgba(255, 255, 255, 0.12)', translate: 'none', rotate: 'none', scale: 'none', transform: 'translate3d(0px, 0%, 0px)' }}>
                        <a href="#" className="navbar_logo-link w-nav-brand"><img loading="lazy"
                                src="https://cdn.prod.website-files.com/69023d38b3dfba39822f9315/69023d38b3dfba39822f9437_HI.svg"
                                alt="" className="logo" /></a>
                        <div className="nav_group"><a href="/home/home-v1" aria-current="page"
                                className="nav_links hide-tablet w-nav-link w--current">Home</a><a href="/about-us"
                                className="nav_links hide-tablet w-nav-link">About</a><a href="/services/services-v1"
                                className="nav_links hide-tablet w-nav-link">Services</a><a href="/contact/contact-v1"
                                className="nav_links hide-tablet w-nav-link">Contact</a>
                            <div data-delay="0" data-hover="false" data-w-id="e251444f-3bcb-2278-ee74-42be0af22a35"
                                className="nav_dropdown w-dropdown">
                                <div className="nav_links is-dropdown w-dropdown-toggle" id="w-dropdown-toggle-0"
                                    aria-controls="w-dropdown-list-0" aria-haspopup="menu" aria-expanded="false"
                                    role="button" tabIndex={0}>
                                    <div className="text-block">Pages</div>
                                    <div className="nav_link-icon w-icon-dropdown-toggle" aria-hidden="true"
                                        style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>
                                    </div>
                                </div>
                                <nav className="nav_link-dropdown w-dropdown-list" id="w-dropdown-list-0"
                                    aria-labelledby="w-dropdown-toggle-0">
                                    <div className="nav_dropdown-wrap" style={{ height: '0px' }}>
                                        <div className="nav_dropdown-content">
                                            <div><a href="/home/home-v1" aria-current="page"
                                                    className="nav_dropdown-link w-dropdown-link w--current"
                                                    tabIndex={0}>Home V.1</a><a href="/home/home-v2"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Home
                                                    V.2</a><a href="/home/home-v3"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Home
                                                    V.3</a><a href="/about-us" className="nav_dropdown-link w-dropdown-link"
                                                    tabIndex={0}>About</a></div>
                                            <div><a href="/services/services-v1"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Services
                                                    V.1</a><a href="/services/services-v2"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Services
                                                    V.2</a><a href="/services/services-v3"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Services
                                                    V.3</a><a
                                                    href="https://hirely-temlis.webflow.io/internal-services/payroll-hub"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Internal
                                                    Services</a></div>
                                            <div><a href="/contact/contact-v1" className="nav_dropdown-link w-dropdown-link"
                                                    tabIndex={0}>Contact V.1</a><a href="/contact/contact-v2"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Contact
                                                    V.2</a><a href="/contact/contact-v3"
                                                    className="nav_dropdown-link w-dropdown-link" tabIndex={0}>Contact
                                                    V.3</a><a href="/blog" className="nav_dropdown-link w-dropdown-link"
                                                    tabIndex={0}>Blog</a></div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div><a href="https://temlis.com" className="button is-white hide-mobile-portrait w-button"
                            style={{ transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}>Buy
                            Template</a>
                    </div>
                </div>
            </div>
            <div className="w-nav-overlay" data-wf-ignore="" id="w-nav-overlay-0"></div>
        </div>
  )
}

export default Nav