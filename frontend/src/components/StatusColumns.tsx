import {useDroppable} from '@dnd-kit/core';
import type { ReactNode } from "react";

type StatusColumnProps = {
  title: string
  color: string
  children?: ReactNode  // instead of React.ReactNode
}
export default function StatusColumn({ title, color, children }: StatusColumnProps) {
  const { setNodeRef } = useDroppable({ id: title });

  return (
    <div ref={setNodeRef} className={`w-72 shrink-0 min-h-[900px] rounded-2xl p-4 text-white ${color}`}>
      <h2 className="text-center text-xl font-bold text-black">{title}</h2>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </div>
  );
}