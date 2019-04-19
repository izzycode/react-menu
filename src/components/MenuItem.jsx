import React, {Component} from 'react'


export default class MenuItem extends Component {
  state = {
    name: 'southwestern sammy',
    image: 'https://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2017/05/main/egg-in-nest-blt-sandwiches-1707p38.jpg?itok=-2zHWRHS',
    price: 1000
  }

  currency = () => {
    return (
      (this.state.price / 100)
        .toLocaleString("en-US", {style: "currency", currency: "USD"})
      )
  }


  render(){
    return(
      <div>
        <h1>{this.state.name}</h1>
        <img src={this.state.image} alt="sandwich" height='200px' />
        <h2>{this.currency()}</h2>
      </div>
    )
  }

}
