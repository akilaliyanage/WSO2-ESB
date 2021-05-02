import React, { Component } from 'react';
import { PageHeader } from 'antd';
class MainHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Delivery Page"
    subTitle={this.props.itemName}
  />
         );
    }
}
 
export default MainHeader;