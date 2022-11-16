import usePost from '../../src/hooks/usePost'
import {useRouter} from 'next/router'
import styles from '../../styles/Create.module.css'

import Form from '../../src/Components/Organisms/Form'

export default function editPost(){
	const {createPost} = usePost()

	return(
		<div className={styles.container}>
			<Form onSend={createPost}/>
		</div>
	)
}