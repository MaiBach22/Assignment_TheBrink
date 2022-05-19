import style from "../styles/Intro.module.css";
import Image from "next/image";
import img1 from "../public/images/Ba-Na-Hills.jpg";
import img2 from "../public/images/SaiGon.jpg";
import { useRef, useState, useEffect } from "react";

const { motion } = require("framer-motion");

function Intro() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const imgs = [img1, img2];
  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section className={style.container}>
      <article className={style.contain}>
        <header className={style.title}>
          <h5>Luctus vitae.</h5>
          <h1>Utrum ut placerat nec, varius sit amet lacus.</h1>
        </header>

        <motion.div ref={carousel} className={style.figure}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className={style.innercarousel}
          >
            {imgs.map((im, index) => {
              return (
                <motion.div key={index} className={style.img}>
                  <Image
                    layout="fill"
                    objectFit="cover"
                    src={im}
                    alt="Landscape"
                    priority="true"
                  />
                </motion.div>
              );
            })}
            {/* <motion.div className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                src={img1}
                alt="Ba-Na-Hill Landscape"
              />
            </motion.div>
            <motion.div className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                src={img2}
                alt="Ba-Na-Hill Landscape"
              />
            </motion.div> */}
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}

export default Intro;
