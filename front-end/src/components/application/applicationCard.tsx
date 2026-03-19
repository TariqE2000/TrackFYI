import { CompanyLogo } from "@/components/application/CompanyLogo"
import { Badge } from "@/components/ui/badge"

export default function ApplicationCard() {
  return (
    <div className="w-full max-w-sm rounded-xl bg-zinc-900 p-4 text-white mt-4">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div>
            <h2 className="card-label">Company</h2>
            <CompanyLogo domain="netflix.com" alt="Nextflix"/>
          </div>

          <div>
            <h2 className="card-label">Role</h2>
            <p className="">Software Developer Intern</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h2 className="card-label">Status</h2>
            <Badge className="bg-yellow-400">Applied</Badge>
          </div>

          <div>
            <h2 className="card-label">Date Applied</h2>
            <p>03/14/2026</p>
          </div>
        </div>
      </div>
    </div>
  )
}