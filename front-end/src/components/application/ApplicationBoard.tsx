import StatusColumn  from "@/components/application/StatusColumn"
export default function ApplicationBoard(){
    return(
        <div className="flex justify-around">
            <StatusColumn title={"Applied"} color={"bg-[#FFE74C]"}/>
            <StatusColumn title={"In-Process"} color={"bg-[#FFFFFF]"}/>
            <StatusColumn title={"Rejected"} color={"bg-[#FF5964]"}/>
            <StatusColumn title={"Offer"} color={"bg-[#6BF178]"}/>
        </div>
    )
}