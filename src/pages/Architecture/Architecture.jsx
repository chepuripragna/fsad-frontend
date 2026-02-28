import React from 'react';
import Tabs from '../../components/Tabs/Tabs';
import defaultImage from '../../assets/images/default/placeholder.jpg';
import dravidianImg from '../../assets/images/culture/architecture.jpg';
import nagaraImg from '../../assets/images/monuments/generic-1.jpg';
import indoIslamicImg from '../../assets/images/monuments/charminar.jpg';
import '../CulturalPractices/CulturalLayout.css';

const Architecture = () => {
    const architectureTabs = [
        {
            label: "Dravidian",
            content: (
                <div className="tab-pane">
                    <h3>Dravidian Architecture</h3>
                    <img
                        src={dravidianImg || defaultImage}
                        alt="Dravidian"
                        className="tab-img"
                        onError={(e) => { e.target.src = defaultImage }}
                    />
                    <p>Originating in South India, this style is characterized by its pyramid-shaped towers called Vimanas, massive gateway towers known as Gopurams, and pillared halls. Examples include the Brihadeeswara Temple and Meenakshi Temple.</p>
                </div>
            )
        },
        {
            label: "Nagara",
            content: (
                <div className="tab-pane">
                    <h3>Nagara Architecture</h3>
                    <img
                        src={nagaraImg || defaultImage}
                        alt="Nagara"
                        className="tab-img"
                        onError={(e) => { e.target.src = defaultImage }}
                    />
                    <p>Prevalent in North India, Nagara style features a beehive-shaped tower (Shikhara) over the sanctuary. The temples are usually built on a raised platform. Famous examples include the Khajuraho temples.</p>
                </div>
            )
        },
        {
            label: "Indo-Islamic",
            content: (
                <div className="tab-pane">
                    <h3>Indo-Islamic Architecture</h3>
                    <img
                        src={indoIslamicImg || defaultImage}
                        alt="Indo-Islamic"
                        className="tab-img"
                        onError={(e) => { e.target.src = defaultImage }}
                    />
                    <p>This style emerged after the Islamic conquests in India, synthesizing indigenous styles with Islamic elements like domes, arches, and minarets. The Taj Mahal and Jama Masjid are prime examples.</p>
                </div>
            )
        }
    ];

    return (
        <div className="culture-page container section-padding">
            <div className="culture-header">
                <h1 className="culture-title">Architectural Marvels</h1>
                <p className="culture-subtitle">A journey through stone, marble, and timeless design.</p>
            </div>

            <div className="culture-info-block">
                <p>Indian architecture represents a diverse array of styles influenced by different eras, religions, and regions. The structures stand not just as technical marvels, but as canvases of artistic excellence.</p>
            </div>

            <div className="tabs-wrapper bg-white p-4 radius-md shadow-md">
                <Tabs tabs={architectureTabs} />
            </div>
        </div>
    );
};

export default Architecture;
