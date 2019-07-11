import React from 'react';
import styled from 'styled-components';
import { Row, Col, Avatar, Card as AntdCard, Button, Icon } from 'antd';

const StyledCard = styled(AntdCard)`
  margin-bottom: 1rem;
  border-radius: 1rem;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
    transform: scale(1.001);
  }
  .view-profile {
    margin: 1rem 0;
  }
`;

export const Card = ({ user }) => (
  <StyledCard>
    <Row gutter={32}>
      <Col span={7} style={{ textAlign: 'center' }}>
        <Avatar size={128} icon="user" />
        <p className="view-profile">View Profile & Reviews</p>
        <Button type="primary" style={{ width: '100%' }}>
          Book
        </Button>
      </Col>
      <Col span={17}>
        <h1>{user.name}</h1>
        <p>
          <Icon type="carry-out" theme="filled" /> {user.booked_count} Bookings
          Completed
        </p>
        <p>
          <Icon type="fire" theme="filled" /> {user.age} Years Old
        </p>
        <p>
          <Icon type="star" theme="filled" /> {user.rating}/5
        </p>
        <p>
          Reviews don't lie! Proven and Experienced Elite Mover - worked for the
          best, Gentle Giant Moving Co, among others. I'm fit, safe, reliable,
          efficient, and prepared (dolly's and moving straps). My cargo van is
          an additional $25 an hour. A second helper is usually available upon
          request.
        </p>
      </Col>
    </Row>
  </StyledCard>
);
