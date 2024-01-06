import DashBoardNavBar from "@/components/DashBoardNavBar"

interface DashBoardLayoutProps{
    children:React.ReactNode
}
function DashBoardLayout({children}:DashBoardLayoutProps) {
  return (
    <div className="flex flex-col h-full w-full">
        <DashBoardNavBar />
        {children}
    </div>
  )
}

export default DashBoardLayout