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
import Footer from '../components/Footer'

function Blockchain() {
  return (
    <>
    <Header/>
    <ServHero title="Top Blockchain Application Development Company" subtitle="Establishing trust in Digital Platforms" para="Devhence solutions :-  An Industry-Leading Blockchain App Development provider
Explore reliable, Secure, Scalable, and Interoperable Blockchain Solutions services for Blockchain App Development with our solutions based on blockchain technologies that we provide." bgurl="/images/blockchainservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="What do we provide as a leading blockchain app development company?" rightpara="We are a leading AI consulting company in Dubai, providing highly adept engineering services to revamp your blockchain systems. Our developers build blockchain technology that helps you to harvest success from your business operations." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/blockchain1.png" title="Blockchain Game Development" para="Being a top mobile app development company in India, we specialize in enhancing experiences with our expertise in gaming platforms over TRON, Ethereum, EOS, BSC, Matic, Tezos, and Cosmos networks."/>

                <AndroidServ icon="/images/blockchain2.png" title="NFT Development Services" para="Our NFT development services help users to collect, develop, or sell non-fungible tokens built on top blockchain platforms. Traders secure profits by buying and selling NFTs and we provide proficient solutions for the same."/>
                
                <AndroidServ icon="/images/blockchain3.png" title="Blockchain For Decentralized Finance (DeFi)" para="The services that we provide assist people in transforming their lives and business with the future of finance is Decentralized Finance. As a leading blockchain company, we provide robust services for DeFi."/>

                <AndroidServ icon="/images/blockchain4.png" title="Blockchain Smart Contract Development" para="Our Blockchain experts craft smart contracts that are self-executing in nature. The team at Devhence Solution is highly skilled to provide the best blockchain smart contract development and even auditing it."/>

                <AndroidServ icon="/images/blockchain5.png" title="Cryptocurrency Exchange Software Development" para="Cryptocurrency exchange helps you to compete with top global players of crypto. We at Devhence Solution, offer you cryptocurrency exchange software development services as per your needs and requirements."/>

                <AndroidServ icon="/images/blockchain6.png" title="Blockchain MLM Software Development" para="We offer blockchain MLM software development solutions that sort the problems of traditional MLM companies. The blockchain services that we offer for MLM are fabricated with clarity, high transparency."/>

                <AndroidServ icon="/images/blockchain7.png" title="Decentralized Exchange Software Development" para="Integrate transactions that can occur between peer-to-peer users using wallet keys with Decentralized exchanges that use blockchain technology. Being a top blockchain Mobile App Development Company in Chicago, we provide services for the same."/>

                <AndroidServ icon="/images/blockchain8.png" title="DAPP Development" para="Speaking for the future of the blockchain mainstream industry, Dapps is the future for it. Our developers can integrate this technology with your operations and keep you ready and ahead of the competition."/>
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/blockchainbanner.png" devtitle="Blockchain the most promising technology since the internet" devstrong="" devpara1="Expand the horizon of your business with the revolutionizing blockchain technology. At Devhence Solution, we focus on keeping your business operations highly robust, secure, scalable, and globally accessible with our best mobile app development in Saudi Arabia." devpara2="As a leading blockchain app development company our prime focus is to deliver custom decentralized blockchain applications. Our team of expert app developer in India is equipped with the knowledge and skills to deploy tech-driven apps using unparalleled technologies." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Blockchain
