import React from 'react';

class Home extends React.Component{
    render(){
        console.log("This is the process.env", process.env.PUBLIC_URL)
        return (
            <div className='row'>
                <div className='col-xl-12'>
                    <h2 className='my-3'>Home page</h2>
                </div>
            </div>
        )
    }
}

export default Home;