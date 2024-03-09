import React from 'react';
import { useSelector } from 'react-redux';

const Footer = () => {
    const count = useSelector((state) => state.counter.value)
    return (
        <div>
            Footer Count: {count}
        </div>
    );
}

export default Footer;
