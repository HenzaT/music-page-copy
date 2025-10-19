import About from '../../About/About';
import { about } from '../../../data/aboutData';
// import { useSpring, animated } from '@react-spring/web'

export default function ShamisenSection() {
  // const [ springs, api] = useSpring(() => ({
  //   from: { x: 0 },
  // }));

  // const handleClick = () => {
  //   void api.start({
  //     from: {
  //       x: 0,
  //     },
  //     to: {
  //       x: 100,
  //     },
  //   })
  // }

  return (
    <div className="shamisen-section">
      {/* <animated.div
      onClick={handleClick}
        style={{
          width: 80,
          height: 80,
          background: '#ff6d6d',
          borderRadius: 8,
          ...springs,
        }}
      /> */}
      <div className="banner">
        <div className="main-header-center-align-shamisen">
          <h1 className="main-header shamisen-h1">Shamisen</h1>
        </div>
      </div>
      <About
        data={about}
        index={4}
      />
    </div>
  )
}
