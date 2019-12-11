import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import NavBar from './navbar'
export default class Post extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const result = await  axios.get('http://localhost:1234/getAllProducts')
      await this.setState({products : result.data})
  }




  render () {
  return (
    <div>
    <NavBar/>
    <table>
    <ul>
    {this.state.products.map(product =>
      <tr key ={product.id}>
      <td>   <p> Name : {product.name}</p> </td>
      <td>  <p>Price : {product.price}  </p></td>
      <td>  <NavLink to =
      {{
  pathname: '/detailPost',
  state: {
    link : product.link
  }
}}> <button>Detail</button></NavLink> </td>



      </tr>
    )}
      </ul>
      </table>
    </div>

  )
}



}
