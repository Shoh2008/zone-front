import React, { useEffect } from "react";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getuser } from "../../redux/reducer/users";
import { gettasks } from "../../redux/reducer/tasks";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const Users = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    tasks: { tasks },
    users: { friend },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getuser(id));
    dispatch(gettasks());
  }, []);

  const reader = () => {
    let msg = new SpeechSynthesisUtterance(friend?.about);
    let voicesArray = speechSynthesis.getVoices();
    msg.voice = voicesArray[2];
    speechSynthesis.speak(msg);
  };

  return (
    <Block>
      {friend.id ? (
        <>
          <div className="box">
            <div className="user">
              <div className="image">
                <div className="first">
                  <div className="second">
                    <div className="third">
                      <h1>{friend?.username?.charAt(0)}</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="line">
                <h1>{friend?.username}</h1>
                <h2>{friend?.lastname}</h2>
                {friend.age ? <h2>I'm {friend?.age} years old</h2> : ""}
                {friend.address ? (
                  <h2>
                    <i className="bi bi-signpost-split" /> {friend?.address}
                  </h2>
                ) : (
                  ""
                )}
                {friend.email ? (
                  <h2>
                    <a target="_blank" href={`mailto:${friend?.email}`}>
                      <i className="bi bi-mailbox" /> {friend?.email}
                    </a>
                  </h2>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="block">
              <div className="links">
                <a target="_blank" href={`${friend?.github}`}>
                  <i className="bi bi-github" /> Github
                </a>
                <a target="_blank" href={`${friend?.portfolio}`}>
                  <i className="bi bi-globe2" /> Portfolio
                </a>
                <button onClick={reader}>Reader</button>
              </div>
              {friend.about ? (
                <div className="about">
                  <h3>{friend?.about}</h3>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="box">
            <div className="card" onClick={() => navigate("/posts")}>
              Score
              <h1>{tasks.filter((e) => (e ? e.author === friend.username : e)).length * 10}</h1>
            </div>
            <div className="card" onClick={() => navigate("/posts")}>
              Post
              <h1>{tasks.filter((e) => (e ? e.author === friend.username : e)).length}</h1>
            </div>
          </div>
        </>
      ) : (
        <div className="empty">404 Internal Server Error</div>
      )}
    </Block>
  );
};

export default Users;
