import {
  FaPinterestSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from 'react-icons/fa'
import './index.css'

export default function Footer() {
  return (
    <div className="footer-section">
      <div className="website-footer-logo-name-container">
        <img
          className="footer-website-logo"
          alt="website-footer-logo"
          src="https://res.cloudinary.com/dndtpnlzv/image/upload/v1678439016/Tasty%20Kitchen/website-footer-logo_p7gsbn.png"
        />
        <h1 className="footer-website-name">Tasty Kitchens</h1>
      </div>
      <p className="footer-about-description">
        The only thing we are serious about is food. Contact us on
      </p>
      <div className="social-icons-container">
        <FaPinterestSquare
          className="social-icon"
          color="#ffffff"
          data-testid="pintrest-social-icon"
        />
        <FaInstagram
          className="social-icon"
          color="#ffffff"
          data-testid="instagram-social-icon"
        />
        <FaTwitter
          className="social-icon"
          color="#ffffff"
          data-testid="twitter-social-icon"
        />
        <FaFacebookSquare
          className="social-icon"
          color="#ffffff"
          testid="facebook-social-icon"
        />
      </div>
    </div>
  )
}
