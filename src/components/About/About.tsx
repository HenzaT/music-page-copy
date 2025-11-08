import type { AboutData } from '../../data/aboutData';
import { useMediaQuery } from 'react-responsive';

interface AboutProps {
  data: AboutData[],
  index: number
}

export default function About({ data, index }: AboutProps) {
  const isMobileAndTabletScreen = useMediaQuery({ query: '(max-width: 1199px)' })

  const mobileLayout = () => (
    <>
      <p>{data[index].text}</p>
      <br />
      <img src="src/assets/aptist/aptist-pic.JPG" alt="aptist-profile-photo" className="aptist-profile-pic" />
      <br />
      <p>{data[index].text2}</p>
      <br />
      <p>{data[index].text3}</p>
    </>
  )

  // desktop+
  const adjacentLayout = () => (
    <div className='info-text flex-row'>
      <img src="src/assets/aptist/aptist-pic.JPG" alt="aptist-profile-photo" className="aptist-profile-pic" />
      <div className="flex-col">
        <p>{data[index].text}</p>
        <br />
        <p>{data[index].text2}</p>
        <br />
        <p>{data[index].text3}</p>
      </div>
    </div>
  )

  return (
    <section className="info">
      {isMobileAndTabletScreen ? mobileLayout() : adjacentLayout()}
    </section>
  )
}
