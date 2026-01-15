import type { AboutData } from '../../data/aboutData';
import { useMediaQuery } from 'react-responsive';
import { profilePic } from '../../data/discographyData';

interface AboutProps {
  data: AboutData[],
  index: number,
  id: string
}

export default function About({ data, index, id }: AboutProps) {
  const isMobileAndTabletScreen = useMediaQuery({ query: '(max-width: 1199px)' })

  const mobileLayout = () => (
    <>
      <p>{data[index].text}</p>
      <br />
      <img src={profilePic} alt="aptist-profile-photo" className="aptist-profile-pic" />
      <br />
      <p>{data[index].text2}</p>
      <br />
      <p>{data[index].text3}</p>
    </>
  )

  // desktop+
  const adjacentLayout = () => (
    <div className='info-text flex-row'>
      <img src={profilePic} alt="aptist-profile-photo" className="aptist-profile-pic" />
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
    <section className="info" id={id}>
      {isMobileAndTabletScreen ? mobileLayout() : adjacentLayout()}
    </section>
  )
}
