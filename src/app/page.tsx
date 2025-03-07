import Link from 'next/link'
import { ticketsPath } from '@/path'
import { Heading } from '@/components/heading'

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading title="Tickets" description="All your tickets in one place" />
      <div>
        <h2 className="text-3xl font-bold tracking-light">Home</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()} className="text-sm underline">
          Go to Tickets Page
        </Link>
      </div>
    </div>
  )
}

export default HomePage
