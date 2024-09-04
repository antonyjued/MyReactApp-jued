import logo from './logo.svg';
import './App.css';
import './AppStyle.css';
let a="";
function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div id="myapp" class="container">
         <div>
          <label>Username</label>
          <input type="text" id="username"/>
         </div>
         <div>
          <label>Password</label>
          <input type="password" id="password"/>
         </div>
         <div>
          <input type="submit" value="Login" />
          </div>
        </div>
        
      </header>
    </div>
  );
  
  const user=document.getElementById('username').value;
  const pass=document.getElementById('password').value;
  user.onchange=()=>{
    a=user;
    return a;
  };
}

export default App;
