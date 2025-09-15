import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#0f172a" }}
    >
      <div className="container">
        <Link to="/" className="navbar-brand fw-bold text-light">
          🚀 GSAP DocsKu
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="docsDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Docs
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/episode-1" className="dropdown-item">
                    Episode 1: Pengenalan GSAP
                  </Link>
                </li>
                <li>
                  <Link to="/episode-2" className="dropdown-item">
                    Episode 2: Timeline & Control
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
