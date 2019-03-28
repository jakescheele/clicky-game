import React from 'react';

function Header(props) {
    return (
        <nav className="navbar fixed-top navbar-light bg-light">
            <a className="navbar-brand" href="#">Experiment Round Up</a>
            <span>Score: {props.score}</span>
        </nav>
    );
}

export default Header;