import React, { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createTheme } from '../../redux/actions/actions';
import { changeTitle } from '../../redux/actions/actions';

const Sidebar: FunctionComponent = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const currentData = useSelector((state: any) => state.themes);

  const inputHandlerTheme = (event: any) => {
    setText(event.target.value);
  }

  const changeInputKeyboard = (event: any) => {
    if (event.key === 'Enter') {
      const newTitle: string = event.target.value;
      const newTheme = {
        title: newTitle,
        message: [],
      }
      dispatch(createTheme(newTheme));
      setText('');
    }
  }

  const changeTitleHandler = (event: any) => {
    const title = event.target.dataset.name;
    dispatch(changeTitle(title));
  }

  return (
    <Layout.Sider className="sidebar" width="20%" theme="dark">
      <div className="sidebar__header">
        <div className="sidebar__user">
          <Avatar size={64} icon={<UserOutlined className="sidebar__user-avatar" />} />      
          <div className="sidebar__user-name">
            <span>User</span>
          </div>
        </div>
      </div>
      <div className="sidebar__add">
        <input
          name="theme"
          className="sidebar__add-input"
          placeholder="Add new theme"
          autoComplete="off"
          onChange={inputHandlerTheme}
          onKeyDown={changeInputKeyboard}
          value={text}
        />
         <button className="sidebar__add-button">Add</button>
      </div>
      <div>
        {
          Object.entries(currentData).map((data, index) => {
            const [title] = data;
            return (
              <Card key={`${title}-${index}`} size="small" className="sidebar__card">
                <p data-name={title} onClick={changeTitleHandler} className="sidebar__card-title">
                  {title}
                </p>
              </Card>
            )
          })
        }
      </div>
    </Layout.Sider>
  );
};

export default Sidebar;
