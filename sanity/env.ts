type SanityPublicEnvKey =
  | "NEXT_PUBLIC_SANITY_PROJECT_ID"
  | "NEXT_PUBLIC_SANITY_DATASET"
  | "NEXT_PUBLIC_SANITY_API_VERSION"

export function requireSanityPublicEnv(name: SanityPublicEnvKey) {
  const value = process.env[name]
  if (!value) {
    throw new Error(
      `Missing required Sanity environment variable "${name}". Configure Sanity before running this app.`
    )
  }
  return value
}

// Do not throw at import-time; Next may evaluate modules during build.
export const sanityProjectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? ""
export const sanityDataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? ""
export const sanityApiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01"
