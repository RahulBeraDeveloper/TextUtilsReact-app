import React from 'react'
import PropTypes from 'prop-types';
function Navbar(props) {
 
    const colorCodes = {
      pink: "#8B1874",
      brown: "#65451F",
      purple: "#461959",
      blue: "#0C356A",
      marron:"#9A3B3B"
    };
  
    const setBackgroundColor = (color) => {
      document.body.style.backgroundColor = colorCodes[color];
    };
  return (
   <>
   
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
              Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link disabled"
                href="#"
                tabIndex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          
        </div>
      </div>
      <div className={`form-check form-switch ${props.mode==='light'?'dark':'light'} `}>
  <input className="form-check-input m-2" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
  <label className="form-check-label " htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
      
        </a>
        <div className='d-flex'>
          <button
            className={`btn btn-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}
            onClick={props.toggleMode}
          >
            {props.mode === 'light' ? 'Dark' : 'Light'} Mode
          </button>
          <button
            className={`btn btn-${props.mode} mx-2`}
            onClick={() => setBackgroundColor('pink')}
          >
            Pink
          </button>
          <button
            className={`btn btn-${props.mode} mx-2`}
            onClick={() => setBackgroundColor('brown')}
          >
            Brown
          </button>
          <button
            className={`btn btn-${props.mode} mx-2`}
            onClick={() => setBackgroundColor('purple')}
          >
            Purple
          </button>
          <button
            className={`btn btn-${props.mode} mx-2`}
            onClick={() => setBackgroundColor('blue')}
          >
            Blue
          </button>
          <button
            className={`btn btn-${props.mode} mx-2`}
            onClick={() => setBackgroundColor('marron')}
          >
            marron
          </button>
        </div>
      </div>
    </nav>
    </nav>
   </>
  )
}
Navbar.protoTypes={
    title:PropTypes.string.isRequired,
    aboutText:PropTypes.string.isRequired
}
Navbar.defaultProps = {
    aboutText: 'about'
  };
  

export default Navbar