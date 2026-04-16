export function buildWhatsAppOrderLink(params: {
  phoneE164: string
  productName: string
}) {
  const { phoneE164, productName } = params
  const normalized = phoneE164.replace(/[^\d+]/g, "")
  const phone = normalized.startsWith("+") ? normalized.slice(1) : normalized
  const text = `Hi, I would like to order ${productName}`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}

