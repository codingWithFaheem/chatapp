import { auth, provider } from "../component/cofig/firebase" ;
import { signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export const Auth = ({ setIsAuth }) => {
    const signInWithGoogle = async () => {
        try{
             const result = await signInWithPopup(auth , provider)
             cookies.set("auth-token" , result.user.refreshToken)
        }
        catch(error){
            console.error(error);
        }
    } ;
return (
    <div className="auth">
      <p> Sign In With Google To Continue </p>
      <button onClick={signInWithGoogle}> Sign In With Google </button>
    </div>
  );
}