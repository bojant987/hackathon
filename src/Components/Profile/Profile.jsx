import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {Tabs, Row, Col} from 'antd';
import Card from '../Order/Card';

class Profile extends React.Component {


    render() {

        console.log("___ > > > ", this.props.cardData);

        return(
            <Row type="flex" justify="space-around" align="middle">
                <div className="h-layoutWidth90 h-marginT--xxl" >
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
                        <Card
                            key={new Date().getDay()}
                            item={this.props.cardData1}
                        />
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
                        <Card
                            key={new Date().getDay()}
                            item={this.props.cardData2}
                        />
                    </Col>
                    <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 8 }}>
                        <Card
                            key={new Date().getDay()}
                            item={this.props.cardData3}
                        />
                    </Col>
                </div>
            </Row>
        );
    }
}


const mapStateToProps = state => {
    return {
       cardData1: state.menu.all[1],
       cardData2: state.menu.all[2],
       cardData3: state.menu.all[3],
    };
};

export default connect(mapStateToProps)(Profile);