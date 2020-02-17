import React from 'react';

class UpdateBtn extends React.Component {

    state = { showing: true };

    render() {
        const { showing } = this.state;
        return (
            <div>
                <button onClick={() => this.setState({ showing: !showing })}>toggle</button>
                { showing 
                    ? <div>This is visible</div>
                    : null
                }
            </div>  
        )
    }
}

<button type="button" className="btn btn-primary" onClick={this.updateChange} data-toggle="modal" data-target="#orderModal" data-show="false">Save</button>
export default UpdateBtn;