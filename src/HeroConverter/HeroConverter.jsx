/* eslint-disable no-unused-vars */
import { useState } from "react";


const HeroConverter = () => {

    const [number, setNumber] = useState(0)
    const [selectedOption, setSelectedOption] = useState('');

    const handleInput = (e) => {

        setNumber(e.target.value);

    }

    const handleSelect = (e) => {
        setSelectedOption(e.target.value);
    };

    let output = 0;

    if (selectedOption === 'kgToLb') {
        output = (number * 2.2046).toFixed(2)
    } else {
        output = (number * 0.4536).toFixed(2)
    }
    return (
        <div className=" container mx-auto flex justify-center mt-20 mb-20">
            <div className="card w-96 bg-lime-400 text-black">
                <form className="card-body">
                    <h2 className="card-title text-center"> Hero Converter</h2>
                    <input onChange={handleInput} className=" rounded-lg p-3" type="number" placeholder=" input a number"/>


                    <select value={selectedOption} onChange={handleSelect} className="select select-error max-w-xs">
                        <option disabled value="">Choose</option>
                        <option value="kgToLb">KG to LB</option>
                        <option value="lbToKg">LB to KG</option>
                    </select>

                    <div className="card-actions justify-end">
                        <div className="  bg-blue-500 p-3 rounded-lg font-bold uppercase text-white">output: {output}</div>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default HeroConverter;