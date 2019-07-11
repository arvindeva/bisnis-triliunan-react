import React from 'react';
import Link from 'next/link';
import { Input, Select, DatePicker, Button, Icon } from 'antd';

import { Content } from './Content';

const InputGroup = Input.Group;
const { Option } = Select;

const Home = () => (
  <Content>
    <div>
      <InputGroup compact>
        <Select defaultValue="Driver" style={{ width: '20%' }}>
          <Option value="Driver">Driver</Option>
        </Select>
        <Select defaultValue="Jakarta" style={{ width: '20%' }}>
          <Option value="Jakarta">Jakarta</Option>
          <Option value="Bandung">Bandung</Option>
        </Select>
        <DatePicker style={{ width: '25%' }} />
        <DatePicker style={{ width: '25%' }} />
        <Link href="/search">
          <Button style={{ width: '10%' }} type="primary">
            <Icon type="search" />
          </Button>
        </Link>
      </InputGroup>
    </div>
  </Content>
);

export default Home;
