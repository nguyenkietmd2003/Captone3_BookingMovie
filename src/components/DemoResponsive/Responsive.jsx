import React from 'react'
import { ResDesktop, ResMobile, ResTablet } from '../../HOC/responsive'
import ResponsiveTablet from './ResponsiveTablet'
import ResponsiveMobile from './ResponsiveMobile'
import ResponsiveDesktop from './ResponsiveDesktop'

const Responsive = () => {
  return (
    <div>
      <ResDesktop>
        <ResponsiveDesktop/>
      </ResDesktop>
      <ResMobile>
        <ResponsiveMobile/>
      </ResMobile>
      <ResTablet>
        <ResponsiveTablet/>
      </ResTablet>
    </div>
  )
}

export default Responsive