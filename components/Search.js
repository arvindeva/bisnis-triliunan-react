import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import { DatePicker, TimePicker, Tag, Row, Col } from 'antd';

import { Content } from './Content';
import CardList from './CardList';

const Filters = styled.div`
  display: grid;
  grid-gap: 1rem;
  .date-time {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: auto auto;
  }

  .tags {
  }
`;

const { Search: SearchBar } = Input;

const Search = () => (
  <Content>
    <Row gutter={16}>
      <Col span={8}>
        <Filters>
          <SearchBar
            placeholder="input search text"
            onSearch={value => console.log(value)}
          />
          <div className="from">
            <h3>From</h3>
            <div className="date-time">
              <DatePicker />
              <TimePicker />
            </div>
          </div>
          <div className="until">
            <h3>Until</h3>
            <div className="date-time">
              <DatePicker />
              <TimePicker />
            </div>
          </div>
          <h2>Filter Category</h2>
          <div className="tags">
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
            <Tag>Tag 1</Tag>
          </div>
        </Filters>
      </Col>
      <Col span={16}>
        <h1>42 Results Nearby</h1>
        <CardList />
      </Col>
    </Row>
  </Content>
);

export default Search;
