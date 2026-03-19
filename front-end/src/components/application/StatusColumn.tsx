import ApplicationCard from "@/components/application/applicationCard"
type StatusColumnProps = {
    title: string
    color: string
    children?: React.ReactNode
}
export default function StatusColumn({ title, children, color }: StatusColumnProps){
    return (
        <div className={`w-full max-w-sm min-h-200 rounded-2xl p-4 text-white ${color}`}>
            <h2 className=" text-lg font-semibold text-center text-black">
                {title}
            </h2>
            <div className="mt-4">
                {children}
                <ApplicationCard/>
                <ApplicationCard/>
                <ApplicationCard/>
                <ApplicationCard/>
                <ApplicationCard/>
            </div>
        </div>
    )
}