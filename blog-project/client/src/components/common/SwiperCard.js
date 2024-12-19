import { Link, useNavigate } from "react-router-dom";
import styles from "./BlogCard.module.css";

const SwiperCard = ({ title, content, imageUrl }) => {
  const navigate = useNavigate();

  const navigateToBlog = () => {
    navigate(`/blogs/${title}`);
  };

  return (
    <div className="card" style={{ width: "100%" }} onClick={navigateToBlog}>
      <img src={imageUrl} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}.</p>
        <Link to={`/blogs/${title}`} className={`btn ${styles.blogCard_btn}`}>
          Read More...
        </Link>
      </div>
    </div>
  );
};

export default SwiperCard;
