import React from 'react';
import Login from './Login';
import {CookiesProvider} from 'react-cookie';

export default function Root(){
	return (
		<CookiesProvider>
			<Login/>
		</CookiesProvider>
	);
}