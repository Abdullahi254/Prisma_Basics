import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
    const user = await prisma.user.update({
        data:{
            age:{
                multiply:6
            }
        },
        where:{
            email: "papa@gmail.com"
        },
        select:{
            name:true,
            age:true
        }
    })
    console.log(user)
}
main().catch(e => {
    console.log("Error |:")
    console.log(e.message)
}).finally(async () => {
    await prisma.$disconnect()
})