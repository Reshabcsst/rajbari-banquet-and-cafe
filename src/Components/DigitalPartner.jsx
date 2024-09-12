import React from 'react';
import Heading from './Heading';
import TeamMembers from '../DemoData/TeamMembers';

const DigitalPartner = () => {
    return (
        <div className='digital-partner'>
            <Heading title='Our Social Media Team' />
            <section>
                <div className="container">
                    <div className="grid">
                        {TeamMembers.map((member, index) => (
                            <div key={index} className="card">
                                <img
                                    src={member.imgSrc}
                                    alt={`Placeholder image for ${member.name}`}
                                />
                                <h3>{member.name}</h3>
                                <p>{member.role}</p>
                                <div className="social-icons">
                                    {member.social.map((social, i) => (
                                        <a key={i} href={social.link}>
                                            {social.icon}
                                            <span class="tooltip-social">{social.platform}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalPartner;
