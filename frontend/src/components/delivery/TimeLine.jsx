import React, { Component } from 'react';
import { Timeline, Descriptions, Statistic, Card} from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }


    render() { 
        return ( 
            <div>
                <Descriptions title="Shipping Status"></Descriptions>
                <br/>
                <Timeline mode="alternate">
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                    </Timeline.Item>
                    <Timeline.Item color="red">Network problems being solved 2015-09-01</Timeline.Item>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                    Technical testing 2015-09-01
                    </Timeline.Item>
                </Timeline>

          <Statistic
            title="Your delivery fee is (Incl tax)"
            value={800}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            suffix="Rupees"
          />
            </div>
         );
    }
}
 
export default TimeLine;