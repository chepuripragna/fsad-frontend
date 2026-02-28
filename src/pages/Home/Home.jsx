import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { statesData } from '../../data/statesData';
import diwali from '../../assets/images/festivals/diwali.jpg';
import architecture from '../../assets/images/culture/architecture.jpg';
import traditions from '../../assets/images/culture/traditions.jpg';
import './Home.css';

const Home = () => {
    const featuredStates = statesData.slice(0, 4);

    return (
        <div className="home-page">
            <div className="home-header">
                <div className="container text-center">
                    <h1 className="home-title">Welcome to InHerit</h1>
                    <p className="home-subtitle">Journey through time and explore the vibrant legacy of India's culture and heritage.</p>
                </div>
            </div>

            <section className="container section-padding">
                <h2 className="section-title">Featured Destinations</h2>
                <div className="grid-4">
                    {featuredStates.map(state => (
                        <Card
                            key={state.id}
                            title={state.name}
                            description={state.description}
                            image={state.image}
                            linkTo={`/states/${state.id}`}
                        />
                    ))}
                </div>
                <div className="text-center mt-4">
                    <Link to="/states" className="btn btn-outline">Explore All States</Link>
                </div>
            </section>

            <section className="culture-preview">
                <div className="container">
                    <h2 className="section-title" style={{ color: 'var(--white)' }}>Immerse in Cultural Practices</h2>
                    <div className="grid-3">
                        <Card title="Festivals" description="Vibrant celebrations that light up the country." image={diwali} linkTo="/culture/festivals" />
                        <Card title="Architecture" description="Intricate designs blending centuries of artistic evolution." image={architecture} linkTo="/culture/architecture" />
                        <Card title="Traditions" description="Living practices handed down through generations." image={traditions} linkTo="/culture/practices" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
