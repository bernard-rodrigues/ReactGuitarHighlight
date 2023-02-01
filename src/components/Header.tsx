import { FretsCounter } from "./FretsCounter";

export function Header(){
    return(
        <div className="flex items-center justify-between bg-slate-800 text-zinc-100 text-[3.2vh] px-[3vw] py-[1vh] mb-8">
            <h1 className="font-Inter text-slate-100">Guitar Highlight</h1>
            <FretsCounter />
        </div>
    )
}