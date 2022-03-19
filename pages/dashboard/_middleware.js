import { NextResponse } from "next/server";

export default function middleware(req) {
  const { email, uid } = req.cookies;

  if (!email || !uid) {
    return NextResponse.redirect("http://localhost:3000");
  }
}
