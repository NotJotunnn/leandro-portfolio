import styles from "./PhoneMainPage.module.scss";

import classNames from "classnames";
import ContactCard from "../ContactCard";
import { IoNotificationsOffOutline, IoSearch } from "react-icons/io5";
import { MdOutlineSignalWifi4Bar } from "react-icons/md";
import { FaSignal } from "react-icons/fa";
import { RiBatteryChargeFill } from "react-icons/ri";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const PhoneMainPage = () => {
  const { contacts, currentChatName } = useSelector((state) => {
    return {
      contacts: state.testimonials.data,
      currentChatName: state.testimonials.currentChatName,
    };
  });
  const date = new Date();

  const [search, setSearch] = useState("");
  const [filteredContacts, setFilteredContacts] = useState();

  useEffect(() => {
    setFilteredContacts(
      contacts.filter((contact) =>
        contact.name.toLowerCase().includes(search.toLocaleLowerCase())
      )
    );
  }, [search, contacts]);
  
  return (
    <>
      <div className={styles.cellphoneMetaData}>
        <p className={styles.time}>{`${date
          .getHours()
          .toString()
          .padStart(2, "0")}:${date
          .getMinutes()
          .toString()
          .padStart(2, "0")}`}</p>
        <IoNotificationsOffOutline className={styles.notificationOff} />
        <FaSignal className={styles.mobileData} />
        <MdOutlineSignalWifi4Bar className={styles.internetSignal} />
        <RiBatteryChargeFill className={styles.batteryCharge} />
        <p>100%</p>
      </div>

      <div
        className={classNames(
          styles.allContacts,
          currentChatName === "" ? "" : styles.chatFocus
        )}
      >
        <h5>WhatsApp</h5>
        <div className={styles.content}>
          <div className={styles.searchBar}>
            <IoSearch />
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className={styles.contactList}>
            {filteredContacts &&
              filteredContacts.map((contact, index) => (
                <ContactCard key={contact.name + index} name={contact.name} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneMainPage;
