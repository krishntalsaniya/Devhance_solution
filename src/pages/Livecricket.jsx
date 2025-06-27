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

function Livecricket() {
  return (
    <>
    <Header/>
    <ServHero title="Live Cricket Score
Application Development Company" subtitle="" para="Looking for Expert Live Cricket Score Mobile App Development in Houston? Devhence Solution Offers a revolutionary Live Cricket Score App Development solution for Cricket Enthusiasts. Our app will break all linguistic barriers and offer real-time updates in various languages that cover the globe's cricketing regions." bgurl="/images/LiveCricketservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="Trending Features We Cover in Live Cricket Score App" rightpara="We offer Live Cricket Score App Development in India that has cool features to keep the thrill of the game alive on the go and help the business to drive operations and expand exponentially." />
            <div className="serv-bottom">
                <AndroidServ icon="/images/cricket1.png" title="Participate in Polls" para="
We integrate a polls feature to enhance the fun level of the app & user experience. Users can join the polls and predict the winners or scores. There will be polls of all recent and upcoming matches."/>

                <AndroidServ icon="/images/cricket2.png" title="Live Commentary" para="
You can enjoy the match with live commentary. Therefore, this feature shows sports fans live commentary on every moment of the match so that fans can enjoy the innings on the go."/>
                
                <AndroidServ icon="/images/cricket3.png" title="Current and Upcoming Matches" para="
Users can review the schedule for all upcoming and current matches. They also get notifications and alerts for upcoming and live matches. This ensures users don’t miss out on any single match."/>

                <AndroidServ icon="/images/cricket4.png" title="Cryptocurrency Enabled" para="
We introduce advanced payment mechanisms via blockchain technology integration. This innovative move will open up new possibilities for users to experience seamless and secure transactions while they watch and enjoy live cricket matches."/>

                <AndroidServ icon="/images/cricket5.png" title="Multiple Sports & Leagues" para="
We wrap all the primary and small cricket leagues and matches, such as ODI, T20, IPL, and Test international, women's matches, and Domestic. This helps you attract more users to the app and entertain them."/>

                <AndroidServ icon="/images/cricket6.png" title="Live Chat" para="
We deliver an outstanding user experience by including exciting features such as live chat. Users can chat with other users or friends in live chat while enjoying live cricket match updates."/>

                {/* <AndroidServ icon="/images/ott7.png" title="Optimal Performance" para="We optimize & enhance the performance of the TV streaming app to ensure that the OTT app is running smoothly and offers a seamless experience to users."/>

                <AndroidServ icon="/images/ott8.png" title="OTT App Maintainence and Support" para="Devhence Solution offers a wide varsity of maintenance and support options that go beyond app deployment. When it comes to app, we are more than business."/> */}
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/cricketbanner.png" devtitle="Grab Robust, Interactive & Secure Custom Live Cricket Score App Development Services" devstrong="" devpara1=" a globally recognized software development company, offers state-of-the-art custom live cricket score app development solutions in Kuwait that are highly optimized and user-friendly." devpara2="With an immersive user interface and real-time live updates, our App Developers in San Francisco provides fans with instant access to schedules, match scores, player stats, team rankings, and much more. Devhence Solution , the premier mobile app development company in Dubai UAE, specializes in creating customized apps tailored to specific business needs, including integrating brand logos, colors, and additional features such as in-app purchases or push notifications for important game updates." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Livecricket
