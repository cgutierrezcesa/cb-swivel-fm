
import React, {useState} from 'react'
import "./Hero.css"
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElements'
import {useFlags} from 'launchdarkly-react-client-sdk';
import Flags from "./Flags"




const Hero = () => {



  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover)
  }

  return (
    <HeroContainer id='home'>
      <HeroBg>
        <div className='animated--background'></div>
      </HeroBg>
      <HeroContent className='animate__animated animate__slideInUp'>
      {Flags.enableTutorial.isEnabled() ?  <HeroH1> Transactions Made Easy</HeroH1> :  <HeroH1> YESSSS! </HeroH1>  }
        <HeroP>The way money moves is rapidly evolving. Swivel helps you keep your financial institution ready at every turn.</HeroP>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'               smooth={true} duration={500} spy={true} exact='true' offset={-80}>
            Get Started {hover ? <ArrowForward /> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;