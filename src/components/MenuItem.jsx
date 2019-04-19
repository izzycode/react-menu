import React, {Component} from 'react'
import css from './MenuItem.css'


export default class MenuItem extends Component {
  state = {
    name: '',
    image: '',
    price: 0
  }

  currency = () => {
    return (
      (this.state.price / 100)
        .toLocaleString("en-US", {style: "currency", currency: "USD"})
      )
  }

  componentDidMount(){
    this.setState({
      name: this.props.values.name,
      image: this.props.values.image,
      price: this.props.values.price,
    })
  }

  render(){
    return(
      <div className= 'sandwich'>
        <h1>{this.state.name}</h1>
        <img className="sammy" src={this.state.image} alt="sandwich" height='300px' />
        <h2>{this.currency()}</h2>
      </div>
    )
  }

}
