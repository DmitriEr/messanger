import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Layout } from 'antd';
import { addMessage } from '../../redux/actions/actions';

const Footer: FunctionComponent = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: any) => state.title.title);

  const changeKeyboardTextarea = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const newMessage: string = event.target.value;
      const test: any = {
        title: currentTheme,
        message: newMessage,
      }
      dispatch(addMessage(test));
      setText('');
    }
  }

  const textareaHandlerMessage = (event: any) => {
    setText(event.target.value);
  }

  return (
    <Layout.Footer className="footer">
      <textarea
        className="footer__textarea"
        onKeyDown={changeKeyboardTextarea}
        onChange={textareaHandlerMessage}
        value={text}
      />
      <button className="sidebar__add-button">Send</button>
    </Layout.Footer>
  );
};

export default Footer;