import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Loader from './Loader';
import Card from './Card';

function App() {
	const [vehicles, setVehicles] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchColors = async () => {
		setLoading(true);
		const options = {
			method: 'GET',
			url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
			params: { make: 'tesla' },
			headers: {
				'x-rapidapi-key': 'fa37f70c0amsh605a37fe7d29051p1b0b70jsn48ed6fd4016e',
				'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
			}
		};

		try {
			const response = await axios.request(options);
			console.log(response.data);
			setVehicles(response.data);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.error(error);
		}
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='App-link'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'
				>
					Learn React
				</a>
				<button
					className='py-2 px-4 bg-slate-600 rounded-lg mt-4'
					onClick={fetchColors}
				>
					Fetch Models
				</button>

				{loading ? (
					<div className='mt-12'>
						<Loader />
					</div>
				) : (
					<div className='mt-12 grid sm:grid-cols-2 lg:grid-cols-4 grid-flow-row-dense gap-4 md:gap-8 mb-12 px-4 max-w-6xl'>
						{vehicles.map((item) => (
							<Card item={item} key={item} />
						))}
					</div>
				)}
			</header>
		</div>
	);
}

export default App;
