import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, Row, Col, Tabs, List, Icon } from 'antd';
import LinesEllipsis from 'react-lines-ellipsis'
import responsiveHOC from 'react-lines-ellipsis/lib/responsiveHOC';
import { Player, ControlBar, ReplayControl,
  ForwardControl, CurrentTimeDisplay,
  TimeDivider, PlaybackRateMenuButton, VolumeMenuButton
} from 'video-react';
import * as moment from 'moment';

import { Header, Rect, PingFangSC, OpenBtn, RoundRectBtn } from '../components';
import './index.css';
import mumAndBaby from '../assets/images/mumAndBaby.png';
import videopng from '../assets/images/video.png';

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
        <Card className="sidebar-card card">
            <Row type="flex" justify="space-between">
              <Col>
                <Row type="flex" align="middle">
                  <Rect width={30} color="#4a4a4a" />
                  &nbsp;&nbsp;
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
                      gutter: 40, xs: 1, sm: 1, md: 1, lg: 2, xl: 2
                    }}
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <ListItem title={item.title} content={item.content} />
                      </List.Item>
                    )}
                  />
                </TabPane>
                <TabPane tab="目标进度" key="2">
                  <List
                    grid={{
                      gutter: 40, xs: 1, sm: 1, md: 2, lg: 2, xl: 2
                    }}
                    dataSource={data}
                    renderItem={item => (
                      <List.Item>
                        <ListItem title={item.title} content={item.content} />
                      </List.Item>
                    )}
                  />
                </TabPane>
              </Tabs>
            </Row>
          </Card>
          {/* Second Card */}
          <Card
            className="card"
          >
            <Row type="flex" justify="flex-start">
              <Col>
                <Row type="flex" align="middle">
                  <Rect width={30} color="#4a4a4a" />
                  &nbsp;&nbsp;
                  <PingFangSC size={22} color="#4a4a4a" weight={700}>联络簿</PingFangSC>
                </Row>
              </Col>
            </Row>
            <Row>
              <Tabs defaultActiveKey="1" style={{ padding: 10 }} tabBarStyle={{ color: '#cdcdcd', fontFamily: 'PingFangSC', fontWeight: 700 }}>
                <TabPane tab="Homework" key="1">
                  <p>Homework text for that client</p>
                  <div className="pv-md">
                    <div className="icon-list">
                      <MenuIconWrapper>
                        <Icon type="link" style={{ color: '#8590a6', fontSize: '2em' }} />
                      </MenuIconWrapper>
                      <MenuIconWrapper>
                        <Icon type="picture" theme="filled" style={{ color: '#8590a6', fontSize: '1.8em' }} />
                      </MenuIconWrapper>
                      <MenuIconWrapper>
                        <img src={videopng} style={{ width: 40, height: 32 }} alt="" />
                      </MenuIconWrapper>
                      &nbsp;&nbsp;&nbsp;
                      <RoundRectBtn title="心得" active />
                      <RoundRectBtn title="提问" />
                      <RoundRectBtn title="作业" />
                    </div>
                  </div>
                  <div className="pv-md">
                    <Player
                      poster="/assets/poster.png"
                    >
                      <source src="http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4" />
                      <source src="http://mirrorblender.top-ix.org/movies/sintel-1024-surround.mp4" />

                      <ControlBar>
                        <ReplayControl seconds={10} order={1.1} />
                        <ForwardControl seconds={30} order={1.2} />
                        <CurrentTimeDisplay order={4.1} />
                        <TimeDivider order={4.2} />
                        <PlaybackRateMenuButton
                          rates={[5, 2, 1, 0.5, 0.1]}
                          order={7.1}
                        />
                        <VolumeMenuButton disabled />
                      </ControlBar>
                    </Player>
                  </div>
                  <div className="pv-md">
                    <Row type="flex" justify="end">
                      <OpenBtn start="#ff6d93" end="#ffa5bc">
                        <PingFangSC size={20} weight={700} color='#fff'>
                          提交作业
                        </PingFangSC>
                      </OpenBtn>
                    </Row>
                  </div>
                </TabPane>
                <TabPane tab="Interaction w Therapist" key="2">
                  <p>Interaction w Therapist text for that client</p>
                </TabPane>
                <TabPane tab="Community" key="3">
                  <p>Interaction w Therapist text for that client</p>
                </TabPane>
                <TabPane tab="Personal diary" key="4">
                  <p>Interaction w Therapist text for that client</p>
                </TabPane>
              </Tabs>
            </Row>
          </Card>
          {/* Side card */}
          
        </Container>
      </React.Fragment>
    );
  }
}

export default App;

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
    <Row type="flex" align="middle" style={{ height: 140, padding: 15, boxShadow: '0 5px 4px -4px rgba(0, 0, 0, 0.1)' }}>
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

const MenuIconWrapper = styled.div`
  width: 20px;
  height: 30px;
  margin: 0 15px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
