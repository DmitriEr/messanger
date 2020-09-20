import React, { FunctionComponent, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Layout, Comment } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const Content: FunctionComponent = () => {
  const messages = useSelector((state: any) => state.themes);
  const currentTheme = useSelector((state: any) => state.title);

  useEffect(() => {
    const currentData = JSON.stringify(messages);
    const currentTitle = JSON.stringify(currentTheme);
    localStorage.setItem('data', currentData);
    localStorage.setItem('title', currentTitle);
  }, [messages, currentTheme]);

  return (
    <Layout.Content className="content">
      {
        messages[currentTheme.title].map((text: string, index: number) => {
          return (
            <Comment
              author={<span>User</span>}
              key={`${text}-${index}`}
              avatar={<BookOutlined className="content__card-avatar"/>}
              className="content__card"
              content={
              <p>
                {text}
              </p>
            }
            />
          )
        })
      }
    </Layout.Content>
  );
};

export default Content;