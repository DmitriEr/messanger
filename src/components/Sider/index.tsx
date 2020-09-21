import React, { FunctionComponent, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Avatar, Card } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createTheme } from '../../redux/actions/actions';
import { changeTitle } from '../../redux/actions/actions';
import { useWindowSize } from '../../helper';
import { RootReducer } from '../../interface';

const Sider: FunctionComponent = () => {
  const [text, setText] = useState('');
  const [btn, setBtn] = useState<string>('block');
  const dispatch = useDispatch();
  const number: number = useWindowSize();
  const currentData: any = useSelector((state: RootReducer) => state.themes);

  useEffect(() => {
    if(number >= 400 && btn !== 'block') {
      setBtn('block');
    }
  }, [number, btn])

  const inputHandlerTheme = (event: any) => {
    setText(event.target.value);
  }

  const showTheme = () => {
    const newTheme = {
      title: text,
      message: [],
    }
    if (text.trim().length) {
      dispatch(createTheme(newTheme));
    }
    setText('');
  }

  const changeInputKeyboard = (event: any) => {
    if (event.key === 'Enter') {
      showTheme();
    }
  }

  const changeInputClick = () => {
    showTheme();
  }

  const changeTitleHandler = (event: any) => {
    const title: string = event.target.dataset.name;
    if (title.trim().length) {
      dispatch(changeTitle(title));
    }
  }

  const changeSizeSideBar: () => string = () => {
    if (number >= 800) {
      return '20%';
    } else if (number < 800 && number >= 400) {
      return '40%';
    }
    return '100%';
  }

  const showBtn = () => {
    if (number <= 400) {
      return (
        <button className="sidebar__btn-control" onClick={() => btn === 'block' ? setBtn('none') : setBtn('block')}>Themes</button>
      )
    }
  }

  return (
    <>
      {showBtn()}
        <Layout.Sider className="sidebar" width={changeSizeSideBar()} style={{display: btn}} theme="dark">
        <div className="sidebar__header">
          <div className="sidebar__user">
            <div className="sidebar__user-avatar">
              <Avatar size={64} icon={<UserOutlined />} /> 
            </div>
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
           <button className="sidebar__add-button" onClick={changeInputClick}>Add</button>
        </div>
        <div>
          {
            Object.entries(currentData).map((data: (string | any)[], index: number) => {
              const [title]: string[] = data;
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
    </>
  )
};

export default Sider;
