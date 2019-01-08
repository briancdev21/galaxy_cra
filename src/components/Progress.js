import React from 'react';
import { Row, Col } from 'antd';
import PingFangSC from './PingFangSC';
import styled from 'styled-components';

const Progress = ({ percent }) => (
  <React.Fragment>
    <Row type="flex" justify="space-between" align="middle" className="header">
      <Col>
        <BackBar>
          <ForeBar progress={percent} />
        </BackBar>
      </Col>
      <Col style={{ marginLeft: 15 }}>
        <PingFangSC size={18} weight={900} color={'#58d1d0'}>
          {percent}%
        </PingFangSC>
      </Col>
    </Row>
  </React.Fragment>
)

export default Progress;

const ForeBar = styled.div`
  float: left;
  width: ${props => props.progress}%;
  border-radius: 8px;
  height: 100%;
  background: linear-gradient(45deg, #63e2b7 10%, #9cf3dc 90%);
`;

const BackBar = styled.div`
  width: 180px;
  height: 15px;
  border-radius: 8px;
  background-color: #efefef;
`;
