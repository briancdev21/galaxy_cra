import React from 'react';
import { Row, Col, Icon, Badge } from 'antd';
import PingFangSC from './PingFangSC';
import styled from 'styled-components';

import './Header.css';
import logo from '../assets/images/LOGO.png';

const Header = () => (
  <React.Fragment>
    <div className="container">
      <Row type="flex" justify="space-between" align="middle" className="header">
        <Col>
          <Row type="flex" justify="space-between" align="middle">
            <img src={logo} width={50} alt="" />
            &nbsp;&nbsp;
            <PingFangSC size={24} weight={700} color="#4a4a4a">启儿宝</PingFangSC>
            &nbsp;&nbsp;
            <PingFangSC size={20} weight={700} color="#04b4d4">家庭工作坊</PingFangSC>
          </Row>
        </Col>
        <Col className="icons-list">
          <Row type="flex" align="middle">
            <MenuIconWrapper>
              <Badge count={2} style={{ backgroundColor: '#faad14' }}>
                <Icon type="file-text" style={{ fontSize: '1.5em', color: '#fff' }} />
              </Badge>
            </MenuIconWrapper>
            <MenuIconWrapper>
              <Icon type="bars" style={{ fontSize: '1.5em', color: '#fff' }} />
            </MenuIconWrapper>
            <MenuIconWrapper>
              <Icon type="file-text" style={{ fontSize: '1.5em', color: '#fff' }} />
            </MenuIconWrapper>
            <MenuIconWrapper>
              <Icon type="file-text" style={{ fontSize: '1.5em', color: '#fff' }} />
            </MenuIconWrapper>
          </Row>
        </Col>
      </Row>
    </div>
  </React.Fragment>
)

export default Header;

const MenuIconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #e6e6e6;
  padding: 5px;
  margin: 0 5px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:hover { 
    background-color: #b1b1b1;
  }
`;
