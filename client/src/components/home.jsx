import React , {Component} from 'react'
import NavBar from './navbar'
import axios from 'axios'

class Home extends Component {

  state = {
    link : ''
  };

   handleSubmit = async event => {
    event.preventDefault();

    const link = this.state.link
    await axios({
      method: 'post',
    url:'http://localhost:1234/getDetailInformation' ,
    data: {
    link: link,
  }
})
this.props.history.push({
pathname: '/detailPost',
state: {link}
})
  };

  handleChangeLink = event => {
     this.setState({link : event.target.value })
   }


  render () {
    return (
      <div>
        <NavBar/>
        <div>
            <form onSubmit = {this.handleSubmit} method = "POST">
            <label htmlFor = "link"> Input Link  </label>
            <input onChange = {this.handleChangeLink} type=  "text" name="link" />
            <input type = "submit" value="Submit Link" />
          </form>
        </div>
      </div>
    )
  }
}

export default Home
