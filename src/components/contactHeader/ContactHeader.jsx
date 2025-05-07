import React from "react";
import styles from "./ContactHeader.module.css";

const ContactHeader = () => {
  console.log(styles, "----------");
  return (
    <div className={`${styles.contact_section}`}>
      <h1>Contact Header</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore,
        dolore, ad fuga dicta vero illum laborum tempora qui nostrum iure eaque?
        Blanditiis quia eos mollitia? Quae distinctio quo voluptatum suscipit?
      </p>
    </div>
  );
};

export default ContactHeader;
