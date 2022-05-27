import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Login = () => {
    const [name, setName] = useState("");
    const [status, setStatus] = useState("");
    const [password, setPassword] = useState("");
    
    let HandleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(name);
            console.log(password);
            let res = await fetch("http://192.168.0.105:888/API-esgoscars/login.php", {
                method: "POST",
                body: JSON.stringify({
                    name: name,
                    password: password
                }),
            });
            console.log(res.body)
            let resJson = await res.json();
            if (res.status === 200) {
                console.log(res)
            } else {
                console.log("Some error occured");
            }
        } catch (err) {
            console.log("error");
        }
    }
    
    /*useEffect(() => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: 'Luis', password: 'estebes' })
        };
        fetch('http://192.168.0.105:888/API-esgoscars/login.php', requestOptions)
            .then(response => console.log(response.json()))
            .then(data => setName(data.name));
    
    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);*/
    
    return(
        <div className="d-flex justify-content-center">
            <div className="border rounded shadow p-3 mb-5 bg-body p-5">
                <h3>LOG IN</h3>
                <form >
                    <label>Nombre</label>
                    <input
                    type="text"
                    value={name}
                    className="d-block p-1"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label>Password</label>
                    <input
                    type="text"
                    className="d-block p-1"
                    value={password}
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={ HandleSubmit}>Ingresar</button>
                </form>
            </div>
        </div>
        
        /*<div className="d-flex justify-content-center">
            <div className="border rounded shadow p-3 mb-5 bg-body p-5">
                <h3>LOG IN</h3>
                <form>
                    <label>Nombre</label>
                    <input type="text" placeholder="nombre" className="d-block p-1" name="name"/><br />
                    <label>Contraseña</label>
                    <input type="password" id="" placeholder="contraseña" className="d-block p-1" name="password"/>
                    <br /><br />
                    <button onClick={ HandleSubmit} className="btn btn-outline-info text-primary m-1" name="login_btn">Ingresar</button>
                </form>
            </div>
        </div>*/
    );
    
}

export default Login;