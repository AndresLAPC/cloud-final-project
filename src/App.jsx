import React from "react";
import { useState } from "react";
import logo from "./internet.svg";
import tick from "./tick.svg";
import "./App.css";
import Ping from "ping.js";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [error, setError] = useState(false);
  const [netError, setNetError] = useState(false);

  function x() {
    if (email === "root" && password === "root" && netError === false) {
      setLoggedIn(true);
    } else {
      setError(true);
    }
  }

  var p = new Ping();

  p.ping("http://google.com", function (err, data) {
    // Also display error if err is returned.
    if (err) {
      console.log("error de conexión");
      setNetError(true);
    }
    console.log(data);
  });

  return (
    <div className="container-login">
      <div className="child">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{loggedIn ? "Has iniciado sesión" : "Inicia sesión"}</h1>
        <div>
          {loggedIn ? (
            <div className="form2">
              <img src={tick} className="tick" alt="logo" />
            </div>
          ) : (
            <div className="form">
              <input
                className="global-input"
                type="text"
                name="email"
                id="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="off"
              />
              <input
                className="global-input"
                type="password"
                name="password"
                id="password"
                value={password}
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="off"
              />
              <button
                className="global-primary-button"
                name="submit"
                type="submit"
                onClick={() => setTimeout(x, 2500)}
              >
                Ingresar
              </button>
              {netError ? <p>Error de conexión</p> : error && <p>Datos incorrectos</p>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
