import { useActiveNotes } from "../contexts/activeNotesContext"
import { NOTES } from "../utils/constants"

const OCTAVES = 5

export function Piano(){
    const {activeNotes, toggleActiveNote} = useActiveNotes()
    
    return(
        <div className="fixed h-1/3 bottom-0 flex justify-center left-1/2 -translate-x-1/2 border border-slate-500">
            {Array.from({length: OCTAVES}).map((_,i) => {
                return(
                    <div key={i} className="flex">
                        {NOTES.map(whiteKey => (
                            <button
                                key={whiteKey}
                                type="button"
                                className={
                                    whiteKey.length > 1 ? 
                                        `cursor-pointer h-2/3 bg-slate-800 w-[1.5vw] border flex flex-col justify-end items-center -mx-[0.75vw] z-10 hover:bg-slate-700` 
                                        : `cursor-pointer h-full bg-slate-100 w-[2.5vw] border flex flex-col justify-end items-center text-[0.75vw] text-slate-800 hover:bg-slate-200`
                                }
                                onClick={() => toggleActiveNote(NOTES.indexOf(whiteKey) + 12*i)}
                                style={activeNotes.includes(NOTES.indexOf(whiteKey) + 12*i) ? {backgroundColor: '#6060ff'} : {}}
                            >
                                {whiteKey.length > 1 ? "" : whiteKey + String(i + 2)}
                            </button>
                        ))}

                    </div>
                )
            })}
            <button
                type="button"
                className="cursor-pointer h-full bg-slate-100 w-[2.5vw] border flex flex-col justify-end items-center text-[0.75vw] text-slate-800 hover:bg-slate-200"
                onClick={() => toggleActiveNote(12 * OCTAVES)}
                style={activeNotes.includes(12 * OCTAVES) ? {backgroundColor: '#6060ff'} : {}}
            >
                C7
            </button>
        </div>
        
    )
}