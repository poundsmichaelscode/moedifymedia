import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, PlayCircle } from 'lucide-react'
import { heroBullets, stats } from '../data'
import { whatsappUrl } from '../lib/utils'
import { Button } from './ui'

export default function Hero() {
  return (
    <section id="home" className="relative isolate min-h-screen overflow-hidden bg-brand-deep pt-28 text-white">
      <div className="absolute inset-0 bg-brand-radial" />
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-teal/30 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-brand-gold/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-cream to-transparent" />

      <div className="relative mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-14 px-5 pb-20 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
        <div>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="mb-5 inline-flex rounded-full border border-brand-cyan/30 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.25em] text-brand-cyan backdrop-blur">
            Digital Marketing Brand for Talents & Creatives
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} className="font-display text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Sponsored ads are not enough. <span className="text-brand-gold">You need a tailored campaign plan.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
            Moedify Media helps creative brands dominate the feed with strategic content, campaign planning, audience targeting, and performance optimization that converts attention into WhatsApp enquiries.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild href={whatsappUrl} target="_blank" rel="noreferrer" className="text-base">
              <MessageCircle className="h-5 w-5" /> Start on WhatsApp
            </Button>
            <Button asChild variant="secondary" href="#packages" className="text-base">
              <PlayCircle className="h-5 w-5" /> View Packages
            </Button>
          </motion.div>

          <div className="mt-9 flex flex-wrap gap-3">
            {heroBullets.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.span key={item.text} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.35 + index * 0.08 }} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-semibold text-white/80 backdrop-blur">
                  <Icon className="h-4 w-4 text-brand-gold" /> {item.text}
                </motion.span>
              )
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="relative">
          <motion.div animate={{ y: [0, -14, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-white/10 p-3 shadow-glow backdrop-blur-xl">
            <img src="/images/sponsored-ads.png" alt="Moedify Media sponsored ads campaign creative" className="aspect-[4/5] w-full rounded-[2rem] object-cover object-center" />
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} className="absolute -bottom-8 left-4 right-4 rounded-[1.75rem] border border-white/15 bg-brand-deep/90 p-5 shadow-2xl backdrop-blur-xl sm:left-10 sm:right-auto sm:w-80">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-white/60">Campaign Package</p>
                <p className="text-2xl font-black text-brand-gold">₦200K - ₦500K</p>
              </div>
              <a href="#services" className="grid h-12 w-12 place-items-center rounded-full bg-brand-teal text-white transition hover:rotate-[-12deg]">
                <ArrowRight />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-12 md:grid-cols-4 lg:px-8">
        {stats.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/10 p-5 text-center backdrop-blur">
            <p className="font-display text-3xl font-black text-brand-gold">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-white/65">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
