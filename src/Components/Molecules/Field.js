import React from 'react'

import styles from '../../../styles/Field.module.css'


export default function Field({state, setState, fieldName}){

	return(
		<label className={styles.label}>
		  	{fieldName} <br/>
		  	<input className={styles.field}
		  	  	name={fieldName}
		  	  	type="text"
		  	  	value={state}
		  	  	checked={state}
		  	  	onChange={setState} />
		</label>
	)
}