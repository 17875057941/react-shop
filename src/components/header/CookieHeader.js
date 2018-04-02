import React from 'react';
import Header from './Header';
import {CookiesProvider} from 'react-cookie';

export default function Root(){
	return (
		<CookiesProvider>
			<Header/>
		</CookiesProvider>
	);
}