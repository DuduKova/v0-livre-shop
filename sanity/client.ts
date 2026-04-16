import { createClient } from "next-sanity"
import { requireSanityPublicEnv, sanityApiVersion, sanityDataset, sanityProjectId } from "./env"

export function getSanityClient() {
  const projectId = sanityProjectId || requireSanityPublicEnv("NEXT_PUBLIC_SANITY_PROJECT_ID")
  const dataset = sanityDataset || requireSanityPublicEnv("NEXT_PUBLIC_SANITY_DATASET")
  const apiVersion = sanityApiVersion || requireSanityPublicEnv("NEXT_PUBLIC_SANITY_API_VERSION")

  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
  })
}
