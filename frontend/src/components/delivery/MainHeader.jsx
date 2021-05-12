import React, { Component } from 'react';
import { PageHeader } from 'antd';
import {Link} from 'react-router-dom'
class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <PageHeader
    className="site-page-header"
    onBack={() => {
        return(
            <Link to="/del-method"></Link>
        )
    }}
    title="Delivery Page"
    subTitle={this.props.itemName}
  />
         );
    }
}
 
export default MainHeader;