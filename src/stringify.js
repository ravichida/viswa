import React from 'react';

class StringfyJson extends React.Component{
    constructor(props){
        super(props)
    }
    // dataa = {"name": "Ravi Kumar Chida"}
    render(){
        return (<div><pre>{JSON.stringify(this.props, null, 2) }</pre></div>);
    }
}

export default StringfyJson;