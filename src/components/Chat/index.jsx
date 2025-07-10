import { useCallback } from "react";
import styles from "./Chat.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentChatName } from "../../store/reducers/testimonials";
import classNames from "classnames";
import { RiVideoOnLine } from "react-icons/ri";
import { MdOutlineCall } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import CardPicker from "../CardPicker";

const Chat = () => {
  const { currentChatName, currentChat } = useSelector((state) => {
    return {
      currentChatName: state.testimonials.currentChatName,
      currentChat: state.testimonials.currentChat,
    };
  });
  const dispatch = useDispatch();
  const handleOnClick = useCallback(() => {
    dispatch(changeCurrentChatName(""));
  }, [dispatch]);

  const date = new Date(currentChat.date)
  const months = [
    "Jan",
    "Fev",
    "Mar",
    "Abr",
    "Mai",
    "Jun",
    "Jul",
    "Ago",
    "Set",
    "Out",
    "Nov",
    "Dez"
  ]

  return (
    <div
      className={classNames(
        styles.chat,
        currentChatName === "" ? "" : styles.chatFocus
      )}
    >
      <div className={styles.chatMetaData}>
        <button onClick={() => handleOnClick()}>
          <FaArrowLeft />
        </button>
        <img src={currentChat.profilePicture} alt={`Foto de perfil de ${currentChat.name}`} />

        <h6>{currentChat.name}</h6>

        <RiVideoOnLine />
        <MdOutlineCall />
        <BsThreeDotsVertical />
      </div>

      <div className={styles.chatMessages}>
        <p className={styles.dateMessage}>{months[date.getMonth()]} {date.getDate()}, {date.getFullYear()}</p>
        {currentChat?.convo.map((bubble, index) => <CardPicker key={bubble.user + index} name={bubble.user} time={bubble.sent}>{bubble.message}</CardPicker>)}
      </div>
    </div>
  );
};

export default Chat;
