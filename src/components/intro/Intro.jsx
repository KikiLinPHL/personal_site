import "./intro.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init( textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Software Engineer", "Web Developer"],
    });
  }, []);

  return (
    <div className='intro' id="intro">
        <div className="left">
          <div className="imgContainer">
            <img src="" alt=""/> {/* put your image here */}
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hello world, I'm</h2>
            <h1>Kiki Lin</h1>
            <h3>
              <span ref={textRef}> </span>
            </h3>
          </div>
        </div>
    </div>
  )
}
