

import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";


export default async function middleware( req, res){
  
  const session = await getToken({ 
    req, 
    secret: process.env.SECRET
  })

  if (req.nextUrl.pathname.startsWith("/dashboard")) {

    if(!session){
      
      return NextResponse.redirect(new URL('/', req.url));

    }

  }
  return NextResponse.next();



}

