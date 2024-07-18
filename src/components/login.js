import { faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = () => {
    return ( 
        <div className="login-container">
            <div className="login-box">
                <div className="head-container">
                    <p>Login</p>
                    <h2>Welcome Back</h2>
                </div>
                <form>
                    <div className="email">
                        <label htmlFor="email"></label>
                        <input type="email" id="email" placeholder="Email" required />
                    </div>
                    <div className="password">
                        <label htmlFor="password"></label>
                        <input type="password" id="password" placeholder="Password" required />
                            <FontAwesomeIcon icon={faEyeSlash} className='fontAwesome'/>
                    </div>
                    <div className="link"><a href="/">Forgot Password</a></div>
                    <button className = "loginSubmit" type="submit">Login</button>
                    <div className="link">
                        <a href="/">I don't have an account</a>
                    </div>
                </form>

            </div>
        </div>
    //     <div className="login-container">
    //     <div className="login-box">
    //       <p>Login</p>
    //       <h2>Welcome Back</h2>
    //       <form>
    //         <form action="" className="form-container" style={{gap: "4"}}>
    //             <div className="form-group">
    //                 <label htmlFor="email"></label>
    //                 <input type="email" id="email" placeholder="Email" required />
    //             </div>
    //             <div className="form-group">
    //                 <label htmlFor="password"></label>
    //                 <input type="password" id="password" placeholder="Password" required />
    //             </div>
    //             <div className="forgotPassword">
    //                 <a href="/">Forgot password</a>
    //             </div>
    //             <button type="submit">Login</button>
    //             <div className="dontHave">
    //                 <a href="/" className='dontHave'>I don't have an account</a>
    //             </div>
            
    //         </form> 

            
    //       </form>
    //     </div>
    //   </div>
    );
}
 
export default Login;