import React, { useContext, useState} from 'react'

import Head from 'next/head'

const AppContext = React.createContext('');

export function AppContextProvider({children}){

	const [state, setState] = useState(null);

	return (
		<AppContext.Provider value={state, setState}>
			<Head>
				<meta chartset="utf-8"/>
				<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<title>Github</title>
			</Head>
			{children}
		</AppContext.Provider>
	)
}

export default AppContext