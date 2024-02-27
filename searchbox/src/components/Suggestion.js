import React, { useEffect, useState } from 'react';

const Suggestion = ({ input, setInput }) => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        if (input) {
            getDetails(input);
        } else {
            setSuggestions([]);
        }
    }, [input]);

    const getDetails = async (place) => {
        const api = `https://secure.geonames.org/postalCodeSearchJSON?placename_startsWith=${place}&maxRows=5&username=Arun&country=IN`;

        try {
            const res = await fetch(api);
            const data = await res.json();
            console.log(data)
            if (data.postalCodes) {
                setSuggestions(data.postalCodes);
            } else {
                setSuggestions([]);
            }
        } catch (e) {
            console.log('Error in autocomplete: ' + e);
        }
    };

    const handleSelect = (placeName) => {
        setInput(placeName);
        setSuggestions([]);
    };

    return (
        <div>
            <ul className="suggestions">
                {suggestions.map((postalCode) => (
                    <li key={postalCode.placeName} onClick={() => handleSelect(postalCode.placeName)}> {postalCode.placeName} </li>
                ))}
            </ul>
        </div>
    );
};

export default Suggestion;