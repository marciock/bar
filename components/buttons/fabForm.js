import React from 'react'

class FabForm extends React.Component{
  render(){
    return (
      <div className="float-right">
     
        <button type="submit" className="btn btn-danger bmd-btn-fab"  >
           <i className="material-icons">{this.props.icon}</i>
        </button>
       
      </div>
    )
  }
}

export default FabForm