import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
 export default async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    // console.log(allUsers)
    return(<div>
        <h1>this is user page</h1>
        {
          allUsers.map((user)=>{
            return(
              <>
              <h1>{user.name}</h1>
              <h1>{user.email}</h1>
              </>
            )
          })
        }
        </div>
    )
  }