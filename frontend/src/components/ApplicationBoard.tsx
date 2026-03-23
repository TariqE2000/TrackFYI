import { DndContext, DragOverlay, MouseSensor, TouchSensor, useSensor, useSensors, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import StatusColumn from "@/components/StatusColumns"
import ApplicationCard from "@/components/ApplicationCards"

const INITIAL_CARDS = [
  { id: "1", company: "Netflix", domain: "netflix.com", role: "SWE Intern", status: "Applied", dateApplied: "03/14/2026" },
  { id: "2", company: "Google", domain: "google.com", role: "SWE Intern", status: "Inprocess", dateApplied: "03/10/2026" },
]

const COLUMNS = ["Applied", "Inprocess", "Rejected", "Offer"]
const COLUMN_COLORS: Record<string, string> = {
  Applied: "bg-[#FFE74C]",
  Inprocess: "bg-[#FFFFFF]",
  Rejected: "bg-[#FF5964]",
  Offer: "bg-[#6BF178]",
}

export default function ApplicationBoard() {
  const [cards, setCards] = useState(INITIAL_CARDS)
  const [activeId, setActiveId] = useState<string | null>(null)

  const activeCard = cards.find(c => c.id === activeId)

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 8 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 150, tolerance: 8 } })
  )

  function handleDragStart(event: DragStartEvent) {
    setActiveId(event.active.id as string)
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event
    setActiveId(null)
    if (!over) return
    setCards(prev =>
      prev.map(card =>
        card.id === active.id ? { ...card, status: over.id as string } : card
      )
    )
  }

  return (
    <DndContext sensors={sensors} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      <div className="flex items-start justify-center gap-4">
        {COLUMNS.map(col => (
          <StatusColumn key={col} title={col} color={COLUMN_COLORS[col]}>
            {cards
              .filter(card => card.status === col)
              .map(card => (
                <ApplicationCard
                  key={card.id}
                  {...card}
                  isDragging={card.id === activeId}
                />
              ))}
          </StatusColumn>
        ))}
      </div>

      <DragOverlay
        dropAnimation={null}
        style={{ boxShadow: "none", filter: "none" }}
      >
        <AnimatePresence>
          {activeCard && (
            <motion.div
              initial={{ scale: 1, rotate: 0, opacity: 0.8 }}
              animate={{ scale: 1.04, rotate: 2, opacity: 1 }}
              exit={{ scale: 1, rotate: 0, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{ boxShadow: "none", filter: "none" }}
            >
              <ApplicationCard {...activeCard} />
            </motion.div>
          )}
        </AnimatePresence>
      </DragOverlay>
    </DndContext>
  )
}