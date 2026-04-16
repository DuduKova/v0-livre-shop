import Image from "next/image"
import Link from "next/link"

import { WhatsAppOrderButton } from "@/components/whatsapp-order-button"
import { getSanityClient } from "@/sanity/client"
import { urlForImage } from "@/sanity/image"
import { allProductsQuery } from "@/sanity/queries"

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

export default async function ProductsPage() {
  const products = await getSanityClient().fetch<Product[]>(allProductsQuery)

  return (
    <main className="container mx-auto px-6 py-24 md:py-28">
      <div className="max-w-3xl">
        <h1 className="font-serif text-4xl md:text-5xl text-foreground">Products</h1>
        <p className="mt-3 text-muted-foreground">
          Explore our current selection. Tap a product to learn more, or order directly via WhatsApp.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((p) => {
          const img = p.image ? urlForImage(p.image).width(900).height(1100).fit("crop").url() : null
          const productHref = p.slug ? `/products/${p.slug}` : undefined

          return (
            <article key={p._id} className="group overflow-hidden rounded-lg border border-border bg-card">
              <div className="relative aspect-[4/5] bg-muted">
                {img ? (
                  <Image
                    src={img}
                    alt={p.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                ) : null}
              </div>

              <div className="p-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0">
                    {productHref ? (
                      <Link href={productHref} className="block">
                        <h2 className="font-serif text-xl text-foreground group-hover:text-primary transition-colors">
                          {p.name}
                        </h2>
                      </Link>
                    ) : (
                      <h2 className="font-serif text-xl text-foreground">{p.name}</h2>
                    )}
                    {p.category ? (
                      <p className="mt-1 text-xs tracking-wide uppercase text-muted-foreground">{p.category}</p>
                    ) : null}
                  </div>

                  {typeof p.price === "number" ? (
                    <p className="shrink-0 text-sm font-medium text-foreground">S/ {p.price.toFixed(2)}</p>
                  ) : null}
                </div>

                {p.description ? (
                  <p className="mt-3 line-clamp-3 text-sm text-muted-foreground">{p.description}</p>
                ) : null}

                <div className="mt-5 flex items-center gap-3">
                  {productHref ? (
                    <Link
                      href={productHref}
                      className="inline-flex items-center justify-center rounded-md border border-border px-3 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                    >
                      View
                    </Link>
                  ) : null}

                  <WhatsAppOrderButton
                    productName={p.name}
                    className="inline-flex items-center justify-center rounded-md bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                  />
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </main>
  )
}

