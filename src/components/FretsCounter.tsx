import {ArrowLeft, ArrowRight} from 'phosphor-react'
import { useActiveNotes } from '../contexts/activeNotesContext'

export function FretsCounter(){
    const {frets, updateNumberOfFrets} = useActiveNotes()
    
    return(
        <div className="fixed p-4 rounded-md right-16 bottom-8 flex flex-col gap-3 border-2 border-slate-500 bg-slate-100">
            <div className="w-full text-center text-xl">Number of Frets</div>
            <div className="flex items-center gap-3">
                <button 
                    className="bg-slate-300 border-2 border-slate-500 rounded-full p-2 hover:bg-slate-400"
                    onClick={() => updateNumberOfFrets(-1)}
                >
                    <ArrowLeft size={32}/>
                </button>
                <div className="font-Inter bg-slate-200 border-2 border-slate-500 text-xl px-2 py-1">{frets}</div>
                <button
                    className="bg-slate-300 border-2 border-slate-500 rounded-full p-2 hover:bg-slate-400"
                    onClick={() => updateNumberOfFrets(1)}    
                >
                    <ArrowRight size={32}/>
                </button>
            </div>
        </div>
    )
}