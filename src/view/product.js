import React from 'react' 
import {
  Link,
  Route
} from 'react-router-dom'
import ProductDetail from './productdetail'
export default class Product extends React.Component {
  constructor() {

    super()
    this.state = {}
  }
  render() {
    console.log(this.props)
    const {match}=this.props;
    return (
      <div>
        <Link to={`${match.path}/1`}>产品1</Link>
        <Link to={`${match.path}/2`}>产品2</Link>
        <Link to={`${match.path}/3`}>产品3</Link>
        <hr/>
        <Route path={`${match.path}/:id`} component={ProductDetail}>

        </Route>

      </div>
    )
  }
}