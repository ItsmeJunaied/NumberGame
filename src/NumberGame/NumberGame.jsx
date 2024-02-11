import  { useState } from 'react';

const NumberGame = () => {
    const [inputValue, setInputValue] = useState('');
    const [min, setMin] = useState(null);
    const [max, setMax] = useState(null);
    const [sum, setSum] = useState(null);
    const [avg, setAvg] = useState(null);
    const [reverse, setReverse] = useState('');

    const handleInput = (e) => {
        setInputValue(e.target.value);
    };

    const calculate = () => {
        const numbers = inputValue.split(',').map(num => parseFloat(num.trim()));

        // Calculations
        setMin(Math.min(...numbers));
        setMax(Math.max(...numbers));
        setSum(numbers.reduce((acc, num) => acc + num, 0));
        setAvg(sum / numbers.length);
        setReverse(numbers.reverse().join(', '));
    };

    return (
        <div className="card w-96 bg-primary text-primary-content container mx-auto">
            <div className="card-body">
                <h2 className="card-title">Find Min, Max, Avg, Sum, and Reverse.</h2>
                <input onChange={handleInput} className="rounded-lg p-3 text-black" type="text" placeholder="Input comma-separated numbers" />

                <button onClick={calculate} className="btn mt-4">Calculate</button>

                <p>Max: {max}</p>
                <p>Min: {min}</p>
                <p>Sum: {sum}</p>
                <p>Avg: {(avg.toFixed(2))}</p>
                <p>Reversed Order: {reverse}</p>
                

            </div>
        </div>
    );
};

export default NumberGame;
