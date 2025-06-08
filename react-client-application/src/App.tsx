import './App.css'
import CountriesPage from './components/pages/countries'
import { WhatsYourName } from './components/whats-your-name'
import { HowYouLook } from './components/whats-your-name/how-you-look'

function App() {
    return (
        <>
            <CountriesPage />
           <WhatsYourName />
           <HowYouLook />
        </>
    )
}
export default App


