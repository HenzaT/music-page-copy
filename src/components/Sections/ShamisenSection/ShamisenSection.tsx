import About from '../../About/About';
import { about } from '../../../data/aboutData';
import { useRef } from 'react';

export default function ShamisenSection() {
  const canvasRef: React.RefObject<HTMLCanvasElement | null> = useRef(null);

  return (
    <div className="shamisen-section">
      <canvas id="background" ref={canvasRef}></canvas>
      <div className="content">
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
    </div>
  )
}
