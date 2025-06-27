
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop';
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Tellme from './pages/Tellme'
import Tips from './pages/Tips'
import SocialMedia from './pages/SocialMedia'
import Get from './pages/Get'
import BlogPage from './pages/BlogPage'
import Andriod from './pages/Andriod'
import ReactNative from './pages/ReactNative'
import Hybrid from './pages/Hybrid'
import Iphone from './pages/Iphone'
import Flutter from './pages/Flutter'
import Werable from './pages/Werable'
import Php from './pages/Php'
import Angular from './pages/Angular'
import Ecommerce from './pages/Ecommerce'
import Java from './pages/Java'
import Ruby from './pages/Ruby'
import Blockchain from './pages/Blockchain'
import Aiml from './pages/Aiml'
import Pos from './pages/Pos'
import Arvr from './pages/Arvr'
import Iot from './pages/Iot'
import Web3 from './pages/Web3'
import Webdesign from './pages/Webdesign'
import WebDevelopment from './pages/WebDevelopment'
import Ott from './pages/Ott'
import Grocery from './pages/Grocery'
import Salon from './pages/Salon'
import GYM from './pages/Gym'
import Livecricket from './pages/Livecricket'
import Logistics from './pages/Logistics'
import Healthcare from './pages/Healthcare'
import FoodDelivery from './pages/FoodDelivery'
import Realestate from './pages/Realestate'
import Dating from './pages/Dating'
import Onlyfans from './pages/Onlyfans'
import Livevideo from './pages/Livevideo'
import Uber from './pages/Uber'
import Enterprise from './pages/Enterprise'
import Education from './pages/Education'
import Taxi from './pages/Taxi'
import Ewallet from './pages/Ewallet'
import Handyman from './pages/Handyman'
import Escooter from './pages/Escooter'
import Betting from './pages/Betting'
import Gpay from './pages/Gpay'
import Youtube from './pages/Youtube'
import Metamask from './pages/Metamask'
import Walemart from './pages/Walemart'
import Sofascore from './pages/Sofascore'
import Doctor from './pages/Doctor'
import Bookmyshow from './pages/Bookmyshow'

function App() {

  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          {/* <Route path='/tell' element={<Tellme/>}></Route>
          <Route path='/tips' element={<Tips/>}></Route>
          <Route path='/social' element={<SocialMedia/>}></Route>
          <Route path='/get' element={<Get/>}></Route>
          <Route path='/blogs' element={<BlogPage/>}></Route> */}
          <Route path='/android' element={<Andriod/>}></Route>
          <Route path='/react-native' element={<ReactNative/>}></Route>
          <Route path='/hybrid-app' element={<Hybrid/>}></Route>
          <Route path='/iphone' element={<Iphone/>}></Route>
          <Route path='/flutter' element={<Flutter/>}></Route>
          <Route path='/wearable' element={<Werable/>}></Route>
          <Route path='/php' element={<Php/>}></Route>
          <Route path='/angular' element={<Angular/>}></Route>
          <Route path='/ecommerce' element={<Ecommerce/>}></Route>
          <Route path='/java' element={<Java/>}></Route>
          <Route path='/ruby' element={<Ruby/>}></Route>
          <Route path='/blockchain' element={<Blockchain/>}></Route>
          <Route path='/aiml' element={<Aiml/>}></Route>
          <Route path='/pos' element={<Pos/>}></Route>
          <Route path='/arvr' element={<Arvr/>}></Route>
          <Route path='/iot' element={<Iot/>}></Route>
          <Route path='/web3' element={<Web3/>}></Route>
          <Route path='/Webdesign' element={<Webdesign/>}></Route>
          <Route path='/Webdevelopment' element={<WebDevelopment/>}></Route>
          <Route path='/ott' element={<Ott/>}></Route>
          <Route path='/grocery' element={<Grocery/>}></Route>
          <Route path='/salon' element={<Salon/>}></Route>
          <Route path='/fitness' element={<GYM/>}></Route>
          <Route path='/live-cricket' element={<Livecricket/>}></Route>
          <Route path='/logistics' element={<Logistics/>}></Route>
          <Route path='/healthcare' element={<Healthcare/>}></Route>
          <Route path='/food-delivery' element={<FoodDelivery/>}></Route>
          <Route path='/realestate' element={<Realestate/>}></Route>
          <Route path='/dating' element={<Dating/>}></Route>
          <Route path='/onlyfans' element={<Onlyfans/>}></Route>
          <Route path='/livevideo' element={<Livevideo/>}></Route>
          <Route path='/uber' element={<Uber/>}></Route>
          <Route path='/enterprise' element={<Enterprise/>}></Route>
          <Route path='/education' element={<Education/>}></Route>
          <Route path='/taxi' element={<Taxi/>}></Route>
          <Route path='/Ewallet' element={<Ewallet/>}></Route>
          <Route path='/handyman' element={<Handyman/>}></Route>
          <Route path='/Escooter' element={<Escooter/>}></Route>
          <Route path='/Betting' element={<Betting/>}></Route>
          <Route path='/Google-pay' element={<Gpay/>}></Route>
          <Route path='/Youtube' element={<Youtube/>}></Route>
          <Route path='/Metamask' element={<Metamask/>}></Route>
          <Route path='/Walemart' element={<Walemart/>}></Route>
          <Route path='/Sofascore' element={<Sofascore/>}></Route>
          <Route path='/Doctor' element={<Doctor/>}></Route>
          <Route path='/Bookmyshow' element={<Bookmyshow/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
