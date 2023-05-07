import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/76905002?v=4"}
          alt="Founder"
        />

        <h2>Pushpak Rai</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/@pushpakrai5303" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="https://www.instagram.com/pushpak_rai_/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/pushpakrai1607/" target={"blank"}>
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
