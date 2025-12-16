import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import type { UserAccountType } from 'shared/types'
import { headlessApi } from 'shared/utils';


function App() {
	const [count, setCount] = useState(0);
    const [users, setUsers] = useState<UserAccountType[]>([]);

	useEffect(() => {
		const getUserAccounts = async () => {
			const res = await headlessApi(
				'o/headless-admin-user/v1.0/user-accounts'
			);
			const data = await res.json();

            console.log(data.items);
            setUsers(data.items)
			return data.items;
		};

		getUserAccounts();
	}, []);

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
