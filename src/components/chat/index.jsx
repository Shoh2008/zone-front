import React, { useEffect, useState, useLayoutEffect, useRef } from "react";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { Image } from "antd";
import {
  deleteMessage,
  getMessages,
  sendMessage,
} from "../../redux/reducer/messages";
import { getusers } from "../../redux/reducer/users";

const Chat = () => {
  const [message, setmessage] = useState("");
  const dispatch = useDispatch();
  const box = useRef()
  const {
    users: { user, users },
    messages: { messages },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getMessages());
    setInterval(() => {
      dispatch(getMessages());
    }, 3000);
    dispatch(getusers());
  }, []);

  useLayoutEffect(() => {
    box.current.scrollBy(0, box.current.clientWidth);
  })

  function send() {
    if (message !== "") {
      dispatch(
        sendMessage({
          message: message,
          time: `${new Date().getHours()}:${new Date().getMinutes()}`,
          author_id: user.id,
        })
      );
      setmessage("");
    }
  }

  function removeMessages(item) {
    dispatch(deleteMessage(item));
  }

  return (
    <Block>
      <div className="messages" ref={box}>
        {<Image.PreviewGroup>{messages?.map((item, index) => (
          <div
            key={index}
            className={item.author_id === user?.id ? "line right" : "line left"}
          >
            <div className="message">
              <div className="title">
                <button
                  className="x-delete"
                  style={
                    item.author_id !== user?.id ? { display: "none" } : {}
                  }
                  onClick={() => removeMessages(item)}
                >
                  🔪
                </button>
                <div>{item.time}</div>
                <div>{users.map(e => e.id === item.author_id ? e.username : "")}</div>
              </div>
              {item?.message?.substring(0, 8) === "https://" || item?.message?.substring(0, 10) === "data:image" ? (
                <Image src={item.message} />
              ) : (
                <div className="break">{item.message}</div>
              )}
            </div>
          </div>
        ))}</Image.PreviewGroup>}
      </div>
      <div className="line-bottom">
        <input
          type="text"
          placeholder="Type here to send..."
          value={message}
          onChange={(e) => setmessage(e.target.value)}
        />
        <button onClick={send}>
          <i className="bi bi-telegram"></i>
        </button>
      </div>
    </Block>
  );
};

export default Chat;
