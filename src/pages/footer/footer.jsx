import './footer.css'
import { useInView } from 'react-intersection-observer';

export function Footer(){
    const [ref, inView] = useInView();
    return (
        <section id='footer' >
         
           <h6 id='footerName' ref={ref} className={`${inView?'animate__animated animate__fadeInDown animate__slow':''}`}>Rafe Grigar</h6>
            
            <div id="footerBot">
                <div className='footerItems'>
                    <h2 id='letsWork' className='footerHeads'>lets work together </h2>
                </div>

                <div className='footerItems'>
                    <h2 className='footerHeads'>sitemap </h2>
                    <ul>
                        <li><a href='#hero'>home</a></li>
                        <li><a href='#about'>about</a></li>
                        <li><a href='#portfolio'>portfolio</a></li>
                        <li><a href='#testimonials'>testimonials</a></li>
                        <li><a href='#contact'>contact</a></li>
                    </ul>
                </div>

                <div className='footerItems'>
                    <h2 className='footerHeads'>socials</h2>
                    <ul>
                    <li><a>facebook</a></li>
                    <li><a>twitter</a></li>
                    <li><a>instagram</a></li>
                    <li><a>dribble</a></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}