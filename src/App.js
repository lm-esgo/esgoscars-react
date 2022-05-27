// import logo from './logo.svg';
import './App.css';
import { Login, Register, Buy, Sell, Footer, Main } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';

const App = () => {
  	return (
    <Router>
		<div className="container mt-4">
			<div className="d-flex justify-content-evenly bg-dark p-4 rounded-3">
				<div className='#'>
				{/* <NavLink to="/main" className='btn btn-info m-2' activeClassName="active">
					Inicio
				</NavLink> */}
				<Link to="/main" className='btn btn-info m-2'>
					Inicio	
				</Link>
				<Link to="/login" className='btn btn-info rounded-0'>
					Login
				</Link>
				<Link to="/register" className='btn btn-info rounded-0'>
					Registro
				</Link>
				<Link to="/sell" className='btn btn-info rounded-0'>
					Vender
				</Link>
				<Link to="/buy" className='btn btn-info rounded-0'>
					Comprar
				</Link>
				<Link to="/Footer" className='btn btn-info rounded-0'>
					Contacto
				</Link>
				</div>
				 <div className="#">
					<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
					<button className="btn btn-outline-info" type="submit">Search</button>
					</form>
				</div>
			</div>
			<br />
			<p>usuario:</p>
			<hr />
            <Routes>
				<Route exact path="/main" element={<Main />} />
				<Route exact path="/login" element={<Login />} />
				<Route exact path="/register" element={<Register />} />
                <Route exact path="/sell" element={<Sell />} />
                <Route exact path="/buy" element={<Buy />} />
                <Route exact path="/footer" element={<Footer />} />
            </Routes>
		</div>    
    </Router>
  	);
}

export default App;
