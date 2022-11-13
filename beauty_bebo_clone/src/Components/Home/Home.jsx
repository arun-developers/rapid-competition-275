import React from 'react';
import Sidebar from './Sidebar_Crousal';
import ShinyBanner from './Shinybanner';
import Hotdeals from './Hotdeals';
import ShinyBanner_II from './Shinybanner_II';
import Categories from './Categories';
import AboutText from './AboutText';
import Footer from '../Footer';
export default function Home() {
    return <>
      <Sidebar/>
      <ShinyBanner size={"90%"} src={'https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg'}/>
      <Hotdeals/>
      <ShinyBanner_II img1={"https://www.beautybebo.com/pub/media/ads/joy_banner.gif"} img2={'https://www.beautybebo.com/pub/media/ads/lotus_banner.gif'} />
      <Categories types={true}/>
      <ShinyBanner size={"90%"} src='https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg'/>
      <Categories types={3}/>
      <ShinyBanner size={"90%"} src={'https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif'}/>
      <AboutText/>
    </>
}