import { PrismaClient } from '@prisma/client'
export const dynamic = 'force-dynamic';
const prisma = new PrismaClient()
 export default async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.user.findMany()
    // console.log(allUsers)
    return(
        <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
                  <tr>
                  <th className='px-6 py-3'>Name</th>
                  <th className='px-6 py-3'>E-Mail</th>
                  </tr>
                </thead>
                <tbody>
        {
          allUsers.map((user)=>{
            
            return(
            <>
            <tr className='odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700'>
                  <td className='px-6 font-medium text-gray-900 whitespace-nowrap dark:text-whitepx-6 py-4'>{user.name}</td>
                  <td className='px-6 py-4'>{user.email}</td>
                  </tr>
               
              </>
            )
          })
        }
         </tbody>
              </table>
    )
  }