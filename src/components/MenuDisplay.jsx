import React, { Component } from 'react'
import MenuItem from './MenuItem.jsx'

export default class MenuDisplay extends Component {

  state = {
    menuItems: []
  }

  buildMenu = () => {
    let menu = [this.state.menuItems]
    return (
      menu.map((elem) => {
        return "hello"
      })
    )
  }

  handleMenu = ev => {
    fetch("https://gist.githubusercontent.com/izzycode/cddcac1643c8e932128eecc5ad94878c/raw/96b2aafa1ff601efb71830dafebcc038293e4c43/appetizers.json")
      .then(res => res.json())
      .then(data => {
        this.setState({ menuItems: data.appetizers })
      })
  }





  render(){
    return(
      <div>
        <h1> MenuItem</h1>
        {this.handleMenu()}
      </div>

    )
  }
}
