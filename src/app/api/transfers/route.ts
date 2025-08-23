import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

export async function GET(req: NextRequest, res: NextResponse) {
  const filePath = path.join(process.cwd(), "public", "transfersData.json");
  const fileContents = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(fileContents);
  return NextResponse.json(data);
}
