import imageUrlBuilder from "@sanity/image-url"
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

import { getSanityClient } from "./client"

export function urlForImage(source: SanityImageSource) {
  const builder = imageUrlBuilder(getSanityClient())
  return builder.image(source)
}

