import React from "react";
import "../styles/home.css";
import line from "../assets/line.png";
import {
  FaFacebook,
  FaTwitterSquare,
  FaDiscord,
  FaInstagram,
  FaYoutubeSquare,
  FaTwitch,
} from "react-icons/fa";

const Home = () => {
  return (
    <div>
      <section id="banner">
        <div className="banner-bg"></div>

        <div className="banner-title">
          <h1>console wars</h1>
          <p>ONE STOP FOR ALL YOUR GAMING NEEDS</p>
          <a href="">Get Started</a>
        </div>
      </section>
      <section className="top-rated">
        <div className="top-rated-bg"></div>

        <div className="top-rated-title">
          <p>FIND THE BEST MMOS FOR YOURSELF</p>
          <h1>ONLINE GAMES FOR EVERYONE</h1>

          <img src={line} alt="" />
        </div>

        <div className="top-rated-games">
          <div className="game-one"></div>
          <div className="game-two"></div>
          <div className="game-three"></div>
        </div>
      </section>

      <section className="matches">
        <div className="matches-bg"></div>
        <div className="matches-img"></div>
      </section>

      <section className="contact">
        <div className="contact-title">
          <h1>STAY CONNECTED WITH US</h1>
          <img src={line} alt="" />
        </div>

        <div className="contact-icons">
          <div className="icon">
            <FaFacebook className="social" size={50} />
            <p>FACEBOOK</p>
          </div>
          <div className="icon">
            <FaTwitterSquare className="social" size={50} />
            <p>TWITTER</p>
          </div>
          <div className="icon">
            <FaYoutubeSquare className="social" size={50} />
            <p>YOUTUBE</p>
          </div>
          <div className="icon">
            <FaDiscord className="social" size={50} />
            <p>DISCORD</p>
          </div>
          <div className="icon">
            <FaTwitch className="social" size={50} />
            <p>TWITCH</p>
          </div>
          <div className="icon">
            <FaInstagram className="social" size={50} />
            <p>INSTAGRAM</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
