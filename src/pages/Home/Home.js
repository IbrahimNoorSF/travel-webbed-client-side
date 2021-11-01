import React from 'react';
import Banner from './Banner/Banner';
import Features from './Features/Features';
import HomeSevices from './HomeServices/HomeSevices';
import OurTeam from './OurTeam/OurTeam';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeSevices></HomeSevices>
            <Features></Features>
            <OurTeam></OurTeam>
        </div>
    );
};

export default Home;