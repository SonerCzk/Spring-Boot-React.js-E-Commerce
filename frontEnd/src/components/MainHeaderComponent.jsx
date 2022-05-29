import React, { Component } from 'react';

class MainHeaderComponent extends Component {
    constructor(props){
        super(props)

        this.state={

            

        }
    }



    render() {
        return (
            <div>
                
                <header>
                    <nav className='navbar navber-expand-md navbar-dark bg-dark'>
                        <div className='logo'>SCZK</div>
                        <div>
                            <a href="http://localhost:3000/login" className='navbar-brand'>Login as Admin</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default MainHeaderComponent;