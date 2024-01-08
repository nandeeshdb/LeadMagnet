import { prismadb } from '@/lib/prismadb';
import { auth } from '@clerk/nextjs'


const getLeadMagnets = async(userId:string)=>{
    try {
        const leadMagnets = await prismadb.leadMagnet.findMany({
            where:{userId}
        });
        return leadMagnets
    } catch (error) {
        console.error(error)
        return []  
    }
 }

 const getLeads =async(userId:string) =>{
    try {
        const leads = await prismadb.lead.findMany({
            where:{userId}
        });
        return leads
    } catch (error) {
        console.error(error)
        return []
    }
 }

async function LeadMagnetPage() {
     const {userId} = auth();
     console.log(userId)
     if(!userId){
        return <div>No User Found</div>
     }
     
     const leadMagnetRequest = getLeadMagnets(userId)
     const leadsRequest = getLeads(userId)

     const[leadMagnets,leads] = await Promise.all([
        leadMagnetRequest,
        leadsRequest
     ])
  return (
    <div>LeadMagnetPage</div>
  )
}

export default LeadMagnetPage