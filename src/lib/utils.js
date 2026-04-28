import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const whatsappUrl = 'https://wa.me/message/2JSF3VCSUNIPO1'
export const instagramUrl = 'https://www.instagram.com/get_moedified'
