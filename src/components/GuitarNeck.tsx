import { useActiveNotes } from "../contexts/activeNotesContext";
import { NOTES } from "../utils/constants";

const STRINGS = [4, 9, 14, 19, 23, 28]

export function GuitarNeck(){
    const {activeNotes, toggleActiveNote, frets} = useActiveNotes()
    
    return(
        <div className="w-fit relative left-1/2 -translate-x-1/2 border border-slate-500">
            <div className="w-full flex justify-center">
                <div className="text-center w-6 h-[3vh] border text-sm text-slate-300">
                    0
                </div>
                {Array.from({length: frets}).map((_, i) => (
                    <div key={i} className="text-center w-12 h-[3vh] border text-sm text-slate-300">
                        {i + 1}
                    </div>
                ))}
            </div>
            
            { STRINGS.map((string, index) => (
                <div key={'string'+ String(string) + String(index)} className="w-full flex justify-center">
                    <button 
                        className="w-6 h-[8vh] border text-sm text-slate-300"
                        style={ activeNotes[string] ? {backgroundColor: '#6060ff'} : {}}
                        onClick={() => toggleActiveNote(string)}
                    >
                        {NOTES[string % 12] + String(Math.floor(string/12) + 2)}
                    </button>
                    {/* Aplicar o conceito acima aqui */}
                    {Array.from({length: frets}).map((_, i) => (
                        <button 
                            key={i}
                            className="w-12 h-[8vh] border text-xs text-slate-300"
                            style={ activeNotes[(i + string + 1)] ? {backgroundColor: '#6060ff', color: 'rgb(241,245,249)'} : {}}
                            onClick={() => toggleActiveNote((i + string + 1) % NOTES.length)}
                        >
                            {NOTES[(i + string + 1) % NOTES.length].length > 1 ? "" : NOTES[(i + string + 1) % NOTES.length]}
                        </button>
                    ))}
                </div>
            ))}
        </div>
    )
}