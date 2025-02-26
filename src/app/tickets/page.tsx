import Link from 'next/link'
import { initialTickets } from '@/data'
import { ticketPath } from '@/path'
import clsx from 'clsx'

const TICKET_ICONS = {
  OPEN: 'O',
  IN_PROGRESS: '>',
  DONE: 'X',
}

const TicketsPage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Tickets</h2>
        <p className="text-sm text-muted-foreground">
          All your tickets at one place
        </p>
      </div>
      <div className="flex-1 flex flex-col items-center gap-y-4">
        {initialTickets.map((ticket) => (
          <div
            key={ticket.id}
            className="w-full max-w-[420px] bg-blue-200 p-4 flex items-center justify-between gap-x-4 rounded-lg border border-blue-500"
          >
            <div>{TICKET_ICONS[ticket.status]}</div>
            <h3 className="text-lg font-semibold truncate">{ticket.title}</h3>
            <p
              className={clsx(
                'text-sm text-slate-900 truncate',
                {
                  'bg-blue-400': ticket.status === 'OPEN',
                },
                {
                  'line-through bg-red-400': ticket.status === 'DONE',
                },
                {
                  'bg-yellow-400': ticket.status === 'IN_PROGRESS',
                }
              )}
            >
              {ticket.content}
            </p>
            <Link href={ticketPath(ticket.id)} className="text-sm underline">
              View
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TicketsPage
