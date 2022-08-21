import styles from "../../styles/Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
            <div className="row">
                <div className="col-sm-12 col-md-12 col-lg-12">
                    <div className={styles.footerContainer + styles.footerContainer2}>
                        <div className={styles.footerInfo}>
                            <p>
                                <span>CalculeMe</span> &copy; 2022
                            </p>
                        </div>
                        <div className={styles.footerSocial}>
                            <div className={styles.socials}>
                                <li className={styles.social}>
                                    <a className={styles.socialLink} target="_blank" href="https://www.instagram.com/kelvin.spv/" aria-label="Instagram" rel="noopener noreferrer">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg">
                                            <g>
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path fillRule="nonzero" d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6.5-.25a1.25 1.25 0 0 0-2.5 0 1.25 1.25 0 0 0 2.5 0zM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z">
                                                </path>
                                            </g>
                                        </svg>
                                    </a>
                                </li>
                                <li className={styles.social}>
                                    <a className={styles.socialLink} target="_blank" href="https://github.com/Kelvin-Freitas" aria-label="Github" rel="noopener noreferrer">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9 1.4.3 2.6.4 3.8.4 8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1-8.4 1.9-15.9 2.7-22.6 2.7-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1 10.5 0 20-3.4 25.6-6 2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8 0 0 1.6-.5 5-.5 8.1 0 26.4 3.1 56.6 24.1 17.9-5.1 37-7.6 56.1-7.7 19 .1 38.2 2.6 56.1 7.7 30.2-21 48.5-24.1 56.6-24.1 3.4 0 5 .5 5 .5 12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5 1.2 0 2.6-.1 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                                <li className={styles.social}>
                                    <a className={styles.socialLink} target="_blank" href="https://br.linkedin.com/in/kelvin-gomes" aria-label="Linkedin" rel="noopener noreferrer">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="28px" width="28px" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z">
                                            </path>
                                        </svg>
                                    </a>
                                </li>
                            </div>
                            <div className={styles.backToUp}>
                                <a href="#">
                                    <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/61dc34f3623c7b35f3596ee9_icon-backtotop.svg" loading="lazy" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}