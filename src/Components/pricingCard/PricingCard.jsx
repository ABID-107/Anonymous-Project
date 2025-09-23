import CardFeature from "./CardFeature";

const PricingCard = ({ prices }) => {
    const { planName, price, description, features } = prices
    return (
        <div>
            <div className=" bg-[#660B05] m-5 p-5 rounded-2xl w-2xs transform transition duration-300 ease-in-out hover:scale-110">
                <div>
                    <h1 className="text-2xl font-bold">
                        {planName}
                    </h1>
                    <p className="text-xl">
                        {price}
                    </p>
                </div>
                <div>
                    <p>
                        {description}
                    </p>
                    {
                        features.map((f, index) => <CardFeature f={f} key={index}></CardFeature>)
                    }
                </div>
                <button className="mt-5 shadow-xl/50 p-3 rounded-2xl 
                transform transition duration-300 
                ease-in-out hover:scale-110">Get Now</button>
            </div>

        </div>
    );
};

export default PricingCard;