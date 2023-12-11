
import logo from '../assets/img/logo.png';

// TODO: modify the header so that you see the experience from the video recording 
export default function Header() {
    return (
        <div className="header">
            <div className="header__logo-container">
                <img src={logo} width={76} height={76} className="header__emblem"/>
                <div className="header__logo-title">Luma AI</div>
            </div>
        </div>
    );
 }

