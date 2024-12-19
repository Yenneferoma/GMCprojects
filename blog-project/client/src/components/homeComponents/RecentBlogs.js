import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Link } from "react-router-dom";
import styles from "./Recent.module.css";
import SwiperCard from "../common/SwiperCard";
import blogs from "../../lib/data";
import "swiper/css";

const RecentBlogs = () => {
  return (
    <section className="container my-5">
      <h1 className="text-center mb-5">Recent Blogs</h1>
      <div className="row">
        <div className="mb-3">
          <Link to={"/blogs"} className={`btn ${styles.blogs_btn}`}>
            View More...
          </Link>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          navigation
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {blogs.length > 0 &&
            blogs.map((blog) => {
              return (
                <SwiperSlide key={blog.id}>
                  <div style={{ cursor: "pointer" }}>
                    <SwiperCard
                      title={blog.title}
                      content={blog.content}
                      imageUrl={blog.image}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentBlogs;
