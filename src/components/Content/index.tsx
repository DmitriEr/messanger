import React, { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';

const Content: FunctionComponent = () => {
  const messages = useSelector((state: any) => state.themes);
  const currentTheme = useSelector((state: any) => state.title.title);
  console.log(messages[currentTheme])
  return (
    <Layout.Content className="content">
      {
        messages[currentTheme].map((test: string, index: number) => {
          return (
          <p key={`${test}-${index}`}>{test}</p>
          )
        })
      }
    </Layout.Content>
  );
};

export default Content;