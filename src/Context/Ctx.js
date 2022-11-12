import React, { useContext, useState} from 'react'


const AppContext = React.createContext('');

export function AppContextProvider({children}){

	const [state, setState] = useState(null);

	return (
		<AppContext.Provider value={state, setState}>
			{children}
		</AppContext.Provider>
	)
}

export default AppContext