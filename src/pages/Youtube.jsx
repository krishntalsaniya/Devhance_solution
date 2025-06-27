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

function Youtube() {
  return (
    <>
    <Header/>
    <ServHero title="YouTube" subtitle="" para="YouTube is a famous video-sharing platform where users can upload short and long videos, watch and share videos. Usually, this platform was developed in 2005. Nowadays, the popularity of this platform is increasing rapidly worldwide. You know that there are billions of active users who upload videos and earn money. Therefore, the demand for video streaming app development services is becoming more popular. If you also want an app like Youtube, you can hire Devhence Solution, a supreme mobile app development company in India.

This amazing platform allows users to upload and share a wide variety of videos, such as music, comedy, vlogs, and many more. Moreover, users can subscribe to the channels of their favorite YouTubers as well as create their own channels and earn money. In simple terms, it is the best way to make money online. As a result, YouTube has become an essential platform for content creators." bgurl="/images/youtubeservbg.jpg" />
      <div className="servour">
        <div className="container">
          <ServOur leftTitle="How Does a YouTube App Work?" rightpara="As we are aware that the YouTube application is an online platform that gives permission to users to watch, upload and share videos. But still, many people have a question: how does this application work? Below is a general idea of how the application works:" />
            <div className="serv-bottom">
                <AndroidServ icon="/images/youtube1.png" title="User Interface" para="The custom mobile app development in India has a user-friendly interface while a home screen shows recommended videos that are based on the user's interest and watching history, preferences as well as subscriptions.
                           "/>

                <AndroidServ icon="/images/youtube2.png" title="Search" para="The users are able to search for videos in a couple of clicks, and the application shows relevant videos based on their searches. It means they can easily search for an interesting topic that they want to watch.
                           "/>
                
                <AndroidServ icon="/images/youtube3.png" title="Video Playback" para="When users choose a video to watch, YouTube starts streaming the video, and they can watch a video in full-screen mode or a smaller window while browsing other videos."/>

                <AndroidServ icon="/images/youtube4.png" title="Video Recommendations" para="Once the video ends, the application recommends other videos based on the user's watch history, preferences, and subscription."/>

                <AndroidServ icon="/images/youtube5.png" title="Uploads" para="Users are able to upload their own videos to the platform, which will be stored on the YouTube servers and made available for other users to watch and share."/>

                <AndroidServ icon="/images/youtube6.png" title="Social Features" para="Users have the opportunity to interact with each other via comments such as liking and sharing. Moreover, they can subscribe to the channels and get notifications when videos are uploaded to the Channel.
                           "/>
 
            </div>
        </div>
    </div>
    <ForDev devbanner="/images/youtubebanner.png" devtitle="What is a YouTube App & Why is it considered a Photo & Video App?" devstrong="" devpara1="YouTube is an application that can run on iOS as well as Android devices. Moreover, it allows users to access the video sharing platform as well as upload their videos and photos. By making vlogs on different topics such as comedy, education, and other things, people can earn money as well as silver, gold, and diamond buttons. In simple terms, to build a convenient and user-friendly app you need to hire mobile app developers in India like youtube for users to watch, search, share, and upload videos on YouTube." devpara2="YouTube always allows users to upload and share their pictures in the form of thumbnails and channel art. On the other hand, many YouTube Creators may use images in their videos as part of their content. Henceforth, this mobile app development services in India is considered a photo and video-sharing app that helps the users to interact with both types of content on the platform." />

    {/* <WhyChoose whytitle="Industries we fuel with Blockchain Technology" whysubtitle="The Blockchain App Development Services that we offer are crafted to power up your business in a decentralized world. We serve our result-driven blockchain app development services to a wide array of industries with their specific components" whycardimg1="/images/wruby1.png" whycardpara1="Ruby on Rails is a clear, logical, simple, lean code base. As a result, it will save time and provide better solutions." whyimgpara1="Development Speed" whycardimg2="/images/wruby2.png"  whycardpara2="Ruby on Rails is localized, so it is a great idea to build a mobile or web application with this framework." whyimgpara2="Localization" whycardimg3="/images/wruby3.png" whycardpara3="Rubi and Rails make it easy to add validations to your application. Henceforth, it is good to use Ruby and Rails for development." whyimgpara3="Validations" whycardimg4="/images/wruby4.png" whycardpara4="Ruby on Rails is enabled with some security measures. If you decide to use it, you follow a secure development process." whyimgpara4="Security"  whycardimg5="/images/wruby5.png" whycardpara5="The Rubi and Rails framework is known for its standards. It means it is an ideal choice for web development." whyimgpara5="Standards" /> */}

    <Process/>
    <Industries />
    {/* <Keen/> */}
    <TabSection/>
    <Footer/>
    </>
  )
}

export default Youtube