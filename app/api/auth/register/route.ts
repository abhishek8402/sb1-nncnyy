import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/db";
import { z } from "zod";

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  username: z.string().min(3).max(20),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, username } = registerSchema.parse(body);

    const client = await clientPromise;
    const db = client.db("portfolio-builder");

    // Check if user already exists
    const existingUser = await db
      .collection("users")
      .findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      return NextResponse.json(
        { error: "Email or username already exists" },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);

    // Create user
    const result = await db.collection("users").insertOne({
      email,
      username,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        userId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}