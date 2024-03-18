import Carousel from 'react-bootstrap/Carousel';
import styles from "./bannerCarousel.module.scss";
import BannerImg from "../../assets/Images/banner_img.jpg";

const BannerCarousel = () => {
  return (
    <section className={styles.home_banner}>
      <Carousel>
        {BannerItems.map((item) => {
          return(
            <Carousel.Item key={item.id}>
              <div className={styles.img_section}>
                  <figure className={`ratio`}>
                      <img src={BannerImg} alt="banner_img" />
                  </figure>
              </div>
              <div className={styles.content_section}>
                <Carousel.Caption>
                  <h3 className={styles.main_title}>{item?.title}</h3>
                  <p className={styles.banner_desc}>{item?.subtitle}</p>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          )
        })}
      </Carousel>
    </section>
  );
}

export default BannerCarousel;

const BannerItems = [
  {
    id: 1,
    title: "Trip and Treks",
    subtitle: "Tagline 1",

  },
  {
    id: 2,
    title: "Trip and Treks",
    subtitle: "Tagline 2",
    
  },
  {
    id: 3,
    title: "Trip and Treks",
    subtitle: "Tagline 3",
    
  }
]