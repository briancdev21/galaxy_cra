import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Row, Col, List, Tabs } from 'antd';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import * as moment from 'moment';

import { Header, Rect, PingFangSC, OpenBtn, Progress } from '../components';
import './second.css';
import mumAndBaby from '../assets/images/mumAndBaby.png';

const data = [
  {
    title: '任务 1 社交互动 - 眼神接触',
    content: '使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引',
  },
  {
    title: '任务 1 社交互动 - 眼神接触',
    content: '使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引',
  },
  {
    title: '任务 1    社交互动 - 眼神接触',
    content: '使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引',
  },
  {
    title: '任务 1 社交互动 - 眼神接触',
    content: '使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引',
  },
  {
    title: '任务 1 社交互动 - 眼神接触',
    content: '使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引',
  },
  {
    title: '任务 1 社交互动 - 眼神接触',
    content: '使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引导他们的眼神使用孩子喜欢的东西引',
  }
];

const data2 = [
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详',
    progress: 6,
    total: 10,
    finalDisplay: 8,
    process: 60,
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详',
    progress: 6,
    total: 10,
    finalDisplay: 8,
    process: 60,
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详',
    progress: 1,
    total: 5,
    finalDisplay: 5,
    process: 25,
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详',
    progress: 1,
    total: 5,
    finalDisplay: 5,
    process: 25,
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详',
    progress: 4,
    total: 8,
    finalDisplay: 8,
    process: 20,
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详',
    progress: 4,
    total: 8,
    finalDisplay: 8,
    process: 20,
  }
];
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);
const TabPane = Tabs.TabPane;

class Second extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Tabs defaultActiveKey="1" style={{ marginBottom: '-1.5em' }} tabBarStyle={{ color: '#cdcdcd', fontFamily: 'PingFangSC', fontWeight: 700, fontSize: '1em' }}>
            <TabPane tab="目标任务" key="1">
            </TabPane>
            <TabPane tab="联络簿" key="2">
            </TabPane>
          </Tabs>
          <Card className="sidebar-card card">
              <Row type="flex" justify="space-between">
                <Col>
                  <Row type="flex" align="middle">
                    <PingFangSC size={22} color="#4a4a4a" weight={700}>下次咨询</PingFangSC>
                  </Row>
                </Col>
              </Row>
              <div style={{ margin: '20px 0' }}>
                <PingFangSC size={19} weight={700} color='#7d7d7d'>
                  {moment(new Date()).format('HH:MM, YYYY年MM月DD日')}
                </PingFangSC>
              </div>
              <div style={{ margin: '20px 0', textAlign: 'center' }}>
                <OpenBtn start="#ff6d93" end="#ffa5bc" style={{ boxShadow: '#ff6d93 0 0 12px 0', width: 150 }}>
                  <Rect width={25} color="#fff" />&nbsp;
                  <PingFangSC size={20} weight={700} color='#fff'>
                    视频咨询
                  </PingFangSC>
                </OpenBtn>    
              </div>
              <div style={{ margin: '20px 0', textAlign: 'center' }}>
                <OpenBtn start="#ff6d93" end="#ffa5bc" style={{ boxShadow: '#ff6d93 0 0 12px 0', width: 150 }}>
                  <PingFangSC size={20} weight={700} color='#fff'>
                    加购咨询
                  </PingFangSC>
                </OpenBtn>    
              </div>
            </Card>
            <Card
              className="card"
            >
              <Row type="flex" justify="space-between" style={{  marginBottom: '2em' }}>
                <Col>
                  <Row type="flex" align="middle">
                    <PingFangSC size={22} color="#4a4a4a" mobileSize={20} weight={700}>任务清单</PingFangSC>
                  </Row>
                </Col>
              </Row>
              <Row>
                <List
                  grid={{
                    gutter: 40, xs: 1, sm: 1, md: 1, lg: 2, xl: 2
                  }}
                  dataSource={data}
                  renderItem={item => (
                    <List.Item>
                      <ListItem title={item.title} content={item.content}  />
                    </List.Item>
                  )}
                />
              </Row>
            </Card>
            {/* Second Card */}
            <Card
              className="card"
            >
              <Row type="flex" justify="space-between"  style={{  marginBottom: '2em' }}> 
                <Col>
                  <Row type="flex" align="middle">
                    <PingFangSC size={22} color="#4a4a4a" weight={700}>目标进度</PingFangSC>
                  </Row>
                </Col>
                <Col>
                  <Row type="flex" align="middle">
                    <PingFangSC size={19} color="#47e4c2" weight={500}>查看更多</PingFangSC>
                    &nbsp;
                    <Rect width={22} color="#47e4c2" />
                  </Row>
                </Col>
              </Row>
              <Row>
                <List
                  grid={{
                    gutter: 40, xs: 1, sm: 1, md: 1, lg: 2, xl: 2
                  }}
                  dataSource={data2}
                  renderItem={item => (
                    <List.Item>
                      <ListItem2 data={item} />
                    </List.Item>
                  )}
                />
              </Row>
            </Card>
            {/* Side card */}
            
        </Container>
      </React.Fragment>
    );
  }
}

export default Second;

const Container = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: auto;
  padding: 20px 15px;

  @media (max-width: 1260px) {
    padding: 15px;
  }
  @media (max-width: 560px) {
    padding: 10px;
  }
`;

const ListItem = ({ title, content }) => (
  <React.Fragment>
    <Row type="flex" align="middle" className="listitem-container">
      <img src={mumAndBaby} alt="" className="listitem-image" />
      <Col style={{ flex: 1 }}>
        <Row type="flex" justify="space-between" style={{ marginBottom: 10 }}>
          <PingFangSC size={20} weight={500} color='#000'>
            {title}
          </PingFangSC>
          <Rect width={22} color="#d8d8d8" />
        </Row>
        <Row type="flex" align="bottom" justify="space-between">
          <Col span={18}>
            <PingFangSC size={19} weight={500} color='#7d7d7d'>
              <ResponsiveEllipsis
                text={content}
                maxLine='2'
              />
            </PingFangSC>
          </Col>
          <Col span={6} align="right">
            <OpenBtn start="#63e2b7" end="#9cf3dc" style={{ padding: '3px 8px' }}>
              <PingFangSC size={20} weight={700} color='#fff'>
                打卡
              </PingFangSC>
            </OpenBtn>     
          </Col>     
        </Row>
      </Col>
    </Row>
  </React.Fragment>
);


const ListItem2 = ({ data }) => (
  <React.Fragment>
    <Row type="flex" align="middle" className="listitem-container">
      <Col style={{ flex: 1 }}>
        <Row type="flex" justify="space-between" style={{ marginBottom: 10 }}>
          <PingFangSC size={20} weight={500} color='#000'>
            {data.title}
          </PingFangSC>
        </Row>
        <Row type="flex" align="bottom" justify="space-between" style={{ marginBottom: 5 }}>
          <PingFangSC size={19} weight={500} color='#7d7d7d'>
            {data.content}
          </PingFangSC>
        </Row>
        <Row type="flex" align="bottom" justify="space-between">
          <Col>
            <PingFangSC size={17} weight={500} color='#7d7d7d'>
              当前进度
            </PingFangSC>
            <PingFangSC size={18} weight={900} color='#58d1d0'>
              &nbsp;{data.progress}/{data.total}&nbsp;
            </PingFangSC>
            <PingFangSC size={17} weight={500} color='#7d7d7d'>
              个词汇 · 最终指标
            </PingFangSC>
            <PingFangSC size={18} weight={900} color='#58d1d0'>
              &nbsp;{data.finalDisplay}/{data.total}&nbsp;
            </PingFangSC>
          </Col>
          <Col>
            <Progress percent={data.process} />
          </Col>
        </Row>
      </Col>
    </Row>
  </React.Fragment>
);
