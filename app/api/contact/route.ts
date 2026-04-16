import { NextResponse } from "next/server"
import { getSanityClient } from "@/sanity/client"
import { requireSanityApiToken } from "@/sanity/serverEnv"

export async function POST(req: Request) {
  try {
    const writeClient = getSanityClient().withConfig({
      token: requireSanityApiToken(),
    })

    const body = await req.json()
    const { name, email, phone, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

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
