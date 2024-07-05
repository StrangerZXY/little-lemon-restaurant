import { GoStarFill } from "react-icons/go";
export default function Testimonials() {
  return (
    <section className="testimonials-parent">
      <p className="testimonials-title">Testimonials</p>
      <div className="testimonials">
        <div className="testimonial">
          <div className="rating">
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="unChecked">
              <GoStarFill />
            </span>
          </div>
          <div className="name-rating">
            <img
              className="reviewer-img"
              src={require("../assets/reviewer1.jpg")}
              alt="reviewer 1"
            />
            <p className="reviewer-name">Evan</p>
          </div>
          <article className="review-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              massa massa, semper sed enim at, faucibus mattis lorem. Donec
              vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit,
              ac iaculis libero lacus non diam.{" "}
            </p>
          </article>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="unChecked">
              <GoStarFill />
            </span>
            <span className="unChecked">
              <GoStarFill />
            </span>
          </div>
          <div className="name-rating">
            <img
              className="reviewer-img"
              src={require("../assets/reviewer2.jpg")}
              alt="reviewer 2"
            />
            <p className="reviewer-name">Maya</p>
          </div>
          <article className="review-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              massa massa, semper sed enim at, faucibus mattis lorem. Donec
              vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit,
              ac iaculis libero lacus non diam.{" "}
            </p>
          </article>
        </div>
        <div className="testimonial">
          <div className="rating">
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
            <span className="checked">
              <GoStarFill />
            </span>
          </div>
          <div className="name-rating">
            <img
              className="reviewer-img"
              src={require("../assets/reviewer3.jpg")}
              alt="reviewer 3"
            />
            <p className="reviewer-name">Nate</p>
          </div>
          <article className="review-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              massa massa, semper sed enim at, faucibus mattis lorem. Donec
              vehicula, leo ut auctor ullamcorper, diam tortor dignissim velit,
              ac iaculis libero lacus non diam.{" "}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
