import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import '../../styles/index.scss';

import HeaderApp from '../Header';
import ContentApp from '../Content';
import FooterApp from '../Footer';
import Sider from '../Sider';

const App: FunctionComponent = () => {
  return (
    <Layout className="wrapper">
      <Sider />
      <Layout className="main">
        <HeaderApp />
        <ContentApp />
        <FooterApp />
      </Layout>
    </Layout>
  )
}

export default App;