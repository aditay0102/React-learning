import React from 'react'
import { FaGithub} from "react-icons/fa6";
import { FaLinkedin} from "react-icons/fa6";
import { FaSquareInstagram} from "react-icons/fa6";
import { FaDiscord} from "react-icons/fa6";


function Footer() {
  return (
    <div className='Footer'>
      <div className='socials'div>

        <div className='social s1'>Follow our Socials for More </div>

        <div className='social s2'>
          <div className='s2Center'></div>
            <div className='s2Center'>
            <FaGithub/>
            <FaLinkedin/>
            <FaSquareInstagram/>
            <FaDiscord/>

            </div>
        </div>
      </div>

    </div>
  )
}

export default Footer