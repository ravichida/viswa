import React from 'react';
import Update from './update'
class ModalDialog extends React.Component {
  constructor(props) {
    super(props);
    this.updateList = this.updateList.bind(this);
  }

  updateList = (user) => {
    if (typeof this.props.update === 'function') {
      console.log("updateParent ModalDialog.js", user);
      this.props.update(user);
    }
  }

  render() {
    const maxwidth = { "maxWidth": "90%" };
    return (
      <div>
        <div className="modal fade" id="orderModal" role="dialog">
          <div className="modal-dialog" style={maxwidth}>
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Update Order</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                  <Update user={this.props.user} remove={this.removeData} update={this.updateList} />
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