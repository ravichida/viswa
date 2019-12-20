import React from 'react';
import Update from './update'
class ModalDialog extends React.Component {

  render() {
    const maxwidth = { "maxWidth": "80%" };
    return (
      <div>
        <div className="modal fade" id="orderModal" role="dialog">
          <div className="modal-dialog" style={maxwidth}>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Modal Options</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                <Update user={this.props.user} update={this.props.update} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ModalDialog;