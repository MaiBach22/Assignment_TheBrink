import style from "../styles/Footer.module.css";
import Image from "next/image";
import img1 from "../public/images/Ba-Na-Hills.jpg";
import img2 from "../public/images/SaiGon.jpg";
function Footer() {
  return (
    <section className={style.container}>
      <article className={style.content}>
        <header>
          <h1>Proin enim enim, tincidunt consequat sollicitudin.</h1>
        </header>
        <figure className={style.figure}>
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
              quality={100}
              src={img2}
              alt="SaiGon Landscape"
            />
          </div>
        </figure>
      </article>
    </section>
  );
}

export default Footer;
