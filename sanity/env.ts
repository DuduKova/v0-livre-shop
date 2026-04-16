const requiredPublicEnv = (name: "NEXT_PUBLIC_SANITY_PROJECT_ID" | "NEXT_PUBLIC_SANITY_DATASET" | "NEXT_PUBLIC_SANITY_API_VERSION") => {
  const value = process.env[name]

  if (!value) {
    throw new Error(
      `Missing required Sanity environment variable "${name}". Configure Sanity before running this app.`
    )
  }

  return value
}

export const sanityProjectId = requiredPublicEnv("NEXT_PUBLIC_SANITY_PROJECT_ID")
export const sanityDataset = requiredPublicEnv("NEXT_PUBLIC_SANITY_DATASET")
export const sanityApiVersion = requiredPublicEnv("NEXT_PUBLIC_SANITY_API_VERSION")
