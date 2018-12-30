import React, { Component } from 'react';
import { Row } from 'antd';
import styled from 'styled-components';

import PingFangSC from './PingFangSC';
import Rect from './Rect';

class RoundRectBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: this.props.active,
    }
  }

  rectBtnHandler = () => {
    const { active } = this.state;
    this.setState({ active: !active });
  }

  render () {
    const { title } = this.props;
    const { active } = this.state;
    return (
      <Container onClick={this.rectBtnHandler} className={active ? 'active': ''}>
        <Row type="flex" justify="space-between" align="middle">
          <Rect width={22} color="#737373" className="rect" />
          &nbsp;
          <PingFangSC className="title" size={20} weight={500} color='#737373'>
            {title}
          </PingFangSC>
        </Row>
      </Container>
    )
  }
}

export default RoundRectBtn;

const Container = styled.div`
  display: inline-block;
  padding: 3px 10px;
  margin: 0 10px;
  border-radius: 16px;
  background: #fff;
  cursor: pointer;
  &.active {
    background: #8590a6;
    color: #fff;
  }
  &.active .rect {
    background-color: #fff;
  }
  &.active .title {
    color: #fff;
  }
`;
