import React, { FunctionComponent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; 
import { Layout } from 'antd';
import { addMessage } from '../../redux/actions/actions';
import { RootReducer } from '../../interface';

const Footer: FunctionComponent = () => {
  const [text, setText] = useState<string>('');
  const dispatch = useDispatch();
  const currentTheme: string = useSelector((state: RootReducer) => state.title.title);

  const showMessage = () => {
    const currentMessage: any = {
      title: currentTheme,
      message: text,
    }
    if (text.trim().length) {
      dispatch(addMessage(currentMessage));
    }
    setText('');
  }

  const changeKeyboardTextarea = (event: any) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      showMessage();
    }
  }

  const changeClick = () => {
    showMessage();
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
      <button className="sidebar__add-button" onClick={changeClick}>Send</button>
    </Layout.Footer>
  );
};

export default Footer;