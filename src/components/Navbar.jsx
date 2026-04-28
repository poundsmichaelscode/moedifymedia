import { motion } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { navItems } from '../data'
import { whatsappUrl } from '../lib/utils'
import { Button } from './ui'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-brand-deep/85 shadow-2xl shadow-black/20 backdrop-blur-xl' : 'bg-transparent'}`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-white shadow-glow">
            <img src="/images/sponsored-ads.png" alt="Moedify logo" className="h-full w-full object-cover object-left-top scale-[2.6]" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-lg font-black uppercase tracking-wide text-white">Moedify</span>
            <span className="block text-xs font-semibold uppercase tracking-[0.28em] text-brand-cyan">Media</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-semibold text-white/75 transition hover:text-brand-gold">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild href={whatsappUrl} target="_blank" rel="noreferrer" className="px-5">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </Button>
        </div>

        <button className="grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mx-5 mb-4 rounded-[1.5rem] border border-white/10 bg-brand-deep/95 p-4 backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-semibold text-white/80 hover:bg-white/10 hover:text-brand-gold">
                {item.label}
              </a>
            ))}
            <Button asChild href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-2 w-full">
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
