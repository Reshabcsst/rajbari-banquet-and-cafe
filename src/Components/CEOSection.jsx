import React from 'react';
import CEO from '../Assets/Digital-Partner/CEO.png';

const CEOSection = () => {
    return (
        <section className="ceo-section">
            <div className="ceo-content">
                <div className="ceo-image">
                    <img
                        src={CEO}
                        alt="CEO of Rajbari Banquet and Cafe"
                        className="ceo-img"
                    />
                </div>
                <div className="ceo-message">
                    <h2 className="ceo-title">A Message from Our CEO</h2>
                    <p className="ceo-text">
                        <q>Welcome to Rajbari Banquet and Cafe, where we believe in creating memorable moments and delightful experiences. Our passion for great food, exceptional service, and a welcoming ambiance defines us. Whether you're here for a family gathering, a corporate event, or a casual meal, we promise to make your experience unforgettable.</q>
                    </p>
                    <p className="ceo-name">- Dipanwita Naskar, CEO</p>
                </div>
            </div>
        </section>
    );
};

export default CEOSection;
