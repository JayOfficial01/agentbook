import React from "react";
import { BsInstagram, BsDribbble, BsTwitter, BsYoutube } from "react-icons/bs";
import Image from "next/image";

import Logo from "../../public/images/logo.png";
import { footerLinks } from "../../data/footer";
import styles from "./footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer__wrapper}>
      <article className="container">
        <article className={styles.footer__top}>
          <article className={styles.footer__logo__details}>
            <picture className={styles.footer__logo__wrapper}>
              <Image src={Logo} alt="Site logo" />
            </picture>
            <p className={styles.footer__description}>
              Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl
              nunc quam ac sed turpis volutpat. Cursus sed massa non nisi,
              placerat.
            </p>

            <ul className={styles.social__network_wrapper}>
              <li>
                <a href="#">
                  <BsInstagram />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsDribbble />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsTwitter />
                </a>
              </li>
              <li>
                <a href="#">
                  <BsYoutube />
                </a>
              </li>
            </ul>
          </article>

          {footerLinks.map((link, index) => {
            const { heading, links } = link;
            return (
              <article key={index} className={styles.footer__links}>
                <h3 className={styles.link__heading}>{heading}</h3>
                <ul>
                  {links.map((link, index) => {
                    const { url, linkText } = link;
                    return (
                      <li key={index}>
                        <a href={url}>{linkText}</a>
                      </li>
                    );
                  })}
                </ul>
              </article>
            );
          })}
        </article>

        <article className={styles.footer__bottom}>
          <p>2022 Agentbook All Rights Reserved</p>

          <article className={styles.site__rules}>
            <ul>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Cookies Policy</a>
              </li>
            </ul>
          </article>
        </article>
      </article>
    </footer>
  );
}

export default Footer;
