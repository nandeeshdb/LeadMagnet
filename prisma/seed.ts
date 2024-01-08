import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async()=>{
    await prisma.leadMagnet.create({
        data:{
            id:"123456789",
            draftBody:"This body is draftbody",
            draftEmailCapture:"this is draft email captue",
            draftFirstQuestion:"this is draft first question",
            draftPrompt:" This is draft prompt",
            draftSubtitle:"This is draft substitue",
            draftTitle:"This is draft title",
            name:"This is a name",
            publishedBody:"This is a published body",
            publishedEmailCapture:"This is published email capture",
            publishedFirstQuestion:"This is published first question",
            publishedPrompt:"this is published prompts",
            publishedSubtitle:"This is published Subtitle",
            publishedTitle:"This is published title ",
            slug:"lead-magnet-slug",
            status:"draft",
            userId:""
        }
    });
     await prisma.lead.createMany({
        data:[{
            name:"Dummy User 1",
            email:"dummy@gamil.com",
            leadMagnetId:"123456789",
            userId:""
        },{
            name:"Dummy User 1",
            email:"dummy@gamil.com",
            leadMagnetId:"123456789",
            userId:""
            
        }]
     })
}