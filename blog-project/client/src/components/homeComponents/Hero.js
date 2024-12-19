import { Link } from "react-router-dom";
import heroImage from "../../assets/blog-image.png";
import styles from "./Home.module.css";

const Hero = () => {
  return (
    <section className={`container ${styles.hero_container}`}>
      <div className="row">
        <div className="col-md-6 mb-5">
          <img src={heroImage} className={styles.hero_image} />
        </div>
        <div className="col-md-6">
          <div>
            <h3>About Us</h3>
          </div>
          <p>
            Blog Client is a CMS and blogging platform designed to offer an
            exceptional writing experience. With its simple and modern
            interface, it prioritizes writers and content creators who value a
            streamlined, distraction-free environment. Whether you're a personal
            blogger, journalist, or part of a publication team, Blog Client
            provides the tools you need to focus on what matters most—your
            content.
          </p>
          <p>
            Experience the joy of effortless content creation with features like
            real-time previews, built-in SEO tools, and seamless publishing
            workflows. Blog Client ensures your voice reaches the audience it
            deserves, in a professional and polished manner.
          </p>
          <p>
            Whether you're starting your first blog or running a high-traffic
            publication, Blog Client adapts to your needs. With flexible
            customization options, mobile-friendly editing, and support for
            modern web technologies, it's the perfect platform for today's
            writers and publishers.
          </p>
          <p>
            Blog Client adapts to your needs. With flexible customization
            options, mobile-friendly editing, and support for modern web
            technologies, it's the perfect platform for today's writers,
            bloggers, content creators, designers, and publishers.
          </p>

          <div>
            <Link className={`btn ${styles.about_btn}`} to={"/about"}>
              Read More....
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
