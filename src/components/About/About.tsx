import type { AboutData } from '../../data/aboutData';
import { useInView } from "react-intersection-observer";

interface AboutProps {
  data: AboutData[],
  index: number
}

export default function About({ data, index }: AboutProps) {
  const { ref, inView } = useInView({ threshold: 0.8, triggerOnce: true });

  return (
    <section
      ref={ref}
      className={inView ? "info move-up" : "info off-screen"}
    >
      <p>{data[index].text}</p>
      <br />
      <p>{data[index].text2}</p>
      <br />
      <p>{data[index].text3}</p>
    </section>
  )
}
