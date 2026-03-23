import { CompanyLogo } from "@/utility/CompanyLogo"
import { Badge } from "@/components/ui/badge"
import { useDraggable } from "@dnd-kit/core"

type ApplicationCardProps = {
  id: string
  company: string
  domain: string
  role: string
  status: string
  dateApplied: string
  isDragging?: boolean
}

const STATUS_COLORS: Record<string, string> = {
  Applied: "bg-blue-500 text-white hover:bg-blue-500",
  Inprocess: "bg-orange-400 text-white hover:bg-orange-400",
  Rejected: "bg-rose-600 text-white hover:bg-rose-600",
  Offer: "bg-emerald-500 text-white hover:bg-emerald-500",
}

export default function ApplicationCard({ id, company, domain, role, status, dateApplied, isDragging }: ApplicationCardProps) {
  const { setNodeRef, attributes, listeners } = useDraggable({ id })

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`w-full max-w-xs rounded-xl bg-zinc-900 p-4 text-white shadow-none transition-opacity duration-200 cursor-grab active:cursor-grabbing
        ${isDragging ? "opacity-30" : "opacity-100"}`}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="card-label">Company</h2>
            <CompanyLogo domain={domain} alt={company} />
          </div>
          <div>
            <h2 className="card-label">Role</h2>
            <p>{role}</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="card-label">Status</h2>
            <Badge className={STATUS_COLORS[status]}>{status}</Badge>
          </div>
          <div>
            <h2 className="card-label">Date Applied</h2>
            <p>{dateApplied}</p>
          </div>
        </div>
      </div>
    </div>
  )
}