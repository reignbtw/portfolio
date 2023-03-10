import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className='footer'>
      <div className='socialMedia'>
        <InstagramIcon />
        <TwitterIcon />
        <GitHubIcon />
        <LinkedInIcon />
        <EmailIcon />
      </div>
      <p> &copy; 2023 Piercenhelms.com</p>
    </div>
  )
}

export default Footer
