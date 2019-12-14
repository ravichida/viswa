import React from 'react';

class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("This is the process.env", process.env.PUBLIC_URL)
        return (
            <div className='row'>
                <div className='col-xl-12'>
                    <h2>Home page</h2>
                </div>
            </div>
        )
    }
}

export default Home;