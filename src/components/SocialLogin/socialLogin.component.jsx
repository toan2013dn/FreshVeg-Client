import "./socialLogin.component.scss";
import{ReactComponent as Google} from "@/assets/icons/Google.svg";
import{ReactComponent as Facebook} from "@/assets/icons/Facebook.svg";
import{ReactComponent as Apple} from "@/assets/icons/Apple.svg";


function SocialLogin() {
    return ( 
        <div className="social-login">
            <Google />
            <Facebook />
            <Apple />
            </div>
        );
}

export default SocialLogin;