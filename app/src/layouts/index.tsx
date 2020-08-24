import React from 'react';
import {
  Route,
} from 'react-router';
import {
  Layout,
} from 'antd';

import Header from './Header'
import Content from '@/components/Content';

import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

export default () => {
  return (
    <>
      <Header />
      <Content />
    </>
  );
};
