import { FaUser, FaPhoneAlt } from 'react-icons/fa';
import style from './Contact.module.css';

const Contact = ({ name, number }) => {
  return (
    <div className={style.contactItem}>
      <div className={style.infoGroup}>
        <div className={style.contactInfo}>
          <FaUser /> {name}
        </div>
        <div className={style.contactInfo}>
          <FaPhoneAlt /> {number}
        </div>
      </div>
      <button type="button" className={style.deleteBtn}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
