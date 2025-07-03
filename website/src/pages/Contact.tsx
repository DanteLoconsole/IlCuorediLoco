import React from "react";
import {
    BuildingOffice2Icon,
    EnvelopeIcon,
    PhoneIcon,
} from "@heroicons/react/24/outline";
import "./style/Contact.css";


const Contact: React.FC = () => {
    return (
        <div className="contact">
            <div className="contact-grid">
                {/* Left side with info */}
                <div className="contact-info">
                        <h2 className="contact-title">Contacteer ons</h2>
                        <p className="contact-description">
                            Met vragen over boekingen of het verblijf, contacteer ons gerust.
                        </p>
                        <dl className="contact-details">
                            <div className="contact-detail">
                                <dt className="icon-wrapper">
                                    <span className="sr-only">Address</span>
                                    <BuildingOffice2Icon
                                        aria-hidden="true"
                                        className="contact-icon"
                                    />
                                </dt>
                                <a href="https://maps.app.goo.gl/HpkSJ7sM7pqrXifd6" target="_blank" rel="noreferrer">
                                    <dd>
                                        Via Giuseppe Verdi, 23
                                        <br />
                                        70010 Locorotondo BA, Italië
                                    </dd>
                                </a>
                            </div>
                            <div className="contact-detail">
                                <dt className="icon-wrapper">
                                    <span className="sr-only">Telephone</span>
                                    <PhoneIcon aria-hidden="true" className="contact-icon" />
                                </dt>
                                <dd>
                                    <a href="tel:+32474545777" className="contact-link">
                                        +32 474 54 57 77
                                    </a>
                                </dd>
                            </div>
                            <div className="contact-detail">
                                <dt className="icon-wrapper">
                                    <span className="sr-only">Email</span>
                                    <EnvelopeIcon aria-hidden="true" className="contact-icon" />
                                </dt>
                                <dd>
                                    <a
                                        href="mailto:info@ilcuorediloco.it"
                                        className="contact-link"
                                    >
                                        info@ilcuorediloco.it
                                    </a>
                                </dd>
                            </div>
                        </dl>
                </div>

                 {/*Right side form*/}
                <div className="map-info">
                    <div className="map">
                        <iframe
                            title="Il Cuore di Loco"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.441068955232!2d17.327177476691332!3d40.75232277138754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1346528471ede6f9%3A0x500d81d7fca67efd!2sVia%20Giuseppe%20Verdi%2C%2023%2C%2070010%20Locorotondo%20BA%2C%20Italy!5e0!3m2!1sen!2sbe!4v1750794375581!5m2!1sen!2sbe"
                            loading="lazy"
                            allowFullScreen={true}
                            referrerPolicy="no-referrer-when-downgrade"
                        >
                        </iframe>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
