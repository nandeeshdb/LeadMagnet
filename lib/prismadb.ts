import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
    primsa : PrismaClient | undefined
}


export const prismadb = 
    globalForPrisma.primsa ?? 
    new PrismaClient({
        log:process.env.NODE_ENV ==="development" ? ["query","error","warn"] : ["error"]
    })

if(process.env.NODE_ENV !== "production") globalForPrisma.primsa = prismadb