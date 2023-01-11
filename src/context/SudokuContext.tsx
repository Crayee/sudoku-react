import {
    createContext,
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useContext,
    useState,
} from 'react'
import moment from 'moment'

type SudokuContextProps = {
    numberSelected: string
    setNumberSelected: Dispatch<SetStateAction<string>>
    gameArray: string[]
    setGameArray: Dispatch<SetStateAction<string[]>>
    difficulty: string
    setDifficulty: Dispatch<SetStateAction<string>>
    timeGameStarted: moment.Moment
    setTimeGameStarted: Dispatch<SetStateAction<moment.Moment>>
    fastMode: boolean
    setFastMode: Dispatch<SetStateAction<boolean>>
    cellSelected: number
    setCellSelected: Dispatch<SetStateAction<number>>
    initArray: string[]
    setInitArray: Dispatch<SetStateAction<string[]>>
    won: boolean
    setWon: Dispatch<SetStateAction<boolean>>
}

const SudokuContext = createContext<SudokuContextProps>({
    numberSelected: '0',
    setNumberSelected: () => {},
    gameArray: [],
    setGameArray: () => {},
    difficulty: 'Easy',
    setDifficulty: () => {},
    timeGameStarted: moment(),
    setTimeGameStarted: () => {},
    fastMode: false,
    setFastMode: () => {},
    cellSelected: -1,
    setCellSelected: () => {},
    initArray: [],
    setInitArray: () => {},
    won: false,
    setWon: () => {},
})

export const SudokuProvider = (props: PropsWithChildren) => {
    const [numberSelected, setNumberSelected] = useState<string>('0')
    const [gameArray, setGameArray] = useState<string[]>([])
    const [difficulty, setDifficulty] = useState<string>('Easy')
    const [timeGameStarted, setTimeGameStarted] = useState<moment.Moment>(
        moment()
    )
    const [fastMode, setFastMode] = useState<boolean>(false)
    const [cellSelected, setCellSelected] = useState<number>(-1)
    const [initArray, setInitArray] = useState<string[]>([])
    const [won, setWon] = useState<boolean>(false)

    return (
        <SudokuContext.Provider
            value={{
                numberSelected,
                setNumberSelected,
                gameArray,
                setGameArray,
                difficulty,
                setDifficulty,
                timeGameStarted,
                setTimeGameStarted,
                fastMode,
                setFastMode,
                cellSelected,
                setCellSelected,
                initArray,
                setInitArray,
                won,
                setWon,
            }}
        >
            {props.children}
        </SudokuContext.Provider>
    )
}

export const useSudokuContext = (): SudokuContextProps =>
    useContext(SudokuContext)

// Usage
// const { numberSelected, setNumberSelected } = useNumberValue();
