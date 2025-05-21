import './App.css'

function App() {
    return (
        <>
            <HeaderApp title='hi' />
            <HeaderApp title='yeepe' myColor='yellow' />
        </>
    )
}

export default App


function HeaderApp(props:
    { title: string, myColor?: string }) {
    return <h1 style={{ color: props.myColor }} >{props.title} </h1>
}
