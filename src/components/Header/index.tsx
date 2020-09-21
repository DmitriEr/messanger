import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';
import { RootReducer } from '../../interface';

const Header: FunctionComponent = () => {
  const newTitle: string = useSelector((state: RootReducer) =>  state.title.title);
  return (
    <Layout.Header className="header">
      <h1>
        {newTitle}
      </h1>
    </Layout.Header>
  );
};

export default Header;