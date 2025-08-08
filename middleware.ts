import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/middleware";

export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|tiff|bmp|ico|cur|eot|otf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|pdf|doc|docx|xls|xlsx|ppt|pptx|zip|gz|tar|js|css|json|svg|ico|webp|avif|tiff|bmp|ico|cur|eot|otf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$).*)",
  ],
};
