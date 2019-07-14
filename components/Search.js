import React from 'react';
import styled from 'styled-components';
import { DatePicker, TimePicker, Row, Col, Input, Spin, Button } from 'antd';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Content } from './Content';
import CardList from './CardList';
import TagList from './TagList';

const USERS_QUERY = gql`
  query {
    users {
      id
      name
      profile_photo
      booked_count
      rating
      verified
      age
    }
  }
`;

const Filters = styled.div`
  display: grid;
  grid-gap: 1rem;
  .date-time {
    display: flex;
    justify-content: space-between;
  }
`;

const { Search: SearchBar } = Input;
const InputGroup = Input.Group;

const Search = () => (
  <Query query={USERS_QUERY} ssr={false} notifyOnNetworkStatusChange>
    {({ data, loading, error, refetch }) => {
      return (
        <Content>
          <Row gutter={16}>
            <Col span={6} style={{ position: 'fixed' }}>
              <Filters>
                <SearchBar placeholder="input search text" />
                <div className="from">
                  <h3>From</h3>
                  <div className="date-time">
                    <InputGroup compact>
                      <DatePicker onChange={refetch} style={{ width: '60%' }} />
                      <TimePicker onChange={refetch} style={{ width: '40%' }} />
                    </InputGroup>
                  </div>
                </div>
                <div className="until">
                  <h3>Until</h3>
                  <div className="date-time">
                    <InputGroup compact>
                      <DatePicker onChange={refetch} style={{ width: '60%' }} />
                      <TimePicker onChange={refetch} style={{ width: '40%' }} />
                    </InputGroup>
                  </div>
                </div>
                <h3>Filter Category</h3>
                <TagList />
                <div className="button-wrapper">
                  <Button type="primary" onClick={() => refetch()}>
                    Search
                  </Button>
                </div>
              </Filters>
            </Col>
            <Col span={8} />
            <Col span={16}>
              {loading ? <Spin size="large" /> : null}
              {error ? <p>Error</p> : null}
              {data.users && !loading ? (
                <CardList results={data.users} />
              ) : null}
            </Col>
          </Row>
        </Content>
      );
    }}
  </Query>
);

export default Search;
