import React, { useState } from "react";
import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdMessage } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import image from "../../assets/femalImg.svg";

const ContactForm = () => {
  const [name, setName] = useState("meet");
  const [email, setEmail] = useState("mee@test");
  const [text, setText] = useState("nbdsj");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={`${styles.container}`}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<IoCall fontSize="24px" />} />
        </div>
        <Button
          isOutLine={true}
          text="VIA EMAIL FORM"
          icon={<HiOutlineMail fontSize="24px" />}
        />

        <form action="#" onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">text</label>
            <textarea type="text" name="text" rows={20} />
          </div>
          <div style={{ display: "flex", justifyContent: "end" }}>
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{`${name}    ${email}    ${text}`}</div>
        </form>
      </div>
      <div className={styles.contact_Image}>
        <img src={image} alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
