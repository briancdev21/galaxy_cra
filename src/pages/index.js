import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Row, Col, Tabs, List } from 'antd';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC'

import { Header, Rect, PingFangSC, OpenBtn } from '../components';
import './index.css';
import mumAndBaby from '../assets/images/mumAndBaby.png';

const TabPane = Tabs.TabPane;
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
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
          <Card
            className="card"
          >
            <Row type="flex" justify="space-between">
              <Col>
                <Row type="flex" align="middle">
                  <Rect width={30} color="#4a4a4a" />
                  &nbsp;&nbsp;
                  <PingFangSC size={22} color="#4a4a4a" weight={700}>目标任务</PingFangSC>
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
              <Tabs defaultActiveKey="1" style={{ padding: 10 }} tabBarStyle={{ color: '#cdcdcd', fontFamily: 'PingFangSC', fontWeight: 700 }}>
                <TabPane tab="任务清单" key="1">
                  <List
                    grid={{
                      gutter: 16, xs: 1, sm: 1, md: 2, lg: 2, xl: 2
                    }}
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <ListItem title={item.title} content={item.content} />
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="目标进度" key="2">Tab 2</TabPane>
              </Tabs>
            </Row>
          </Card>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

const Container = styled.div`
  width: 100%;
  max-width: 1378px;
  margin: 15px auto;
`;

const ListItem = ({ title, content }) => (
  <React.Fragment>
    <Row type="flex" align="middle" style={{ margin: 20, padding: '20px 0', height: 140, borderBottom: 'solid 1px #70707032' }}>
      <img src={mumAndBaby} alt="" style={{ height: 100, width: 70, marginRight: 20 }} />
      <Col style={{ flex: 1 }}>
        <Row type="flex" justify="space-between" style={{ marginBottom: 10 }}>
          <PingFangSC size={20} weight={500} color='#000'>
            {title}
          </PingFangSC>
          <Rect width={22} color="#d8d8d8" />
        </Row>
        <Row type="flex" align="bottom" justify="space-between">
          <Col span={20}>
            <PingFangSC size={19} weight={500} color='#7d7d7d'>
              <ResponsiveEllipsis
                text={content}
                maxLine='2'
              />
            </PingFangSC>
          </Col>
          <Col span={4}>
            <OpenBtn radius={18} height={35} >
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
