// import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar_Crousal';
import ShinyBanner from './Components/Shinybanner';
import Hotdeals from './Components/Hotdeals';
import ShinyBanner_II from './Components/Shinybanner_II';
import Categories from './Components/Categories';
import AboutText from './Components/AboutText';

function App() {
  return (
    <div className="App">
       <Sidebar/>
       <ShinyBanner src="https://www.beautybebo.com/pub/media/ads/Blue_heaven_Forent_3-min.jpg"/>
       <Hotdeals/>
       <ShinyBanner_II/>
       <ShinyBanner/>
       <Categories/>
       <ShinyBanner src={'https://www.beautybebo.com/pub/media/ads/Forent_Banner_5-min.jpg'}/> 
       <Categories/>
       <ShinyBanner src={"https://www.beautybebo.com/pub/media/ads/1599-Forent-banner-4.gif"}/> 
      <AboutText/>
    </div>
  );
}

export default App;
