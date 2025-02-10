import * as UserService from "@/server/services/UserService";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const checkExistUser = UserService.findUserByEmail(body.email);
    console.log(body);

    if (checkExistUser !== null) {
      const user = await UserService.createRegisterUser(body);
      return NextResponse.json({ status: true, message: "User succesfully created", user });
    } else {
      return NextResponse.json({ status: false, checkExistUser, message: "this email exist" });
    }
  } catch (error: any) {
    throw new Error(error);
  }
}

export async function GET(request: NextRequest) {
  const body = {
    status: "success",
    data: "body",
  };
  return NextResponse.json(body);
}
