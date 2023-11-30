import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import { MdCall, MdMessage } from 'react-icons/md';
import {HiMail} from 'react-icons/hi'

export default function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button 
            text= "VIA SUPPORT CHAT"
            icon={<MdMessage/>}
          />
          <Button 
            text="VIA CALL"
            icon={<MdCall/>}
          />
        </div>
        <Button 
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<HiMail/>}
        />

        <form>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text"/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email"/>
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows={8}/>
          </div>
          <div style={{
            display:"flex",
            justifyContent:"end"           
          }}>
            <Button text="SUBMIT" />
          </div>
        </form>

      </div>  
      <div className={styles.contactImage}>
        <img src="/images/Service.svg" alt="contact" />
      </div>
    </section>
  )
}
