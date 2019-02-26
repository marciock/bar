import React from 'react'


class Icons extends React.Component{
  render(){
    return (
        <div>
        <a href={this.url}>
            <div className="text-center">
                <img src={this.props.img} />
                <h4>{this.props.text}</h4>
            </div>
            </a>
        </div>
    )
  }
}

export default Icons