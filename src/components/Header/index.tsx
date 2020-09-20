import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';

const Header: FunctionComponent = () => {
  const newTitle = useSelector((state: any) =>  state.title.title);
  return (
    <Layout.Header className="header">
      <h1>
        {newTitle}
      </h1>
    </Layout.Header>
  );
};

export default Header;