import React , {Component} from 'react'
import Header from './header'
import axios from 'axios'

class detailPost extends Component {

  state = {
    title : '',
    price : '',
    images : [],
    priceHistory : [],
    test : {}
  };

  async componentDidMount () {
    var {link} =this.props.location.state
    const res = await axios({
      method: 'post',
    url:'http://localhost:1234/getProductDetail',
    data: {
    link: link
  }
})
this.setState({
  name : res.data.name,
  price : res.data.price,
  images : res.data.images,
  priceHistory : res.data.priceHistory,
})

  }

render () {
    return (
      <div>
      <Header/>
      <label htmlFor="name"> Name : </label>
      <label htmlFor="name">{this.state.name}</label> <br/>
      <label htmlFor="content">price : </label>
      <label htmlFor="title">{this.state.price}</label> <br/>
      <label htmlFor="content">price history  : </label>
      <ul>
        {this.state.priceHistory.map(price =>
          <li>
            <p>{price.time}</p>
            <p>{price.prevPrice}</p>
          </li>
        )}
        </ul>
        <label htmlFor="content">Images  : </label>
      <ul>
        {this.state.images.map(image =>
          <p>  <img src = {image}></img> </p>
        )}
        </ul>
      </div>
    )
  }



}
export default detailPost
