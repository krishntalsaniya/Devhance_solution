import React from 'react'
import ServHero from '../components/ServHero'
import Header from '../components/Header'
import ServOur from '../components/ServOur'
import Industries from '../components/Industries'
import AndroidServ from '../components/AndroidServ'
import ForDev from '../components/ForDev'
import TabSection from '../components/Tabs'
import Process from '../components/Process'
import WhyChoose from '../components/WhyChoose'
import Keen from '../components/Keen'
import Footer from '../components/Footer'

function Web3() {
  return (
    <>
    <Header/>
    <ServHero title="Web3 Development Company" subtitle="" para="Being a leading web3 development company, we craft interactive solutions including AI, NFTs, AI, IoT and Cryptography technologies. With in-depth knowledge in web3 tools, oracles, APIs and Programming languages such as solidity and rust, we serve the best to our valuable clients at an affordable price." bgurl="/images/web3servbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Our Web3 Development Services" rightpara="Our dedicated web3 mobile app developer in Dubai provides end-to-end Web3 services that unlock more business value, increase efficiency, improve customer experience, and develop the latest technology web development platform." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/iot1.png" title="dApps Development" para="As a top web3 development company, we craft next-generation dApps in order to build Web3 projects using programming languages such as Solidity, Rust, Golan and frameworks such as Brownie and Substrate. Our team always specialises in developing the best application with high security, scalability and interoperability."/>

                <AndroidServ icon="/images/iot2.png" title="DeFi Development" para="Being a leading artificial intelligence development company in Dubai, our team offers complete DeFi development and consultancy for Web3. Our dedicated developers are experienced in crafting cutting-edge DeFi solutions such as automated market makers, non-custodial wallets, DeFI dApps and DeFi tokens."/>
                
                <AndroidServ icon="/images/iot3.png" title="Metaverse Development" para="Our team of dedicated developers will craft cutting-edge web3 apps and assets that add genuine commercial value. Being a reliable web3 development company, we create components such as NFT markets, 3D immersive environments, avatars, AR, VR and 3D reconstruction."/>

                <AndroidServ icon="/images/iot4.png" title="NFT Development" para="Devhence Solution is counted on a list of top web3 development companies, which is why we provide bespoke Web3 NFT marketplaces that allow enterprises to control the activities such as NFT live auctions and trading. Our team always provides ready-to-deploy NFT marketplace solutions that businesses can swiftly incorporate into their apps."/>

                <AndroidServ icon="/images/iot5.png" title="Smart Contract Development" para="As a leading web3 game app development company in India, we design highly secure, reliable, and upgradeable smart contracts by strictly following contemporary web3 standards by leveraging web3's open source, composable back ends and public."/>

                <AndroidServ icon="/images/iot6.png" title="Web3 Game Development" para="Having in-depth knowledge of next-generation game development tools Unreal Engine 5 and Unity, our dedicated web3 developers craft new-age games such as the widely popular 'play-to-earn' and NFT-based multiplayer games. Our dedicated team researches trends across the gaming industry to meet evolving development requirements."/>

                {/* <AndroidServ icon="/images/iot7.png" title="IoT Platform Integration" para="Integration of your product across multiple channels with connected devices like point-of-sale systems, sensor gateways, and even social media will give your product a redefined exposure."/>

                <AndroidServ icon="/images/iot8.png" title="IoT Cloud Development" para="Our team provides development services for processing, commanding & analytics cloud services. Prime focus of this service remains intact to secure functionality and facilitate flexibility."/> */}
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/web3banner.png" devtitle="What is Web3?" devstrong="" devpara1="Web3 is a translucent and suitable network that enables people to interact without loss of privacy. It makes the internet more brilliant with the assistance of the power of artificial intelligence and big data. It was built with the assistance of blockchain, which manages the procedure of data collection and management around the web. IoT and AI technology will safeguard this robust data." devpara2="" />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    <Keen/>
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Web3
