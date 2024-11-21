import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Anurag from '../Assets/Digital-Partner/Anurag.jpeg';
import Sumouli from '../Assets/Digital-Partner/su.jpeg';
import Argho from '../Assets/Digital-Partner/Arjyo.jpeg';

const TeamMembers = [
    {
        name: "Anurag Naskar",
        role: "Digital Strategist",
        imgSrc: Anurag,
        social: [
            { platform: "twitter", icon: <FaTwitter />, link: "#" },
            { platform: "facebook", icon: <FaFacebookF />, link: "#" },
            { platform: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/_.anuragn?igsh=NHpjZmJjbG52bmFo" }
        ]
    },
    {
        name: "Abhirup Naskar",
        role: "Social Media Manager",
        imgSrc: Argho,
        social: [
            { platform: "twitter", icon: <FaTwitter />, link: "#" },
            { platform: "facebook", icon: <FaFacebookF />, link: "#" },
            { platform: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/_error._.abhirup?igsh=MWt2Y3hhZ3NwcTQ3OA==" },
        ]
    },
    {
        name: "Sumouli Mandal",
        role: "social media promoter",
        imgSrc: Sumouli,
        social: [
            { platform: "twitter", icon: <FaTwitter />, link: "#" },
            { platform: "facebook", icon: <FaFacebookF />, link: "https://www.facebook.com/share/15TNua2DJs/" },
            { platform: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/sum_it_up006?utm_source=qr&igsh=MWwyOG82dWp3cmwzMw==" }
        ]
    }
];



export default TeamMembers;