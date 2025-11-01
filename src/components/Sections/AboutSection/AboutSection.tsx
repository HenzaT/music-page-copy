export default function About() {
  return (
    <section className="about flex-col">
      <div className="about-text-paragraphs banner">
        <p>
          I also play bass in a band called First Swim, as well as a Japanese instrument called the shamisen.
        </p>
        <p>
          Aside from music, I like to code and work on projects (like building this website), and I am also a keen climber.
        </p>
        <p>
          If you're a musician and are looking for inspiration when songwriting, check out another app that I built:
        </p>
        <a href="https://gimme-a-song-75fdbe92334c.herokuapp.com/" target="_blank">
          <span className="weblink">Gimme a Song.</span>
        </a>
        <p>
          It aims to give you the perfect starting point for when you're in need of some inspiration.
        </p>
      </div>
      <h1 className="main-header form-h1">about</h1>
    </section>
  )
}
