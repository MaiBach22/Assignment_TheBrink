import style from "../styles/Intro.module.css"
function Intro() {
  return (
    <section>
        <div className={style.container}>
            <header className={style.title}>
            <h5>Luctus vitae.</h5>
            <h1>Utrum ut placerat nec, varius sit amet lacus.</h1>
            </header>
            <section id={style.slider}>
            <figure className={style.figure}>
                   <img src="https://i.ibb.co/PCRzRx4/Ba-Na-Hills.jpg" alt="Ba-Na-Hill Landscape" />
                   <img src="https://i.ibb.co/gy77BWb/SaiGon.jpg" alt="SaiGon Landscape" />
                   </figure> 
            </section>
            

            
        </div>
    </section>
  )
}

export default Intro