import { BarChart3, BadgeCheck, Bot, CalendarCheck, Camera, Megaphone, MessageCircle, MousePointerClick, PenTool, ShieldCheck, Sparkles, Target, TrendingUp, Zap } from 'lucide-react'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#testimonials' }
]

export const services = [
  {
    icon: PenTool,
    title: 'Content Direction',
    text: 'Strategy-led content themes, posting angles, captions, and creative direction that help your brand look consistent and premium.'
  },
  {
    icon: Target,
    title: 'Ads Audience Targeting',
    text: 'Sponsored ad campaigns built around the right audience segments, brand goals, and conversion intent.'
  },
  {
    icon: CalendarCheck,
    title: 'Campaign Planning',
    text: 'A tailored roadmap for launches, activations, and monthly visibility so your brand never shows up randomly.'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    text: 'Reports and insights that show what is working, where to optimize, and how to grow stronger each month.'
  }
]

export const packages = [
  {
    name: 'Social Starter',
    price: '₦200K',
    duration: 'for 3 months',
    image: '/images/social-starter.png',
    features: ['1 social media platform', '10 posts per month', 'Content plan', 'Caption writing + hashtags', 'Monthly performance report']
  },
  {
    name: 'Social Growth',
    price: '₦500K',
    duration: 'for 3 months',
    image: '/images/social-growth.png',
    featured: true,
    features: ['3 social media platforms', '15 posts per month', 'Engagement support', 'Monthly report + insights', '5 days sponsored ads per month']
  }
]

export const whyChoose = [
  { icon: Sparkles, title: 'Premium brand feel', text: 'Clean visuals, sharp messaging, and creative consistency across every touchpoint.' },
  { icon: ShieldCheck, title: 'Trust-building strategy', text: 'Every campaign is planned to build authority, recall, and customer confidence.' },
  { icon: TrendingUp, title: 'Conversion-focused', text: 'From content to ads, the goal is visibility that turns attention into real enquiries.' },
  { icon: Zap, title: 'Fast execution', text: 'Structured planning, active features, and monthly reporting keep your growth moving.' }
]

export const testimonials = [
  { name: 'Project Grit', role: 'Creative Brand', quote: 'Moedify Media gave our brand a cleaner online presence and helped us communicate with more confidence.', rating: 5 },
  { name: 'Gina The Creator', role: 'Content Creator', quote: 'The content direction was clear, consistent, and easy to follow. Our audience engagement improved quickly.', rating: 5 },
  { name: 'Afro Motion', role: 'Entertainment Brand', quote: 'Their campaign planning made our activation feel premium and organized from design to promotion.', rating: 5 }
]

export const gallery = [
  { src: '/images/sponsored-ads.png', title: 'Sponsored Ads Campaign' },
  { src: '/images/profile-grid-1.png', title: 'Instagram Brand Presence' },
  { src: '/images/profile-grid-2.png', title: 'Brand Profile Strategy' },
  { src: '/images/social-starter.png', title: 'Social Starter Package' },
  { src: '/images/social-growth.png', title: 'Social Growth Package' }
]

export const stats = [
  { value: '358+', label: 'Posts published' },
  { value: '1.1K+', label: 'Audience community' },
  { value: '3+', label: 'Growth packages' },
  { value: '5★', label: 'Brand experience' }
]

export const heroBullets = [
  { icon: Megaphone, text: 'Social Media Management' },
  { icon: Camera, text: 'Content Creation' },
  { icon: MousePointerClick, text: 'Sponsored Ads' },
  { icon: Bot, text: 'Campaign Optimization' },
  { icon: MessageCircle, text: 'WhatsApp-first Conversion' }
]
