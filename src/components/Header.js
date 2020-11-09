import React from 'react';

function Header() {
    return (<header className="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark navbar-dark position-relative">
            <a className="navbar-brand" href="/">Frank Carr</a>
            <ul className="social-list list-inline mb-0">
                <li className="list-inline-item">
                    <a href="https://www.facebook.com/profile.php?id=100012400890099" className="fa fa-facebook" rel="noopener">

                    </a>

                    <a href="https://gundamtrooperx?tab=repositories" className="fa fa-github" rel="noopener">

                    </a>
                    
                </li>
            </ul>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">

                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Links
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="https://github.com/gundamtrooperx">Github</a>
                            <a className="dropdown-item" href="https://www.linkedin.com/feed/">LinkedIn</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/">Resume</a>
                        </div>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/">About Me <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Portfolio">Projects and Portfolio</a>
                    </li>
                </ul>
            </div>
        </nav>
    </header>)
}

export default Header