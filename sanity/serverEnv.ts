import "server-only"

const requiredServerEnv = (name: "SANITY_API_TOKEN") => {
  const value = process.env[name]

  if (!value) {
    throw new Error(
      `Missing required Sanity environment variable "${name}". Configure Sanity before running this app.`
    )
  }

  return value
}

export const sanityApiToken = requiredServerEnv("SANITY_API_TOKEN")
