import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        
        <h2>SOHAIL AHMED</h2>
        <p>Motivation is temporary, Discipline last forever .</p>
      </div>
      <aside>
        <h2>Social Media</h2>
        <article>
          <a href="https://youtube.com/SohailAhmd-xq8sx" target={"blank"}>
            
            <AiFillYoutube />
          </a>
          <a href="https://instagram.com/sohailpatel_09_" target={"blank"}>
          
            <AiFillInstagram />
          </a>
          <a href="https://github.com/sohailahmed53" target={"blank"}>
           
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
       
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
