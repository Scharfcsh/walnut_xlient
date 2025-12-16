import {Link} from "react-router-dom"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-md border-b border-white/10">
      <div className="nav-container max-w-6xl mx-auto px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="text-xl font-semibold">
            <span className="text-white/80">Super</span>
            <span className="text-white font-bold">Ball</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="#" className="text-white hover:text-[#7fffd4] transition-colors">
            Home
          </Link>
          <Link to="#" className="text-white hover:text-[#7fffd4] transition-colors">
            Newsletter
          </Link>
          <Button className="btn-primary">Talk to Us</Button>
        </nav>
      </div>
    </header>
  )
}
