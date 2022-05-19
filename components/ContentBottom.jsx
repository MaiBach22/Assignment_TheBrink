import style from "../styles/ContentBottom.module.css";
import Image from "next/image";
import img1 from "../public/images/Ba-Na-Hills.jpg";
import img2 from "../public/images/SaiGon.jpg";
function ContentBottom() {
  return (
    <section className={style.container}>
      <article className={style.content}>
        <header id={style.box1}>
          <h1>Proin enim enim, tincidunt consequat sollicitudin.</h1>
        </header>

        <p id={style.box2}>
          Aliquam vel orci pulvinar, porta velit in, volutpat neque. Nam vel leo
          nec nibh tempus congue. Morbi rhoncus bibendum enim sit amet pulvinar.
          Quisque lobortis commodo nunc, a rhoncus diam aliquam ac. Pellentesque
          non augue ullamcorper arcu facilisis bibendum. Nulla quis tincidunt
          turpis. Sed quis erat arcu.
        </p>
        <figure id={style.img1} className={style.figure}>
          <div className={style.img}>
            <Image
              layout="fill"
              objectFit="cover"
              quality={100}
              src={img1}
              alt="Ba-Na-Hill Landscape"
            />
          </div>
        </figure>

        <p id={style.box4}>
          Phasellus gravida felis quis ex mattis, sed suscipit tellus tincidunt.
          In imperdiet dapibus vehicula. In auctor nec nibh vestibulum ornare.
          Morbi porta, enim hendrerit consectetur ultrices, libero dui ultricies
          libero, vel rutrum sem magna quis augue. Nulla quis magna at lorem
          sodales gravida.
        </p>
        <figure id={style.img2} className={style.figure}>
          <div className={style.img}>
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
      <hr className={style.line} />
    </section>
  );
}

export default ContentBottom;
