import React from 'react'

const Footer = () => {
    return (
        <div className="footer">
            <p>
                The information and images presented on this site about Magic: The Gathering is copyrighted by Wizards of the Coast LLC, and their logos are trademarks of Wizards of the Coast LLC (a subsidiary of Hasbro, Inc.). All rights reserved. This website is for demo purposes only and does not sell any product, nor is it produced, endorsed, supported, or affiliated with Wizards of the Coast LLC.
            </p>
            <div className="footer-pers">
                <a href="https://bensonlei.com" target="_blank" rel="noopener noreferrer">
                    © BENSON LEI 2021 |
                </a>
                <div className="footer-links">
                    <a href="https://github.com/jmtblei" target="_blank" rel="noopener noreferrer">
                        <div className="footer-icons">
                            <i class="fab fa-github"></i>
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/jmtblei/" target="_blank" rel="noopener noreferrer">
                        <div className="footer-icons">
                            <i class="fab fa-linkedin"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer
