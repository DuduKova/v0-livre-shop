import Link from "next/link"

import { buildWhatsAppOrderLink } from "@/lib/whatsapp"

export function WhatsAppOrderButton(props: { productName: string; className?: string }) {
  const phone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER

  if (!phone) return null

  const href = buildWhatsAppOrderLink({
    phoneE164: phone,
    productName: props.productName,
  })

  return (
    <Link
      href={href}
      className={props.className}
      target="_blank"
      rel="noreferrer"
      prefetch={false}
    >
      Order on WhatsApp
    </Link>
  )
}

