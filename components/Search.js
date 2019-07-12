import React from 'react';
import styled from 'styled-components';
import {
  DatePicker,
  TimePicker,
  Tag as AntdTag,
  Row,
  Col,
  Input,
  Spin,
  Button
} from 'antd';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

import { Content } from './Content';
import CardList from './CardList';

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
  margin-bottom: 1rem;
`;

const Tag = styled(AntdTag)`
  margin: 0.5rem;
`;

const { Search: SearchBar } = Input;

const Search = () => (
  <Query query={USERS_QUERY} ssr={false} notifyOnNetworkStatusChange>
    {({ data, loading, error, refetch }) => {
      console.log(data.users);
      return (
        <Content>
          <Row gutter={16}>
            <Col span={6} style={{ position: 'fixed' }}>
              <Filters>
                <SearchBar placeholder="input search text" />
                <div className="from">
                  <h3>From</h3>
                  <div className="date-time">
                    <DatePicker onChange={refetch} />
                    <TimePicker onChange={refetch} />
                  </div>
                </div>
                <div className="until">
                  <h3>Until</h3>
                  <div className="date-time">
                    <DatePicker onChange={refetch} />
                    <TimePicker onChange={refetch} />
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
                  <Tag>Tag 1</Tag>
                  <Tag>Tag 1</Tag>
                </div>
              </Filters>
              <Button type="primary" onClick={() => refetch()}>
                Search
              </Button>
            </Col>
            <Col span={8} />
            <Col span={16}>
              {loading ? <Spin size="large" /> : null}
              {error ? <p>Error</p> : null}
              {data.users && !loading ? (
                <>
                  <h2>{data.users.length} results found</h2>
                  <CardList results={data.users} />
                </>
              ) : null}
            </Col>
          </Row>
        </Content>
      );
    }}
  </Query>
);

export default Search;
