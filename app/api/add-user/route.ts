import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export async function POST(request: Request){
    const res = await request.json();
    await prisma.user.create({
        data:{
            name: res.input1,
            email:res.input2
        }
    })
    console.log({res})
    return NextResponse.json(res.input1)
}