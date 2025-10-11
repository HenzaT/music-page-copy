export default function About() {
  return (
    <div className="about flex-col">
      <h1 className="main-header">About</h1>
      <div className="about-text-paragraphs flex-col">
        <p>Aside from music, I like to code and work on projects (like this music portfolio), and I am also a keen climber.</p>
        <p>If you're a musician and are looking for some inspiration when songwriting, check out another app that I built:</p>
        <a href="https://gimme-a-song-75fdbe92334c.herokuapp.com/" target="_blank">
          <span className="weblink">Gimme a Song.</span>
        </a>
        <p>It aims to give you the perfect starting point for when you're in need of some inspiration.</p>
      </div>
    </div>
  )
}
