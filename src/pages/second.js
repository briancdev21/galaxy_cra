import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Row, Col, Tabs, List } from 'antd';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import * as moment from 'moment';

import { Header, Rect, PingFangSC, OpenBtn } from '../components';
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
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详 当前进度 6/10 个词汇 · 最终指标 8/10',
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详 当前进度 6/10 个词汇 · 最终指标 8/10',
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详 当前进度 6/10 个词汇 · 最终指标 8/10',
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详 当前进度 6/10 个词汇 · 最终指标 8/10',
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详 当前进度 6/10 个词汇 · 最终指标 8/10',
  },
  {
    title: '语言表达 - 语句 - 功能性词条',
    content: '这里是详细解释这里是详细解释这里是详细解释这里是详细解释这里是详 当前进度 6/10 个词汇 · 最终指标 8/10',
  }
];
const ResponsiveEllipsis = responsiveHOC()(LinesEllipsis);

class Second extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Container>
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
            <Row type="flex" justify="space-between">
              <Col>
                <Row type="flex" align="middle">
                  <PingFangSC size={22} color="#4a4a4a" weight={700}>任务清单</PingFangSC>
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
                    <ListItem title={item.title} content={item.content} />
                  </List.Item>
                )}
              />
            </Row>
          </Card>
          {/* Second Card */}
          <Card
            className="card"
          >
            <Row type="flex" justify="space-between">
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
                    <ListItem2 title={item.title} content={item.content} />
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
  max-width: 1378px;
  margin: auto;

  @media (max-width: 1378px) {
    padding: 15px;
  }
`;

const ListItem = ({ title, content }) => (
  <React.Fragment>
    <Row type="flex" align="middle" style={{ height: 140, borderBottom: 'solid 1px #70707032' }}>
      <img src={mumAndBaby} alt="" style={{ height: 100, width: 70, marginRight: 20 }} />
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
            <OpenBtn start="#63e2b7" end="#9cf3dc" style={{ padding: '3px 15px' }}>
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


const ListItem2 = ({ title, content }) => (
  <React.Fragment>
    <Row type="flex" align="middle" style={{ height: 140, borderBottom: 'solid 1px #70707032' }}>
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
            <OpenBtn start="#63e2b7" end="#9cf3dc" style={{ padding: '3px 15px' }}>
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
