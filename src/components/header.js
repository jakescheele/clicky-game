import React from 'react';

function Header(props) {
    return (
        <div className="container">
            <nav className="navbar fixed-top navbar-light bg-light">
                <a className="navbar-brand" href="#">Experiment Round Up</a>
                <span>Score: {props.score}</span>
            </nav>
        </div>
    );
}

export default Header;