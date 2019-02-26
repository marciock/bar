import React from 'react'

class Fab extends React.Component{
  render(){
    return (
      <div className="float-right">
      <a href={this.props.url}>
        <button type="button" className="btn btn-danger bmd-btn-fab"  >
           <i className="material-icons">{this.props.icon}</i>
        </button>
        </a>
      </div>
    )
  }
}

export default Fab