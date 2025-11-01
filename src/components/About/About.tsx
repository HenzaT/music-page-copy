import type { AboutData } from '../../data/aboutData'

interface AboutProps {
  data: AboutData[],
  index: number
}

export default function About(props: AboutProps) {
  const { data, index } = props
  return (
    <section className="info">
      <p>{data[index].text}</p>
      <br />
      <p>{data[index].text2}</p>
      <br />
      <p>{data[index].text3}</p>
    </section>
  )
}
