import {Minus, Plus} from 'phosphor-react'
import { useActiveNotes } from '../contexts/activeNotesContext'

export function FretsCounter(){
    const {frets, updateNumberOfFrets} = useActiveNotes()
    
    return(
        <div className="rounded-md flex flex-col gap-2 items-center">
            <div className="w-full text-center text-[1.8vh]">Number of Frets</div>
            <div className="flex items-center gap-3">
                <button 
                    className="border border-slate-500 rounded-full p-[1vh] hover:bg-slate-400"
                    onClick={() => updateNumberOfFrets(-1)}
                >
                    <Minus size={12}/>
                </button>
                <div className="font-Inter border border-slate-500 text-[1.8vh] px-[1vw] py-[0.5vh]">{frets}</div>
                <button
                    className="border border-slate-500 rounded-full p-[1vh] hover:bg-slate-400"
                    onClick={() => updateNumberOfFrets(1)}    
                >
                    <Plus size={12}/>
                </button>
            </div>
        </div>
    )
}