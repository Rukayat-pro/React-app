import logo from "./images/logo.svg";
import mockup from "./images/illustration-mockups.svg";
import './App.css';

function App() {
  return (
    <>
      <header>
        <img src={logo} alt="Logo"/>
      </header>

      <main>
        <img src={mockup} alt="Mockup"/>
        <div className="content">
          <h2>Build a community your fans will love</h2>
          <p>There are some instances where people prefer to design the mobile view first before the desktop view. This is because it is very
            to manipulate and work with.So let see how it works.
          </p>
          <button>Register</button>
        </div>
      </main>
      <footer>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
      </footer>
    </>
  );
}

export default App;
