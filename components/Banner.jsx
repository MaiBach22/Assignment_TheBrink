import style from "../styles/Banner.module.css";
import Image from "next/image";
import img1 from "../public/images/Ba-Na-Hills.jpg";
import img2 from "../public/images/SaiGon.jpg";

function Banner() {
  return (
    <section id={style.container}>
      <article>
        <figure id={style.banner}>
          <div id={style.img1} className={style.img}>
            <Image
              layout="fill"
              objectFit="cover"
              quality={100}
              src={img1}
              alt="Ba-Na-Hill Landscape"
            />
          </div>
          <div id={style.img2} className={style.img}>
            <Image
              layout="fill"
              objectFit="cover"
              className={style.image}
              src={img2}
              alt="SaiGon Landscape"
            />
          </div>
          <div id={style.img3} className={style.img}>
            <Image
              layout="fill"
              objectFit="cover"
              quality={100}
              src={img1}
              alt="Ba-Na-Hill Landscape"
            />
          </div>
          <div id={style.img4} className={style.img}>
            <Image
              layout="fill"
              objectFit="cover"
              className={style.image}
              src={img2}
              alt="SaiGon Landscape"
            />
          </div>
          <div id={style.img5} className={style.img}>
            <Image
              layout="fill"
              objectFit="cover"
              quality={100}
              src={img1}
              alt="Ba-Na-Hill Landscape"
            />
          </div>
        </figure>
      </article>
    </section>
  );
}

export default Banner;
