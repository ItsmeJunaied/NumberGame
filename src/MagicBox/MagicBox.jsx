import { useState } from "react";


const MagicBox = () => {

    const [text, setText] = useState('');
    const handleMagicBox = (e) => {
        setText(e.target.value)
    }

    const handleClear = () => {
        setText('')
    }

    const handleCapitalize = () => {
        setText(text.toUpperCase())
    }

    const handleSort = () => {
        const sortedLines = text.split('\n').sort().join('\n');
        setText(sortedLines);
    };

    const handleReverse = () => {
        const reversedLines = text.split('\n').reverse().join('\n');
        setText(reversedLines);
    };

    const handleStrip = () => {
        const strippedLines = text
            .split('\n')
            .map(line => line.trim())
            .filter(line => line !== '')
            .join('\n');
        setText(strippedLines);
    };

    const handleAddNumbers = () => {
        const numberedLines = text.split('\n').map((line, index) => `${index + 1}. ${line}`).join('\n');
        setText(numberedLines);
    };

    const handleShuffle = () => {
        const shuffledLines = text.split('\n').sort(() => Math.random() - 0.5).join('\n');
        setText(shuffledLines);
    };


    return (
        <>
            <div className=" container mx-auto ">
                <div className="mockup-window border bg-orange-400">
                    <div className="flex flex-col justify-center items-center px-1 py-10 bg-gray-600">
                        <textarea onChange={handleMagicBox} value={text} className="textarea textarea-bordered w-2/3 h-[500px]" placeholder="Write What You Want! ..."></textarea>
                        <div className=" flex flex-row gap-5 mt-3">
                            <button onClick={handleClear} className="btn">Clear it</button>
                            <button onClick={handleCapitalize} className="btn btn-neutral">Capitalize</button>
                            <button onClick={handleSort} className="btn btn-primary">Sort</button>
                            <button onClick={handleReverse} className="btn btn-secondary">Reverse</button>
                            <button onClick={handleStrip} className="btn btn-accent">Strip Blank</button>
                            <button onClick={handleAddNumbers} className="btn btn-ghost">Add Numbers</button>
                            <button onClick={handleShuffle} className="btn btn-link">Shuffle</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default MagicBox;