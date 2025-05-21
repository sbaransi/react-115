import './App.css'

function App() {
    return (
        <>
            <HeaderApp />
        </>
    )
}

export default App


function HeaderApp(props: { title: string, myColor: string }) {
    return <h1> New React Application </h1>
}
