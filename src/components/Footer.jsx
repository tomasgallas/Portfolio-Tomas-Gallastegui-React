// src/components/Footer.jsx
function Footer({ t }) {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="copyright">
          <p>&copy; {currentYear} Tomás Gallastegui. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;