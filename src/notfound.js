import React from 'react';

class NotFound extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log("This is the process.env", process.env.PUBLIC_URL)
        return (
            <div className='row'>
                <div className='col-xl-12'>
                    <h2 className='my-3'>404 page</h2>
                    <p>File not found</p>
                </div>
            </div>
        )
    }
}

export default NotFound;