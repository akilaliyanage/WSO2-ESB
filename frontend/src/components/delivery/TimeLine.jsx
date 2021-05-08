import React, { Component } from 'react';
import { Timeline, Descriptions, Statistic, Card} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            price : window.localStorage.getItem('delCost')
         }
    }

    componentDidUpdate(prevProps) {
        if(this.props.trigger !==  prevProps.trigger) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
        {
          this.setState({price : window.localStorage.getItem('delCost')})
        }
      } 
      


    render() { 
        return ( 
            <div>
                <Descriptions title="Shipping Status"></Descriptions>
                <br/>
                <Timeline mode="alternate">
                    <Timeline.Item>Items Selected</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                   Processing
                    </Timeline.Item>
                </Timeline>

          <Statistic
            title="Your delivery fee is (Incl tax)"
            value={this.state.price}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix="Rupees"
          />
            </div>
         );
    }
}
 
export default TimeLine;