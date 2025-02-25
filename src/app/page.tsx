import Link from "next/link"
import { ticketsPath } from "@/path"

const HomePage = () => {
  return (
    <div>
      <h2 className="text-lg">HomePage</h2>
      <Link href={ticketsPath()} className="text-sm underline">Go to Tickets Page</Link>
    </div>
  )
}

export default HomePage