import React from 'react'

function Footer() {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    {/* Company Info */}
                    <div className="col-md-3">
                        <h5>Company Name</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
                    </div>
                    {/* Quick Links */}
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#home" className="text-light">Home</a></li>
                            <li><a href="#about" className="text-light">About</a></li>
                            <li><a href="#services" className="text-light">Services</a></li>
                            <li><a href="#contact" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                    {/* Social Media */}
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <div>
                            <a href="https://facebook.com" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
                            <a href="https://twitter.com" className="text-light me-3"><i className="fab fa-twitter"></i></a>
                            <a href="https://instagram.com" className="text-light me-3"><i className="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com" className="text-light me-3"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    {/* Contact Information */}
                    <div className="col-md-3">
                        <h5>Contact Us</h5>
                        <ul className="list-unstyled">
                            <li><i className="fas fa-envelope me-2"></i>info@company.com</li>
                            <li><i className="fas fa-phone me-2"></i>+123 456 7890</li>
                            <li><i className="fas fa-map-marker-alt me-2"></i>123 Main Street, City, Country</li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; 2024 Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>  
    )

}

export default Footer