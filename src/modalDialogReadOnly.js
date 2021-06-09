import React from 'react';
import UpdateReadOnly from './updateReadOnly'
class ModalDialogReadOnly extends React.Component {
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
                  <UpdateReadOnly order={this.props.order} readonly="false" update={this.updateList} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default ModalDialogReadOnly;