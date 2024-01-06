import { Button } from "@/components/ui/button"
import { SignInButton, UserButton, currentUser } from "@clerk/nextjs"
import { User } from "@clerk/nextjs/api"
import Link from "next/link"

async function LandingPageNavBar() {
  const user: User | null = await currentUser()
  
return (
    <nav className="flex w-screen justify-between p-6">
      <div>
        <Link href="/" className="text-purple-500 no-underline font-bold text-2xl">
        LeadConvert
        </Link>
      </div>

      <div className="text-purple-500 font-semibold text-lg">
        {user ? (
          <div className="flex gap-x-4 items-center">
            <Link href="/lead-magnet">
              <Button variant="outline">Open App</Button>
            </Link>
            <UserButton />
          </div>
        ):(
          <SignInButton />
        )}
      </div>


    </nav>
  )
}

export default LandingPageNavBar