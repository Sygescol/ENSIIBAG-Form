import { NextResponse } from "next/server";
import { WebMasterPool } from "@/config/db";
export async function GET(request: Request) {
  try {
    const [Horizonte]: any = await WebMasterPool.query(
      "SELECT id, tipo, contenido, imagen FROM horizonte_inst"
    );
    return NextResponse.json(
      {
        Horizonte,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
