import React, {useState} from 'react';
function Header(){
    const [number, setNumber] = useState(0);


    const increment = () => setNumber(number+1);
    const decrement = () => setNumber(number-1);
    const reset = () => setNumber(0);


    return(
       <header>
            <nav>
                <a href="">HOME</a>
                <a href="">ABOUT US</a>
                <a href="">PRODUCTS</a>
                <a href="">CONTACT US</a>
            </nav>
       </header>
    );
}

export default Header;