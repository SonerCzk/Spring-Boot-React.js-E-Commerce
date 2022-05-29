import React, { Component } from 'react';

class HeaderComponent extends Component {
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
                        <div>
                            <a href="http://localhost:3000/admin" className='navbar-brand'> Admin System</a>
                            <a href="http://localhost:3000/admin/getAllUser" className='navbar-brand'> Users</a>
                            <a href="http://localhost:3000/admin/categories" className='navbar-brand'> Categories</a>
                            <a href="http://localhost:3000" class="btn btn-outline-danger" role="button">LogOut</a>
                        </div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;