import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title=" The Lean Startup: How Constant Innovation Creates Radically Successful
          Businesses Paperback"
            price={21.96}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC4903850SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90729348"
            title="Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, 
          AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard"
            price={599}
            rating={4}
            image="https://m.media-amazon.com/images/I/71vvXGmdKWL._AC_UY218_.jpg"
          />

          <Product
            id="80892756"
            title="RUNMUS Gaming Headset Xbox One Headset with 7.1 Surround Sound, 
          PS4 Headset with Noise Canceling Mic & LED Light, 
          Compatible with PC, PS4, PS5, Switch, Xbox One Controller"
            price={69.99}
            rating={3}
            image="https://m.media-amazon.com/images/I/61lnzTv2a0L._AC_UY218_.jpg"
          />

          <Product
            id="50567832"
            title="HP Color LaserJet Pro Multifunction M479fdw Wireless Laser Printer with One-Year, 
          Next-Business Day, Onsite Warranty, Works with Alexa (W1A80A)4.6 out"
            price={600}
            rating={4}
            image="https://m.media-amazon.com/images/I/71oZh2MUEBL._AC_UY218_.jpg"
          />
        </div>

        <>
          <div className="footer">
            <small>
              Developed by{" "}
              <span>
                {" "}
                <a href="https://elijah699.github.io/Simple-Portfolio/index.html">
                  devCreed
                </a>{" "}
              </span>
              | &copy; 2021
            </small>
          </div>
        </>
      </div>
    </div>
  );
}

export default Home;
