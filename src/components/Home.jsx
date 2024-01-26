import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/me.jpg";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
<<<<<<< HEAD
    animate(0, 1, {
=======
    animate(0, 10, {
>>>>>>> origin/master
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
<<<<<<< HEAD
    animate(0, 5, {
=======
    animate(0, 20, {
>>>>>>> origin/master
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Pushpak Rai
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:pushpakrai1607@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +
              
                <motion.span
                  whileInView={animationClientsCount}
                  ref={clientCount}
                ></motion.span>
    
            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +
               
                  <motion.span
                    ref={projectCount}
                    whileInView={animationProjectsCount}
                  >
<<<<<<< HEAD
                    5
=======
                    10
>>>>>>> origin/master
                  </motion.span>
               
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>mailto:pushpakrai1607@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img className="myImg" src={me} alt="pushpak" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
