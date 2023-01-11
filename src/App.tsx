import { Game } from './components/Game'
import './App.css'
import { SudokuProvider } from './context/SudokuContext'


const App = () => {
    return (
        <SudokuProvider>
            <Game />
        </SudokuProvider>
    )
}

export default App
