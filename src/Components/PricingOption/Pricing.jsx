import { use } from "react";
import PricingCard from "../pricingCard/PricingCard";

const Pricing = ({ pricingPromise }) => {
    const showPricing = use(pricingPromise)
    return (
        <div>
            <div className="mt-10 mx-20">
                <h1 className="text-5xl font-bold text-center">
                    Get Our Plan
                </h1>
                <div className="flex justify-center">
                    {
                        showPricing.map(prices => <PricingCard key={prices.id} prices={prices}></PricingCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Pricing;