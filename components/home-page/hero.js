import classes from './hero.module.css';
import Image from 'next/image';
const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image 
                    src="/images/site/max.png" 
                    alt="An image showing Max" 
                    width={600} 
                    height={600} 
                />
            </div>
            <h1>Hi, I'm Hoàng Dũng</h1>
            <p>
                I blog about web development - especially frontend frameworks like
                Angular or React.
            </p>
        </section>
    )
  }
  
  export default Hero
  