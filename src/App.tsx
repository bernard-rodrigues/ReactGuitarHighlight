import { FretsCounter } from "./components/FretsCounter";
import { GuitarNeck } from "./components/GuitarNeck";
import { Header } from "./components/Header";
import { Piano } from "./components/Piano";
import { ActiveNotesProvider } from "./contexts/activeNotesContext";


export function App() {
  return (
    <ActiveNotesProvider>
      <Header />
      <GuitarNeck />
      <Piano />
      {/* <FretsCounter /> */}
    </ActiveNotesProvider>    
  )
}
