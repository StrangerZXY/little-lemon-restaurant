import { MdDeliveryDining } from "react-icons/md";
export default function Menu() {
  return (
    <section className="menu">
      <div className="menu-desc">
        <h1 className="title menu-title">This weeks specials!</h1>
        <button className="btn">Online Menu</button>
      </div>
      <div className="cards">
        <div className="card">
          <img
            className="menu-img"
            src={require("../assets/greek-salad.png")}
            alt="greek salad"
          />
          <div className="name-price">
            <p className="item-name">Greek Salad</p>
            <p className="item-price">$12.99</p>
          </div>
          <article className="item-desc">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.{" "}
            </p>
          </article>
          <div className="delivery">
            <p>
              Order a delivery
              <MdDeliveryDining className="md-delivery-icon" />
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="menu-img"
            src={require("../assets/bruchetta.jpg")}
            alt="bruchetta"
          />
          <div className="name-price">
            <p className="item-name">Bruchetta</p>
            <p className="item-price">$5.99</p>
          </div>
          <article className="item-desc">
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.{" "}
            </p>
          </article>
          <div className="delivery">
            <p>
              Order a delivery
              <MdDeliveryDining className="md-delivery-icon" />
            </p>
          </div>
        </div>
        <div className="card">
          <img
            className="menu-img"
            src={require("../assets/lemon-dessert.jpg")}
            alt="lemon-dessert"
          />
          <div className="name-price">
            <p className="item-name">Lemon Dessert</p>
            <p className="item-price">$5.00</p>
          </div>
          <article className="item-desc">
            <p>
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.{" "}
            </p>
          </article>
          <div className="delivery">
            <p>
              Order a delivery
              <MdDeliveryDining className="md-delivery-icon" />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
