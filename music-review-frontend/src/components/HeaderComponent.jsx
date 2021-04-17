import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">        
                    <div>
                        <a href="https://www.github.com/travelingdeveloper12" className="navbar-brand">Songs Review Application</a>
                    </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;