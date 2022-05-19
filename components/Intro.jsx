import style from "../styles/Intro.module.css";
import Image from "next/image";
import img1 from "../public/images/Ba-Na-Hills.jpg";
import img2 from "../public/images/SaiGon.jpg";

function Intro() {
  return (
    <section className={style.container}>
      <article className={style.contain}>
        <header className={style.title}>
          <h5>Luctus vitae.</h5>
          <h1>Utrum ut placerat nec, varius sit amet lacus.</h1>
        </header>

        <figure className={style.figure}>
          <div className={style.innercarousel}>
            <div className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                src={img1}
                alt="Ba-Na-Hill Landscape"
              />
            </div>
            <div className={style.img}>
              <Image
                layout="fill"
                objectFit="cover"
                src={img2}
                alt="Ba-Na-Hill Landscape"
              />
            </div>
          </div>
        </figure>
      </article>
    </section>
  );
}

export default Intro;
