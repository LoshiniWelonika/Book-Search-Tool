import "../css/Logo.css";
import exampleImage from '../images/logo.png';

function Logo(){
    return <div className="logo">
            <img src={exampleImage} alt="logo" />
    </div>
}

export default Logo;