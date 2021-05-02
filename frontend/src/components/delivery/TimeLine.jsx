import React, { Component } from 'react';
import { Timeline, Card, Descriptions, Alert} from 'antd';

class TimeLine extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Descriptions title="Special dates and Events in this month">
                <div style={{paddingLeft:"50px", paddingTop:"20px"}}>
                <Timeline>
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                </Timeline>

                </div>
            </Descriptions>
         );
    }
}
 
export default TimeLine;