import { useAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'


// Set the string key and the initial value
const darkModeAtom = atomWithStorage('darkMode', false)

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
const Test = () => {


    // Consume persisted state like any other atom
    const [darkMode, setDarkMode] = useAtom(darkModeAtom)

    // const [selected, setSelected] = useAtom(NetWorkState)
    const toggleDarkMode = () => setDarkMode(!darkMode)
    // useEffect(()=>{
    //     // setDarkMode(darkMode)
    //     // console.log(darkMode)
    // },[])

    if (darkMode){
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
    }else{
        console.log(",,",darkMode)
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

}
export default Test
