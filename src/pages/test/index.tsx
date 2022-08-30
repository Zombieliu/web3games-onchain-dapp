import {atom, useAtom} from 'jotai'
import {atomWithStorage, useHydrateAtoms} from 'jotai/utils'


// Set the string key and the initial value
const darkModeAtom = atomWithStorage('darkMode', false)

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const Test = ({ countFromServer }) => {
    // Consume persisted state like any other atom
    // useHydrateAtoms([[darkModeAtom, countFromServer]])

    const [darkMode, setDarkMode] = useAtom(darkModeAtom)
    // const [selected, setSelected] = useAtom(NetWorkState)
    const toggleDarkMode = () => setDarkMode(!darkMode)
    // useEffect(()=>{
    //     // setDarkMode(darkMode)
    //     // console.log(darkMode)
    // },[])
        console.log(",",darkMode)
        return (

            <>
                <h1>Welcome to {darkMode ? 'dark' : 'light'} mode!</h1>
                <button onClick={toggleDarkMode}>toggle theme</button>
                <div className={`${darkMode ? "" : "hidden"}`}>
                    true
                </div>
                <div className={`${darkMode ? "hidden" : ""}`}>
                    false
                </div>
                {`${darkMode}`}
            </>
        )
}
export default Test
