
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Social() {
    return(
        <>
            <ul className='SocialItems'>
    <li><InstagramIcon style={{fontSize : 50,backgroundImage:"radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)",borderRadius:8}} /></li>
    <li><TwitterIcon  style={{fontSize : 50,color:"blue" }}/></li>
    <li><LinkedInIcon  style={{fontSize : 50,color:"rgb(71, 71, 216)" }}/></li>
  </ul>
        </>
    )
}

export default Social;