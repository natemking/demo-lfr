import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
// import { Liferay } from 'shared/liferay'

// const api = async (url: string, options = {}) => {
// 	return fetch(window.location.origin + '/' + url, {
// 		headers: {
// 			'Content-Type': 'application/json',
// 			'x-csrf-token': Liferay.authToken,
// 		},
// 		...options,
// 	});
// };


function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='bg-primary' id='test-react-app-root'>
            <h1 className='text-secondary'>Updated 621</h1>
			<div>
				<a href='https://vite.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img
						src={reactLogo}
						className='logo react'
						alt='React logo'
					/>
				</a>
			</div>
			<h1 className='text-secondary'>Vite + React</h1>
			<div className='card'>
				<button onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className='text-secondary'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
