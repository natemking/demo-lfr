import { Liferay } from './liferay';

const localDevSvr = import.meta.env.VITE_LOCAL_DEV_SERVER_ADDRESS;

/**
 * Retrieves an access token using the OAuth 2.0 Client Credentials flow.
 *
 * This function is intended for **local development only**. It sends a request to the
 * OAuth 2.0 token endpoint of the local Liferay server using the `client_id` and
 * `client_secret` defined in the environment variables. The `redirect_uri` is derived
 * from the current browser location, and additional parameters are included in the request.
 *
 * Developers must set up their local Liferay server and configure OAuth 2.0 client credentials
 * as described in the Liferay documentation:
 * https://learn.liferay.com/ja/w/dxp/headless-delivery/using-oauth2/using-oauth2-to-authorize-users
 *
 */
export const getAccessTokenViaClientCredentials = async (): Promise<string> => {
	let redirectUri = window.location.href;

	if (redirectUri.lastIndexOf('?') > 0) {
		redirectUri = redirectUri.slice(0, redirectUri.lastIndexOf('?'));
	}

	const urlSearchParams = new URLSearchParams(window.location.search);

	const request = {
		client_id: import.meta.env.VITE_LOCAL_LFR_CLIENT_ID,
		client_secret: import.meta.env.VITE_LOCAL_LFR_CLIENT_SECRET,
		code: urlSearchParams.get('code'),
		grant_type: 'client_credentials',
		redirect_uri: redirectUri,
	};

	const bodyArr: string[] = [];

	for (const property in request) {
		const encodedKey = encodeURIComponent(property);
		const encodedValue = encodeURIComponent(
			request[property as keyof typeof request] ?? ''
		);

		bodyArr.push(encodedKey + '=' + encodedValue);
	}

	const body = bodyArr.join('&');

	const data = await fetch(`${localDevSvr}/o/oauth2/token`, {
		body,
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
		},
		method: 'POST',
	}).then((response) => response.json());

	return data.access_token;
};

/**
 * Sends a request to a Liferay headless API endpoint.
 *
 * In development, it uses an OAuth 2.0 access token for authentication.
 * In production, it uses the `Liferay.authToken` for CSRF protection.
 *
 * Developers must configure their local Liferay server and OAuth 2.0
 * credentials as described here:
 * https://learn.liferay.com/ja/w/dxp/headless-delivery/using-oauth2/using-oauth2-to-authorize-users
 */
export const headlessApi = async (url: string, options = {}): Promise<Response> => {
	const isDevelopment = import.meta.env.MODE === 'development';

	const token = isDevelopment
		? await getAccessTokenViaClientCredentials()
		: undefined;

	const baseUrl = isDevelopment ? localDevSvr : window.location.origin;

	const baseHeaders = {
		'Content-Type': 'application/json',
	};

	const headers = isDevelopment
		? {
				...baseHeaders,
				Authorization: `Bearer ${token}`,
		  }
		: {
				...baseHeaders,
				'x-csrf-token': Liferay.authToken,
		  };

	return fetch(`${baseUrl}/${url}`, {
		headers,
		...options,
	});
};
