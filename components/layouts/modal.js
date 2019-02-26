import React from 'react'

class Modal extends React.Component{

    constructor(props){
      super(props);

      this.handleCloseClick = this.handleCloseClick.bind(this);
    }
    componentDidMount(){
      $(this.modal).modal('show');
        $(this.modal).on('hidden.bs.modal', handleModalCloseClick);
    }
    handleCloseClick() {
      const { handleModalCloseClick } = this.props;
      $(this.modal).modal('hide');
      handleModalCloseClick();
    }
    render(){
      return (
        <div className="modal fade" id="exampleModal"  role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={this.handleCloseClick}>Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
      )
    }

}

export default Modal