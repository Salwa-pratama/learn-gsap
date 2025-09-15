const Footer = () => {
  return (
    <footer
      className="text-center py-3 mt-auto"
      style={{ backgroundColor: "#1e293b" }}
    >
      <p className="mb-0 text-light">
        © {new Date().getFullYear()} Dokumentasi GSAP by Kamu | Dibuat dengan ❤️
        & Bootstrap
      </p>
    </footer>
  );
};

export default Footer;
