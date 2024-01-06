import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='h-screen'>
      <Button>Click me</Button>
      <UserButton afterSignOutUrl="/"/>
      
    </div>
  )
}
