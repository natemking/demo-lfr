import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	base: '/o/test-react-app', 
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
	build: {
		sourcemap: true,
		outDir: 'build/vite',
	},
	server: {
		sourcemapIgnoreList: false, 
	},
    envDir: '../../'
});
