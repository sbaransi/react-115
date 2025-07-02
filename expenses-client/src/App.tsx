import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ThemeContext } from './context/themeContext'
import { CounterProvider } from './context/counterContext'

function App() {
    const context = useContext(ThemeContext)
    return (
        <>

            <div style={{ background: context.theme as string }}>
                <Parent />
            </div>
            <div style={{ background: context.theme as string }}>
                <Parent />
            </div>
        </>
    )
}
function Parent() {
    return <>
        <CounterProvider>
            <Child />
        </CounterProvider>
    </>
}
console.log("?")

function Child() {
    const context = useContext(ThemeContext)

    return <>
        <div>
            <a href="https://vite.dev" target="_blank">
                <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.tsx</code> and save to test HMR
            </p>
        </div>
        <button onClick={() => {
            context.toggleTheme()
        }}>
            toggle Theme (Current is: {context.theme})
        </button>
        <p className="read-the-docs">
            Click on the Vite and React logos to learn more
        </p></>
}
export default App
