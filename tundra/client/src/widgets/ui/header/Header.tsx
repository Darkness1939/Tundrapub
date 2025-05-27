import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="CLASS__NAME">
      <div className="CLASS__NAME" id='abs'>

        <p id='tuda'>𝙏𝙪𝙣𝙙𝙧𝙖𝙋𝙪𝙗</p>
        
        <Link to="/" className="CLASS__NAME">
          Menu
        </Link>

        <nav className="CLASS__NAME">
        <Link to="/registration" className="CLASS__NAME" id='regword'>
            Register
          </Link>
        </nav>

        <nav>
        <Link to="/login" className="CLASS__NAME" id='logword'>
            Login
          </Link>
        </nav>
        <nav>
        <Link to="/reviews" className="CLASS__NAME" id='reviews'>
          Create review
          </Link>
        </nav>
      </div>
    </header>
  );
};