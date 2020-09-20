import React, { FunctionComponent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { createTheme } from '../../redux/actions/actions';
import { changeTitle } from '../../redux/actions/actions';

const Sidebar: FunctionComponent = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const currentData = useSelector((state: any) => state.themes);
  // const dispatch = useDispatch();
  // const theme = useSelector((state: RootState) => state.sections.themes);

  const inputHandlerTheme = (event: React.FormEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  }

  const inputKeyboardTheme = (event: any) => {
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
    <Layout.Sider className="sidebar" width="300">
      <div className="sidebar__header">
        <div className="sidebar__user">
          <Avatar size={64} icon={<UserOutlined className="sidebar__user-avatar" />} />      
          <div className="sidebar__user-name">
            <span>David Hill</span>
            <span>online</span>
          </div>
        </div>
      </div>
      <div>
        <input name="theme" value={text} onChange={inputHandlerTheme} onKeyDown={inputKeyboardTheme} />
      </div>
      <div>
        {
          Object.entries(currentData).map((data, index) => {
            const [title] = data;
            return (
              <p key={`${title}-${index}`} data-name={title} onClick={changeTitleHandler}>
                {title}
              </p>
            )
          })
        }
      </div>
    </Layout.Sider>
  );
};

// interface IYourState {
//   newTheme: string[]
// }

// const mapStateToProps = (state: IYourState) => {
//   console.log(state.themes.themes)
//   return {
//     newTheme: state.themes.themes
//   }
// }

// export default connect(mapStateToProps, null)(Sidebar);
export default Sidebar;
