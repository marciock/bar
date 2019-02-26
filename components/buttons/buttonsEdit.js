import React from 'react'

class ButtonsEdit extends React.Component{

  render(){
    const btn='btn'+this.props.btn+'bmd-btn-fab'
    return (
      <div>
        <a href={this.props.url}>
          <button type="button" className={btn} >
            <i className="material-icons">{this.props.icon}</i>
          </button>
        </a>
      </div>
    )
  }
}

export default ButtonsEdit