import { NextResponse } from "next/server";
import { token } from "./app/home/page";

console.log(token)

export const middleware = (request) => {
    if(!token){
        return NextResponse.redirect(
            new URL('/login', request.url)
        )
    }
    return NextResponse.next()
}

export const config = {
    matcher: [ '/profile', '/home' ]
}