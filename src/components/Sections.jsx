import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, ExternalLink, MessageCircle, Quote, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { gallery, packages, services, testimonials, whyChoose } from '../data'
import { instagramUrl, whatsappUrl } from '../lib/utils'
import { Button, Card } from './ui'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: 'easeOut' } }
}

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mx-auto mb-14 max-w-3xl text-center">
      <p className={`mb-4 text-sm font-black uppercase tracking-[0.28em] ${light ? 'text-brand-gold' : 'text-brand-teal'}`}>{eyebrow}</p>
      <h2 className={`font-display text-4xl font-black tracking-tight sm:text-5xl ${light ? 'text-white' : 'text-brand-deep'}`}>{title}</h2>
      {text && <p className={`mt-5 text-lg leading-8 ${light ? 'text-white/70' : 'text-slate-600'}`}>{text}</p>}
    </motion.div>
  )
}

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-cream py-24">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-brand-cyan/30 blur-3xl" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:px-8">
        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="relative">
          <div className="overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl shadow-brand-teal/10">
            <img src="/images/profile-grid-2.png" alt="Moedify Instagram brand page" className="h-[540px] w-full rounded-[2rem] object-cover object-top" />
          </div>
          <div className="absolute -right-5 bottom-10 hidden rounded-3xl bg-brand-gold p-5 text-brand-deep shadow-gold md:block">
            <p className="text-3xl font-black">1,175+</p>
            <p className="text-sm font-bold">followers & growing</p>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-brand-teal">About the Brand</p>
          <h2 className="font-display text-4xl font-black leading-tight text-brand-deep sm:text-5xl">Built for brands that want to look serious, consistent, and visible.</h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Moedify Media is a digital marketing brand focused on helping talents and creative brands dominate the feed. The brand combines content creation, social media management, campaign planning, and sponsored ads into a simple growth experience.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Instead of posting without direction, Moedify creates a tailored campaign plan that gives every brand a clear message, a consistent look, and measurable growth actions.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {['Clear monthly content plan', 'Campaigns built for culture change', 'Performance reports and optimization', 'WhatsApp-first customer journey'].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-lg shadow-black/5">
                <CheckCircle2 className="h-5 w-5 flex-none text-brand-green" />
                <span className="font-bold text-brand-navy">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Button asChild href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle className="h-4 w-4" /> Work With Us</Button>
            <Button asChild variant="outline" href={instagramUrl} target="_blank" rel="noreferrer"><ExternalLink className="h-4 w-4" /> Instagram</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="What You Get" title="A premium growth system, not random posting." text="Every service is designed to help your online presence feel intentional, beautiful, trusted, and conversion-ready." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div key={service.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ y: -10 }}>
                <Card className="group h-full overflow-hidden bg-brand-cream p-7 transition duration-300 hover:bg-brand-deep hover:text-white hover:shadow-glow">
                  <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-teal/10 text-brand-teal transition group-hover:bg-brand-gold group-hover:text-brand-deep">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-xl font-black text-brand-deep transition group-hover:text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-600 transition group-hover:text-white/70">{service.text}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Packages() {
  return (
    <section id="packages" className="relative overflow-hidden bg-brand-deep py-24">
      <div className="absolute inset-0 bg-brand-radial" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader light eyebrow="Packages" title="Choose the right activation plan." text="Start lean or go full growth mode. Both options are designed to make your brand more consistent, creative, and visible." />
        <div className="grid gap-8 lg:grid-cols-2">
          {packages.map((plan, index) => (
            <motion.div key={plan.name} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * 0.1 }} whileHover={{ y: -8 }} className={`relative overflow-hidden rounded-[2.5rem] border p-4 ${plan.featured ? 'border-brand-gold bg-brand-gold/10 shadow-gold' : 'border-white/10 bg-white/10'} backdrop-blur-xl`}>
              {plan.featured && <div className="absolute right-6 top-6 z-10 rounded-full bg-brand-gold px-4 py-2 text-xs font-black uppercase tracking-widest text-brand-deep">Most Popular</div>}
              <div className="grid gap-7 md:grid-cols-[.9fr_1.1fr]">
                <div className="overflow-hidden rounded-[2rem] bg-white">
                  <img src={plan.image} alt={`${plan.name} package`} className="h-full min-h-[360px] w-full object-cover object-top transition duration-700 hover:scale-105" />
                </div>
                <div className="p-3 text-white md:py-8 md:pr-5">
                  <h3 className="font-display text-3xl font-black">{plan.name}</h3>
                  <div className="mt-5 flex items-end gap-2">
                    <span className="text-5xl font-black text-brand-gold">{plan.price}</span>
                    <span className="pb-2 text-white/60">{plan.duration}</span>
                  </div>
                  <ul className="mt-7 grid gap-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 font-semibold text-white/82">
                        <CheckCircle2 className="h-5 w-5 flex-none text-brand-gold" /> {feature}
                      </li>
                    ))}
                  </ul>
                  <Button asChild href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-7 w-full"><MessageCircle className="h-4 w-4" /> Order on WhatsApp</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyChooseUs() {
  return (
    <section className="bg-brand-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Why Choose Us" title="Designed to make your brand impossible to ignore." text="A beautiful feed is good. A feed with direction, audience targeting, and conversion flow is better." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div key={item.title} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ delay: index * 0.08 }} whileHover={{ scale: 1.03 }} className="rounded-[2rem] bg-white p-7 shadow-xl shadow-black/5">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl bg-brand-teal text-white shadow-glow"><Icon /></div>
                <h3 className="font-display text-xl font-black text-brand-deep">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => setActive((current) => (current + 1) % testimonials.length), 3600)
    return () => clearInterval(timer)
  }, [])
  const testimonial = testimonials[active]
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <SectionHeader eyebrow="Social Proof" title="Trusted by creatives and growing brands." text="The experience is simple: clarify your message, beautify your presence, and turn visibility into real brand interest." />
        <motion.div key={active} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="relative rounded-[2.5rem] bg-brand-deep p-8 text-center text-white shadow-glow md:p-12">
          <Quote className="mx-auto mb-6 h-12 w-12 text-brand-gold" />
          <div className="mb-6 flex justify-center gap-1">{Array.from({ length: testimonial.rating }).map((_, i) => <Star key={i} className="h-5 w-5 fill-brand-gold text-brand-gold" />)}</div>
          <p className="mx-auto max-w-3xl font-display text-2xl font-bold leading-10 md:text-3xl">“{testimonial.quote}”</p>
          <div className="mt-8"><p className="font-black text-brand-gold">{testimonial.name}</p><p className="text-white/60">{testimonial.role}</p></div>
          <div className="mt-8 flex justify-center gap-2">{testimonials.map((_, i) => <button key={i} onClick={() => setActive(i)} className={`h-3 rounded-full transition-all ${i === active ? 'w-8 bg-brand-gold' : 'w-3 bg-white/30'}`} aria-label={`Show testimonial ${i + 1}`} />)}</div>
        </motion.div>
      </div>
    </section>
  )
}

export function Gallery() {
  const [selected, setSelected] = useState(null)
  return (
    <section id="gallery" className="bg-brand-cream py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader eyebrow="Gallery" title="A visual presence made for the feed." text="Explore the brand assets, social packages, and Instagram-first creative direction used across the landing experience." />
        <div className="grid auto-rows-[260px] gap-5 md:grid-cols-3">
          {gallery.map((item, index) => (
            <motion.button key={item.src} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} whileHover={{ scale: 0.98 }} onClick={() => setSelected(item)} className={`group relative overflow-hidden rounded-[2rem] bg-brand-deep text-left shadow-xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}>
              <img src={item.src} alt={item.title} className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deep/80 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between text-white">
                <h3 className="font-display text-xl font-black">{item.title}</h3>
                <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold backdrop-blur">Preview</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[80] grid place-items-center bg-black/85 p-5 backdrop-blur" onClick={() => setSelected(null)}>
            <button className="absolute right-5 top-5 grid h-12 w-12 place-items-center rounded-full bg-white text-brand-deep" aria-label="Close preview"><X /></button>
            <motion.img initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} src={selected.src} alt={selected.title} className="max-h-[86vh] max-w-full rounded-[2rem] object-contain shadow-2xl" />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export function CtaBanner() {
  return (
    <section className="bg-white px-5 py-24">
      <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-brand-deep p-8 text-center text-white shadow-glow md:p-14">
        <p className="text-sm font-black uppercase tracking-[0.28em] text-brand-gold">Limited monthly slots</p>
        <h2 className="mx-auto mt-4 max-w-4xl font-display text-4xl font-black leading-tight sm:text-5xl">Ready to make your brand consistent, creative, and visible?</h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-white/70">Send a message now and get a campaign direction that helps your brand move from random posting to intentional growth.</p>
        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Button asChild href={whatsappUrl} target="_blank" rel="noreferrer" className="text-base"><MessageCircle className="h-5 w-5" /> Order Now on WhatsApp</Button>
          <Button asChild variant="secondary" href="#services" className="text-base">Learn More</Button>
        </div>
      </motion.div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-brand-deep px-5 py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <h3 className="font-display text-2xl font-black">Moedify Media</h3>
          <p className="mt-4 max-w-md leading-7 text-white/60">Helping talents and creative brands dominate the feed through social media management, content creation, campaign management, and sponsored ads.</p>
        </div>
        <div>
          <h4 className="font-bold text-brand-gold">Contact</h4>
          <div className="mt-4 grid gap-2 text-white/70">
            <a href="tel:08024426105" className="hover:text-brand-gold">08024426105</a>
            <a href="mailto:moedifyagency@gmail.com" className="hover:text-brand-gold">moedifyagency@gmail.com</a>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="hover:text-brand-gold">WhatsApp Message</a>
          </div>
        </div>
        <div>
          <h4 className="font-bold text-brand-gold">Social</h4>
          <div className="mt-4 grid gap-2 text-white/70">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="hover:text-brand-gold">Instagram: @get_moedified</a>
            <span>BN: 8159097</span>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/50 lg:px-8">© {new Date().getFullYear()} Moedify Media. All rights reserved. by Pounds Michaels Digitals</div>
    </footer>
  )
}
