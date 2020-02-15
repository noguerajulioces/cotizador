import React from 'react';

const Header = ({titulo}) => {
    return(
        <header>
            <h2 className="text-center">{titulo}</h2>
        </header>
    )
}

export default Header;