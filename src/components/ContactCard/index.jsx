import { useDispatch, useSelector } from "react-redux";
import styles from "./ContactCard.module.scss";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { memo, useCallback } from "react";
import { changeCurrentActiveChat, changeCurrentChatName } from "../../store/reducers/testimonials";

const ContactCard = ({ name }) => {
  const dispatch = useDispatch();
  const { profilePicture, lastMessage, lastMessageAt } = useSelector(
    (state) => {
      const userContact = state.testimonials.data.find(
        (user) => user.name === name
      );
      const userMessages = userContact.convo.filter(
        (message) => message.user != "download" && message.user != "tip"
      );

      return {
        name: userContact.name,
        profilePicture: userContact.profilePicture,
        lastMessage: userMessages[userMessages.length - 1],
        lastMessageAt: userContact.date,
      };
    }
  );

  const date = new Date(lastMessageAt)

  const handleOnClick = useCallback(() => {
    dispatch(changeCurrentChatName(name));
    dispatch(changeCurrentActiveChat(name));
  }, [dispatch, name]);

  return (
    <div onClick={() => handleOnClick()} className={styles.contact}>
      <img loading="lazy" src={profilePicture} alt={name} />
      <div className={styles.contactMetaData}>
        <h6>{name}</h6>
        <p>
          {lastMessage.user == "local" && (
            <IoCheckmarkDoneSharp style={{ color: "blue" }} />
          )}
          {lastMessage.message}
        </p>
      </div>

      <div className={styles.lastMessaged}>{date.getDate()}/{date.getMonth() + 1}/{date.getFullYear().toString()[2]}{date.getFullYear().toString()[3]}</div>
    </div>
  );
};

export default memo(ContactCard);
