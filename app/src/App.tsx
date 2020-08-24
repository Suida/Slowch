import React from 'react';
import {
  BrowserRouter,
} from 'react-router-dom';

import Layout from '@/layouts';

import {
  Menu,
} from 'antd';
import { SyncOutlined } from '@ant-design/icons';

const { Item } = Menu;

export default () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};
