import { FaRestroom } from "react-icons/fa";
import { FaKitchenSet, FaToiletPortable } from "react-icons/fa6";
import { GrSecure } from "react-icons/gr";
import { TbAirConditioning } from "react-icons/tb";

const ServicesData = [
    {
        name: 'Centrally Air-Conditioned Halls',
        details: 'Our establishment is centrally air-conditioned to ensure a comfortable ambience during every special occasion and ceremony.',
        img: <TbAirConditioning />
    },
    {
        name: 'Spacious AC Guest Rooms',
        details: 'The suites in our banquet hall come with spacious AC rooms for the guests to revel in unmatched comfort.',
        img: <FaRestroom />
    },
    {
        name: 'Separate Cooking Areas',
        details: 'We have separate cooking areas in our halls to assist the caterers in serving you fresh and delicious cuisines.',
        img: <FaKitchenSet />
    },
    {
        name: 'State-of-the-Art Washrooms',
        details: 'Squeaky clean washrooms are present on every floor and come with state-of-the-art bath fittings to add to your comfort.',
        img: <FaToiletPortable />
    },
    {
        name: 'Complete Security & Privacy',
        details: 'Pradhan Banquet, a top-notch banquet hall in Kolkata, ensures complete privacy by renting the community hall to one customer at a time.',
        img: <GrSecure />
    }
];

export default ServicesData;