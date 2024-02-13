import './portfolio.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react"; 
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from 'react';

export function Portfolio(){
    const isMobile = window.innerWidth <= 1024;
    gsap.registerPlugin(ScrollTrigger);

       if(isMobile){
        useGSAP(() => {
            gsap.to(".images", { y:15,ease: "power1.in",stagger:0.1,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }else{
        useGSAP(() => {
            gsap.to(".images", { y:40,ease: "power1.in",delay:0.1,stagger:0.2,scrollTrigger: {
                trigger: "#portfolio",
                
              }});
          })
       }

    
    return (
        <section id="portfolio">
            <h2>Selected projects</h2>
           
            <div id='' className='portfolioCont'>
                <h2>portrait</h2>
                <div className='imgCont'>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/5607a923e4b02ca27d321d51/1601004110095-9LHJYXPGVYT4SG44M0D4/Miwa-200904-98_websize.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://expertphotography.b-cdn.net/wp-content/uploads/2019/04/female-face-girl-with-wind-in-hair.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://images.squarespace-cdn.com/content/v1/56dfd5cc9f7266ed7f04b64d/1585743025040-GY3HNPD08I794TTR7O1M/image-asset.jpeg'/>
                </div>
                </div>
            </div>

            <div className='portfolioCont'>
            <h2>landscapes </h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/blogs/18725/images/mM87l2ZsQRSawMLLRlFF_FallLandscape7-.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://cff2.earth.com/uploads/2022/11/08110007/Mountain-landscapes2-scaled.jpg'/>
                </div>
            </div>
            </div>

            <div className='portfolioCont'>
            <h2>modelling</h2>
            <div className='imgCont'>
            <div className='images'>
                    <img src='https://hips.hearstapps.com/hmg-prod/images/naomi-campbell-walks-the-runway-during-the-kenneth-ize-show-news-photo-1594416814.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://i.pinimg.com/736x/1c/8c/21/1c8c2109e066c7c8c3227444bc463112.jpg'/>
                </div>
                <div className='images'>
                    <img src='https://mediaslide-europe.storage.googleapis.com/immmodels/pictures/1937/7631/profile-1697551002-8f65e75bb7b88061526d0aaa22efa765.jpg'/>
                </div>
            </div>
            </div>
        </section>
    )
}