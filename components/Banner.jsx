import style from "../styles/Banner.module.css";
import Image from "next/image";
import img1 from "../public/images/teapot.jpg";
import img2 from "../public/images/valley.jpg";
import img3 from "../public/images/city.jpg";
import img4 from "../public/images/castle.jpg";
import img5 from "../public/images/paris.jpg";
import { useRef, useState, useEffect } from "react";
const { motion } = require("framer-motion");

const images = [img1, img2, img3, img4, img5];

function Banner() {
  // Slider feature
  const [width, setWidth] = useState(0);
  const carousel = useRef(); // pre-render

  // catch the width of current screen
  useEffect(() => {
    //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <section id={style.container}>
      <article>
        <motion.div ref={carousel} className={style.figure}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            id={style.banner}
          >
            <motion.div id={style.img1} className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                src={img1}
                alt="Tea Pot"
                priority="true"
              />
            </motion.div>
            <motion.div id={style.img2} className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                className={style.image}
                src={img2}
                alt="valley"
                placeholder="blur"
              />
            </motion.div>
            <motion.div id={style.img3} className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                src={img3}
                alt="city Landscape"
                placeholder="blur"
              />
            </motion.div>
            <motion.div id={style.img4} className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                className={style.image}
                src={img4}
                alt="castle Landscape"
                placeholder="blur"
              />
            </motion.div>
            <motion.div id={style.img5} className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                src={img5}
                alt="paris Landscape"
                placeholder="blur"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </article>
    </section>
  );
}

export default Banner;
