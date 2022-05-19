import style from "../styles/Content.module.css";

function Content() {
  return (
    <section className={style.container}>
      <article>
        <header>
          <h1>
            Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
          </h1>
        </header>

        <p>
          Suspendisse tincidunt vulputate ex, a laoreet neque luctus vitae.
          Quisque maximus ante sapien, at pharetra sem sagittis eu. Maecenas
          nibh leo, interdum ac malesuada quis, tempus vel lacus.
        </p>

        <p>
          Aliquam quis velit et nunc scelerisque auctor quis id lacus. Proin sem
          turpis, rutrum ut placerat nec, varius sit amet lacus. Praesent sed
          viverra lorem.
        </p>
      </article>
    </section>
  );
}

export default Content;
