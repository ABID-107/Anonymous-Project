import { Suspense } from "react"
import Navbar from "./Components/Navbar/Navbar"
import Pricing from "./Components/PricingOption/Pricing"

const pricingPromise = fetch('./../public/Pricing.json').then(res => res.json())

function App() {
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-lg">
            </span>
          }
        >

          <Pricing pricingPromise={pricingPromise}></Pricing>
        </Suspense>


      </main>
    </>
  )
}

export default App
