import { FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const TeamMembers = [
    {
        name: "Jane Doe",
        role: "Social Media Manager",
        imgSrc: "https://placehold.co/128x128",
        social: [
            { platform: "twitter", icon: <FaTwitter />, link: "#" },
            { platform: "facebook", icon: <FaFacebookF />, link: "#" },
            { platform: "instagram", icon: <FaInstagram />, link: "#" }
        ]
    },
    {
        name: "John Smith",
        role: "Content Creator",
        imgSrc: "https://placehold.co/128x128",
        social: [
            { platform: "twitter", icon: <FaTwitter />, link: "#" },
            { platform: "facebook", icon: <FaFacebookF />, link: "#" },
            { platform: "instagram", icon: <FaInstagram />, link: "#" },
        ]
    },
    {
        name: "Emily Johnson",
        role: "Digital Strategist",
        imgSrc: "https://placehold.co/128x128",
        social: [
            { platform: "twitter", icon: <FaTwitter />, link: "#" },
            { platform: "facebook", icon: <FaFacebookF />, link: "#" },
            { platform: "instagram", icon: <FaInstagram />, link: "#" }
        ]
    }
];



export default TeamMembers;