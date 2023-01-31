import React from 'react'
import { createContext, ReactNode, useContext, useState } from "react";

interface ActiveNotesProps{
    toggleActiveNote: (note: number) => void,
    activeNotes: number[],
    updateNumberOfFrets: (amount: number) => void
    frets: number
}

export const ActiveNotesContext = createContext({} as ActiveNotesProps)

interface ActiveNotesProviderProps{
    children: ReactNode
}

const MIN_FRETS = 8
const MAX_FRETS = 24

export function ActiveNotesProvider(props: ActiveNotesProviderProps){
    const [ activeNotes, setActiveNotes ] = useState<number[]>([])
    
    const [frets, setFrets] = useState(24)

    function toggleActiveNote(note: number){
        if(activeNotes.includes(note)){
            setActiveNotes(currentActiveNotes => currentActiveNotes.filter(notes => notes != note))
        }else{
            setActiveNotes(currentActiveNotes => [...currentActiveNotes, note])
        }
    }

    function updateNumberOfFrets(amount: number){
        if(frets + amount >= MIN_FRETS && frets + amount <= MAX_FRETS){
            setFrets(frets+amount)
        }
    }

    return(
        <ActiveNotesContext.Provider
            value={
                {
                    toggleActiveNote,
                    activeNotes,
                    updateNumberOfFrets,
                    frets
                }
            }
        >
            {props.children}
        </ActiveNotesContext.Provider>
    )
}

export const useActiveNotes = () => {
    return useContext(ActiveNotesContext)
}