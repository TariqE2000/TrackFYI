import StatusColumn from "@/components/StatusColumns"

export default function ApplicationBoard() {
  return (
    <div className="flex items-start justify-center gap-4">
      <StatusColumn title="Applied" color="bg-[#FFE74C]" />
      <StatusColumn title="Inprocess" color="bg-[#FFFFFF]" />
      <StatusColumn title="Rejected" color="bg-[#FF5964]" />
      <StatusColumn title="Offer" color="bg-[#6BF178]" />
    </div>
  )
}