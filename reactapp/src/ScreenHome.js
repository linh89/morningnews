import React, {useState} from 'react';
import './App.css';
import {Input,Button} from 'antd';
import { Redirect } from 'react-router-dom';

function ScreenHome() {
  const [signUpUsername, setSignUpUsername] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [userExits, setUserExits] = useState(false);

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  var handleSubmitSignUp = async () => {
    console.log("ok");
    // const data = await fetch('/sign-up', {
    //   method: 'POST',
    //   headers: {'Content-Type':'application/x-www-form-urlencoded'},
    //   body: `username=${signUpUsername}&email=${signUpEmail}&password=${signUpPassword}`
    // }); 

    const data = await fetch('http://localhost:3000/sign-up', {
                    method: 'POST',
                    headers: {'Content-Type':'application/x-www-form-urlencoded'},
                    body: 'name=john'
                  });
    console.log(data);
    /*const body = await data.json();
    
    if(body.result === true){
      setUserExits(true);
    }
    if(userExits){
      return <Redirect to="/screensource" />
    }*/
  }

  var handleSubmitSignIn = async () => {
    const data = await fetch('/sign-in', {
      method: 'POST',
      headers: {'Content-Type':'application/x-www-form-urlencoded'},
      body: `email=${signInEmail}&password=${signInPassword}`
    });
    const body = await data.json();
    
    if(body.result === true){
      setUserExits(true);
    }
    if(userExits){
      return <Redirect to="/screensource" />
    }
  }

  return (
    <div className="Login-page" >

          {/* SIGN-IN */}

          <div className="Sign">
                  
                  <Input className="Login-input" placeholder="arthur@lacapsule.com" />

                  <Input.Password className="Login-input" placeholder="password" />
            

            <Button  style={{width:'80px'}} type="primary" onClick={() => handleSubmitSignIn()}>Sign-in</Button>

          </div>

          {/* SIGN-UP */}

          <div className="Sign">
                  
                  <Input className="Login-input" placeholder="username" 
                    onChange = { (e) => setSignUpUsername(e.target.value)}
                    value = {signUpUsername}
                  />

                  <Input className="Login-input" placeholder="arthur@lacapsule.com" 
                    onChange = { (e) => setSignUpEmail(e.target.value)}
                    value = {signUpEmail}
                  />


                  <Input.Password className="Login-input" placeholder="password" 
                    onChange = { (e) => setSignUpPassword(e.target.value)}
                    value = {signUpPassword}
                  />
            

            <Button style={{width:'80px'}} type="primary" onClick={() => handleSubmitSignUp()}>Sign-up</Button>

          </div>

      </div>
  );
}

export default ScreenHome;
