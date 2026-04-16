import type { Metadata } from "next"
import { metadata as studioMetadata, viewport } from "next-sanity/studio"
import { StudioClient } from "./studio-client"

export { viewport } from "next-sanity/studio"

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Livre Studio",
}

export default function StudioPage() {
  return <StudioClient />
}
