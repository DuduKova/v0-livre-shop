import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

import { WhatsAppOrderButton } from "@/components/whatsapp-order-button"
import { getSanityClient } from "@/sanity/client"
import { urlForImage } from "@/sanity/image"
import { productBySlugQuery } from "@/sanity/queries"

type Product = {
  _id: string
  name: string
  slug: string | null
  description?: string
  price?: number
  category?: string
  image?: any
}

export const dynamic = "force-dynamic"

export default async function ProductPage(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params
  const product = await getSanityClient().fetch<Product | null>(productBySlugQuery, { slug })

  if (!product) notFound()

  const img = product.image ? urlForImage(product.image).width(1400).height(1400).fit("crop").url() : null

  return (
    <main className="container mx-auto px-6 py-24 md:py-28">
      <Link href="/products" className="text-sm text-muted-foreground hover:text-primary transition-colors">
        ← Back to products
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="relative aspect-square overflow-hidden rounded-xl border border-border bg-muted">
          {img ? (
            <Image src={img} alt={product.name} fill className="object-cover" unoptimized />
          ) : null}
        </div>

        <div>
          {product.category ? (
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">{product.category}</p>
          ) : null}
          <h1 className="mt-3 font-serif text-4xl md:text-5xl text-foreground">{product.name}</h1>

          {typeof product.price === "number" ? (
            <p className="mt-4 text-lg font-medium text-foreground">S/ {product.price.toFixed(2)}</p>
          ) : null}

          {product.description ? (
            <p className="mt-6 text-muted-foreground leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          ) : null}

          <div className="mt-8 flex items-center gap-3">
            <WhatsAppOrderButton
              productName={product.name}
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-3 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            />
            <Link
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-md border border-border px-4 py-3 text-sm text-foreground hover:bg-accent transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

