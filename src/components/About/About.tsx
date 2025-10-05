import type { AboutData } from '../../data/aboutData'

interface AboutProps {
  data: AboutData[],
  index: number
}

function About(props: AboutProps) {
  const { data, index } = props
  return (
    <div className="info">
      <p>{data[index].text}</p>
    </div>
  )
}

export default About
