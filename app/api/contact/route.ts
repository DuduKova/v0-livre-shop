import { NextResponse } from "next/server"
import { client } from "@/sanity/client"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // In a real application, ensure you use a client configured with a token
    // that has write access to the dataset (e.g. process.env.SANITY_API_TOKEN)
    // For this boilerplate logic, we rely on the client instance but will likely
    // fail unless the client is authenticated with a token.
    const sanityToken = process.env.SANITY_API_TOKEN

    if (!sanityToken) {
       console.warn("SANITY_API_TOKEN is not set. The form submission to Sanity might fail if the dataset is not public for writes.")
    }

    const writeClient = client.withConfig({
      token: sanityToken,
    })

    const newLead = await writeClient.create({
      _type: "lead",
      name,
      email,
      phone,
      message,
    })

    return NextResponse.json(
      { message: "Lead created successfully", lead: newLead },
      { status: 201 }
    )
  } catch (error: any) {
    console.error("Error creating lead in Sanity:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
