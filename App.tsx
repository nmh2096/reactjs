import { useRoutes } from 'react-router-dom'
import routes from './router/routes'

export default function App() {
    const router = useRoutes(routes)
    return (
        <div className='app-container'>
            {router}
        </div>
    )
}
