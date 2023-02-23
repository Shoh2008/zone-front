import React, { useEffect } from "react";
import { Block } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getusers } from "../../redux/reducer/users";
import { useNavigate } from "react-router-dom";
import { gettasks } from "../../redux/reducer/tasks";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    tasks: { tasks },
    users: { user },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getusers());
    dispatch(gettasks());
  }, []);

  const reader = () => {
    let msg = new SpeechSynthesisUtterance(user?.about);
    let voicesArray = speechSynthesis.getVoices();
    msg.voice = voicesArray[2];
    speechSynthesis.speak(msg);
  };

  return (
    <Block>
      <div className="box">
        <div className="user">
          <div className="image">
            <div className="first">
              <div className="second">
                <div className="third">
                  <h1>{user?.username?.charAt(0)}</h1>
                </div>
              </div>
            </div>
          </div>
          <div className="line">
            <h1>{user?.username}</h1>
            <h2>{user?.lastname}</h2>
            {user.age ? <h2>I'm {user?.age} years old</h2> : ""}
            {user.address ? (
              <h2>
                <i className="bi bi-signpost-split" /> {user?.address}
              </h2>
            ) : (
              ""
            )}
            {user.email ? (
              <h2>
                <a target="_blank" href={`mailto:${user?.email}`}>
                  <i className="bi bi-mailbox" /> {user?.email}
                </a>
              </h2>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="block">
          <div className="links">
            <a target="_blank" href={`${user?.github}`}>
              <i className="bi bi-github" /> Github
            </a>
            <a target="_blank" href={`${user?.portfolio}`}>
              <i className="bi bi-globe2" /> Portfolio
            </a>
            <button onClick={reader}>Reader</button>
            <button onClick={() => navigate("/editor")}>Edit Profile</button>
          </div>
          {user.about ? (
            <div className="about">
              <h3>{user?.about}</h3>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="box">
        <div className="card" onClick={() => navigate("/posts")}>
          Score
          <h1>{tasks.filter((e) => (e ? e.author === user.username : e)).length * 10}</h1>
        </div>
        <div className="card" onClick={() => navigate("/posts")}>
          Post
          <h1>{tasks.filter((e) => (e ? e.author === user.username : e)).length}</h1>
        </div>
      </div>
    </Block>
  );
};

export default Profile;