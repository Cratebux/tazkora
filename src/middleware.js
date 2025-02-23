import { NextResponse } from "next/server";
// import { token } from '../src/app/context/EmailContext'

import { token } from "./app/context/EmailContext";


export const middleware = (request) => {

    if(!token){
        return NextResponse.redirect(
            new URL('/login', request.url)
        )
    }
    return NextResponse.next()
}

export const config = {
    matcher: ['/home']
}