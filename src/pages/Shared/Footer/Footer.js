import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="mt-5">
            <footer class="text-center text-lg-start bg-light text-muted">
                <section
                    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
                >
                    <div class="me-5 d-none d-lg-block">
                        <span>Get connected with us on social networks:</span>
                    </div>
                    <div>
                        <Link to="https://www.facebook.com/" class="me-4 text-reset">
                            <i class="fab fa-facebook-f"></i>
                        </Link>
                        <Link to="https://www.twitter.com/" class="me-4 text-reset">
                            <i class="fab fa-twitter"></i>
                        </Link>
                        <Link to="https://www.google.com/" class="me-4 text-reset">
                            <i class="fab fa-google"></i>
                        </Link>
                        <Link to="https://www.instagram.com/" class="me-4 text-reset">
                            <i class="fab fa-instagram"></i>
                        </Link>
                    </div>
                </section>
                <section class="">
                    <div class="container text-center text-md-start mt-5">
                        <div class="row mt-3">
                            <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    <i class="fas fa-gem me-3"></i>Travel Webbed
                                </h6>
                                <p>
                                    Your Dream, Our Responsibility
                                </p>
                            </div>

                            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Useful links
                                </h6>
                                <p>
                                    <Link to="/home" class="text-reset">Home</Link>
                                </p>
                                <p>
                                    <Link to="/services" class="text-reset">Services</Link>
                                </p>
                                <p>
                                    <Link to="/about" class="text-reset">About</Link>
                                </p>
                                <p>
                                    <Link to="/contact" class="text-reset">Contact</Link>
                                </p>
                                <p>
                                    <Link to="/login" class="text-reset">Login/Register</Link>
                                </p>
                            </div>
                            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 class="text-uppercase fw-bold mb-4">
                                    Contact
                                </h6>
                                <p><i class="fas fa-home me-3"></i> Mirpur, Bangladesh</p>
                                <p>
                                    <i class="fas fa-envelope me-3"></i>
                                    contact@travewebbed.com
                                </p>
                                <p><i class="fas fa-phone me-3"></i> + 01 234 567 88</p>
                                <p><i class="fas fa-print me-3"></i> + 01 234 567 89</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div class="text-center p-4">
                    © 2021 Copyright Travel Webbed
                </div>
            </footer>
        </div>
    );
};

export default Footer;