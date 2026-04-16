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

// Do not throw at import-time; Next may evaluate modules during build.
export function requireSanityApiToken() {
  return requiredServerEnv("SANITY_API_TOKEN")
}
