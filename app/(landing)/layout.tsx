import LandingPageNavBar from "./components/LandingPageNavBar"

interface LandingLayoutProps{
    children:React.ReactNode
}

function LandingLayout({children}:LandingLayoutProps) {
  return (
    <section className="flex min-h-screen flex-col overflow-x-clip">
        <LandingPageNavBar />
        <div className="flex-grow">{children}</div>
    </section>
  )
}

export default LandingLayout