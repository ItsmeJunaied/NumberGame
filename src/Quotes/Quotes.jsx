
// import { useState } from 'react';
import { useState } from 'react';
import data from '../../public/quotes.json';
const Quotes = () => {

    const [activeData, setActiveData] = useState(data[0]);

    const handleColor = (color) => {
        const matchedData = data.find(item => item.colorCode === color);
        setActiveData(matchedData);
    }
    
    console.log("activeData:", activeData);
    

    return (

        <>
            {activeData && (
                <div className=' container mx-auto flex flex-row justify-around items-center ' key={activeData.id}>
                    <div>
                        <div className="card w-96 bg-primary text-primary-content">
                            <div className="card-body">
                                <h2 className="card-title italic">{activeData.author}</h2>
                                <p>{activeData.quote}</p>
                            </div>
                        </div>
                    </div>

                    {/* image */}
                    <div>
                        <img className=' w-96' src={activeData.imageLink} alt="" />
                    </div>
                </div>
            )}
            <div className=' container mx-auto'>
                {/* card */}

                <div className='flex flex-row gap-2 justify-center items-center'>
                    {data.map(item => (
                        <button onClick={() => handleColor(item.colorCode)} key={item.id} className="w-16 h-16 rounded-full flex justify-center items-center" style={{ backgroundColor: `${item.colorCode}` }}>
                            <img src={item.imageLink} alt={item.author} className="w-16 h-16 rounded-full" />
                        </button>
                    ))}
                </div>



            </div>
        </>
    );
};

export default Quotes;