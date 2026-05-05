import Link from "next/link"

import { buildWhatsAppOrderLink } from "@/lib/whatsapp"

export function WhatsAppOrderButton(props: { productName: string; className?: string }) {
  const phoneE164 = "+51967334686"

  const href = buildWhatsAppOrderLink({
    phoneE164,
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

