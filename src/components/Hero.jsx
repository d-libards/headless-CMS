import heroImg from '../assets/hero.svg';
function Hero() {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Headless CMS(Contentful)</h1>
          <p>
            A headless CMS (Content Management System) is a backend-only CMS
            designed to manage content and make it available via an API,
            allowing developers to build custom frontends separate from the CMS
            itself.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and a browser" className="img" />
        </div>
      </div>
    </section>
  );
}
export default Hero;
