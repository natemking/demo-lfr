import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const themePath = path.resolve(__dirname, '../umich-theme/build/buildTheme/css')

export default defineConfig({
	base: '/o/test-react-app', 
	plugins: [
		react({
			babel: {
				plugins: [['babel-plugin-react-compiler']],
			},
		}),
	],
    resolve: {
        alias: {
            'umich-theme': themePath
        }
    },
	build: {
		sourcemap: true,
		outDir: 'build/vite',
	},
	server: {
		sourcemapIgnoreList: false, 
	},
});
