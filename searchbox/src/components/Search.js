import React, { useState } from 'react';
import Suggestion from './Suggestion';

const Search = () => {
    const [input, setInput] = useState('');

    const handleInput = (e) => {
        setInput(e.target.value);
        // console.log(input)
    };

    return (
        <div>
            <input type="text" onChange={handleInput} placeholder="Enter the city" />
            <Suggestion input={input} setInput={setInput} />
        </div>
    );
};

export default Search;