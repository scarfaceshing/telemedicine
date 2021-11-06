import { useHistory } from 'react-router-dom';

const goTo = (path: string) => {
 const history = useHistory()

 history.push(path)
}

export default goTo
