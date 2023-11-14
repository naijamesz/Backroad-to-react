/* eslint-disable jsx-a11y/anchor-is-valid */
import aboutImg from '../images/about.jpeg';
import Title from './Title';

const About = () => {
  return (
    <section className='section' id='about'>
      <Title title='about' subTitle='us' />
      <div className='section-center about-center'>
        <div className='about-img'>
          <img src={aboutImg} alt='about images' className='about-photo' />
        </div>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam qui illo dolorem vitae cumque cupiditate
            aperiam sunt, ipsum laboriosam sint repudiandae saepe, sed error rem totam vero, maiores animi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam qui illo dolorem vitae cumque cupiditate
            aperiam sunt, ipsum laboriosam sint repudiandae saepe, sed error rem totam vero, maiores animi?
          </p>
          <a href='#' className='btn'>
            Read more
          </a>
        </article>
      </div>
      <hr style={{ margin: '3rem' }} />
      <div className='section-center about-center'>
        <article className='about-info'>
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam qui illo dolorem vitae cumque cupiditate
            aperiam sunt, ipsum laboriosam sint repudiandae saepe, sed error rem totam vero, maiores animi?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni nam qui illo dolorem vitae cumque cupiditate
            aperiam sunt, ipsum laboriosam sint repudiandae saepe, sed error rem totam vero, maiores animi?
          </p>
          <a href='#' className='btn'>
            Read more
          </a>
        </article>
        <div className='about-img'>
          <img src={aboutImg} alt='about images' className='about-photo' />
        </div>
      </div>
    </section>
  );
};
export default About;
