import { cn } from '../lib/utils'

export function Button({ className, variant = 'primary', asChild = false, children, ...props }) {
  const Comp = asChild ? 'a' : 'button'
  const variants = {
    primary: 'bg-brand-gold text-brand-deep hover:-translate-y-1 hover:shadow-gold',
    secondary: 'bg-white/10 text-white border border-white/20 hover:bg-white hover:text-brand-deep',
    outline: 'bg-white text-brand-navy border border-brand-teal/20 hover:bg-brand-teal hover:text-white',
    dark: 'bg-brand-deep text-white hover:bg-brand-navy hover:-translate-y-1'
  }
  return (
    <Comp
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-cyan/40',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}

export function Card({ className, children }) {
  return <div className={cn('rounded-[2rem] border border-white/10 bg-white/80 p-6 shadow-xl shadow-black/5 backdrop-blur', className)}>{children}</div>
}
