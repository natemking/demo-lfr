import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import type { UserAccountType } from 'shared/types';
import { headlessApi } from 'shared/utils';

function App() {
	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(false);
	const [users, setUsers] = useState<UserAccountType[]>([]);

	useEffect(() => {
		const getUserAccounts = async (): Promise<void> => {
			try {
				setIsLoading(true);
				const res = await headlessApi(
					'o/headless-admin-user/v1.0/user-accounts'
				);
				const data = await res.json();

				if (data.items) {
					setUsers(data.items);
				}
			} catch (error) {
				console.error('error:', error);
			} finally {
				setIsLoading(false);
			}
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

				{isLoading ? (
					<div>Loading...</div>
				) : (
					<div className='users-list'>
						<h2>Liferay Headless API User List</h2>
						{users.length ? (
							<ol>
								{users.map((user) => (
									<li>{user.name} - {user.emailAddress}</li>
								))}
							</ol>
						) : (
							<p>No Users Found. Are you logged in?</p>
						)}
					</div>
				)}
			</div>
			<p className='text-secondary'>
				Click on the Vite and React logos to learn more
			</p>
		</div>
	);
}

export default App;
