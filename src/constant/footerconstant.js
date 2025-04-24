import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter, FaTelegram } from 'react-icons/fa6';

const footerLinks = [
    {
      title: 'Products',
      links: ['FOCII', 'ABHA'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Our Science', 'Resources'],
    },
    {
      title: 'Support & Legal',
      links: ['Privacy Policy', 'Contact Us', 'Terms & Conditions'],
    },
  ];
  
  const socialIcons = [
    { icon: <FaTelegram />, link: '#' },
    { icon: <FaXTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaLinkedinIn />, link: '#' },
  ];

export { footerLinks, socialIcons };