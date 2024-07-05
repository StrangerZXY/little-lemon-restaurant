export default function Description() {
  return (
    <>
      <section className="restaurant-desc-parent">
        <div className="restaurant-desc">
          <p className="title">Little Lemon</p>
          <p className="subtitle desc-subtitle">Chicago</p>
          <p className="desc-text desc">
            Little Lemon is owned by two Italian brothers, Mario and Adrian, who
            moved to the United States to pursue their shared dream of owning a
            restaurant.
          </p>
        </div>
        <div className="img-wrapper">
          <div className="double-image">
            {/* <img
            className="desc-img"
            src={require("../assets/restaurant.jpg")}
            alt="Restaurant"
          /> */}
            <img
              src={require("../assets/Mario and Adrian A.jpg")}
              alt="Mario and Adrian"
            />
            <img
              src={require("../assets/Mario and Adrian B.jpg")}
              alt="Mario and Adrian"
            />
          </div>
        </div>
      </section>
    </>
  );
}
