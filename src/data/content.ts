// All content data extracted from the Reado Framer project via MCP

export const categories = [
  { name: 'Finance', slug: 'finance' },
  { name: 'Health', slug: 'health' },
  { name: 'Business', slug: 'business' },
  { name: 'Food', slug: 'food' },
  { name: 'Travel', slug: 'travel' },
  { name: 'Lifestyle', slug: 'lifestyle' },
  { name: 'Tech', slug: 'tech' },
]

export const authors = [
  { name: 'Frances Guerrero', slug: 'frances-guerrero', role: 'Founder & Editor-in-Chief', image: 'https://framerusercontent.com/images/4Aw7aEa7t22tFf2QpUG9h4PkqDU.jpg', bio: 'The Founder and Editor-in-Chief of Reado, guiding its editorial vision and overseeing content that sparks curiosity, inspires creativity, and engages readers with thoughtful storytelling.' },
  { name: 'Emily Johnson', slug: 'emily-johnson', role: 'Author', image: '', bio: '' },
  { name: 'Michael Smith', slug: 'michael-smith', role: 'Author', image: '', bio: '' },
  { name: 'Benjamin Scott', slug: 'benjamin-scott', role: 'Author', image: '', bio: '' },
  { name: 'William Parker', slug: 'william-parker', role: 'Author', image: '', bio: '' },
  { name: 'Jacob Anderson', slug: 'jacob-anderson', role: 'Author', image: '', bio: '' },
]

export interface BlogPost {
  number: string
  title: string
  slug: string
  category: string
  author: string
  content: string
  image?: string
}

export const blogPosts: BlogPost[] = [
  { number: '[No. 022]', title: 'How e-commerce is redefining global shopping trends', slug: 'how-e-commerce-is-redefining-global-shopping-trends', category: 'Tech', author: 'Emily Johnson', content: '<p>Content</p>' },
  { number: '[No. 019]', title: 'Best productivity hacks for creative freelancers today', slug: 'best-productivity-hacks-for-creative-freelancers-today', category: 'Tech', author: 'Michael Smith', content: '<p>Content</p>' },
  { number: '[No. 018]', title: 'How remote work is reshaping modern lifestyles', slug: 'how-remote-work-is-reshaping-modern-lifestyles', category: 'Lifestyle', author: 'Benjamin Scott', content: '<p>Content</p>' },
  { number: '[No. 016]', title: 'Quick fitness routines you can do anywhere', slug: 'quick-fitness-routines-you-can-do-anywhere', category: 'Health', author: 'William Parker', content: '<p>Content</p>' },
  { number: '[No. 010]', title: 'A guide to building stronger personal finances', slug: 'a-guide-to-building-stronger-personal-finances', category: 'Finance', author: 'Benjamin Scott', content: '<p>Content</p>' },
  { number: '[No. 008]', title: 'Exploring the intersection of technology and wellness', slug: 'exploring-the-intersection-of-technology-and-wellness', category: 'Business', author: 'Michael Smith', content: '<p>Content</p>' },
  { number: '[No. 007]', title: 'How podcasts changed the way we learn', slug: 'how-podcasts-changed-the-way-we-learn', category: 'Lifestyle', author: 'Jacob Anderson', content: '<p>Content</p>' },
  { number: '[No. 006]', title: 'The art of mindful eating in a fast-paced world', slug: 'the-art-of-mindful-eating', category: 'Food', author: 'Emily Johnson', content: '<p>Content</p>' },
  { number: '[No. 005]', title: 'Hidden travel gems you need to visit this year', slug: 'hidden-travel-gems', category: 'Travel', author: 'Jacob Anderson', content: '<p>Content</p>' },
  { number: '[No. 004]', title: 'Building a sustainable business from scratch', slug: 'building-a-sustainable-business', category: 'Business', author: 'Michael Smith', content: '<p>Content</p>' },
  { number: '[No. 003]', title: 'Morning routines that boost your productivity', slug: 'morning-routines-productivity', category: 'Lifestyle', author: 'Benjamin Scott', content: '<p>Content</p>' },
  { number: '[No. 002]', title: 'Understanding cryptocurrency for beginners', slug: 'understanding-cryptocurrency', category: 'Finance', author: 'William Parker', content: '<p>Content</p>' },
  { number: '[No. 001]', title: 'The future of artificial intelligence in healthcare', slug: 'future-of-ai-in-healthcare', category: 'Tech', author: 'Emily Johnson', content: '<p>Content</p>' },
]

export interface PodcastEpisode {
  number: string
  title: string
  slug: string
  host: string
  duration: string
  image?: string
}

export const podcastEpisodes: PodcastEpisode[] = [
  { number: '[Ep. 005]', title: 'How design is changing in the digital age', slug: 'how-design-is-changing-in-the-digital-age', host: 'William Parker', duration: '1hr 25min' },
  { number: '[Ep. 004]', title: 'The future of remote work culture', slug: 'future-of-remote-work-culture', host: 'Emily Johnson', duration: '58min' },
  { number: '[Ep. 003]', title: 'Building habits that last a lifetime', slug: 'building-habits-that-last', host: 'Benjamin Scott', duration: '1hr 10min' },
  { number: '[Ep. 002]', title: 'Creative entrepreneurship in 2024', slug: 'creative-entrepreneurship', host: 'Michael Smith', duration: '45min' },
]

// Image assets from Framer
export const images = {
  logoDark: 'https://framerusercontent.com/images/yWq3GiSFdqipw0tm1ftMZiONQiY.svg',
  logoWhite: 'https://framerusercontent.com/images/xp65Mzf00koL5NkHAUcmx7c3HI.svg',
  heroBrand: 'https://framerusercontent.com/images/q6iz1klqsbW4KeKFldV05yM.svg',
  heroBgBlur: 'https://framerusercontent.com/images/rngVJl68uKotxiAnv5Lnfqd6Q0k.png',
  searchIcon: 'https://framerusercontent.com/images/0KR9AYXLT12XZrpLeKS0ESEQ.svg',
  subscribeArrow: 'https://framerusercontent.com/images/tBMERP9IF9GYm76gyrbFKTcXkM.svg',
  subscribeIllustration: 'https://framerusercontent.com/images/VbWuHC2vely05QKSElKrUlByNI.svg',
  borderHorizontal: 'https://framerusercontent.com/images/kVZzMIEr2stOUElhUEqYUTd4MgE.svg',
  borderVertical: 'https://framerusercontent.com/images/Qa0UvZ1Zorl06gRRPfcIzni7IWc.svg',
  founderPhoto: 'https://framerusercontent.com/images/4Aw7aEa7t22tFf2QpUG9h4PkqDU.jpg',
  adBanner1: 'https://framerusercontent.com/images/WTC8GDQZiwM6gZo3BeRm2Gay5w.jpg',
  adBanner2: 'https://framerusercontent.com/images/GsBB3AO2CVj2zaUzokS6KbUGmk.jpg',
  adBanner3: 'https://framerusercontent.com/images/dQdut4oycpSUltEQOOomPIakZ0.jpg',
  tocArrow: 'https://framerusercontent.com/images/IZWWzYyCdbnlTRFO6jK7HYSLw.svg',
}

export const socialLinks = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://x.com/',
  linkedin: 'https://www.linkedin.com/',
  pinterest: 'https://www.pinterest.com/',
}
