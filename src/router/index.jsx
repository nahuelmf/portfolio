import { createHashRouter } from 'react-router-dom';
import App from '../App';
import Education from '../components/Education/Education';
import Projects from '../components/Projects/Projects';
import Resume from '../components/Resume/Resume';
import Skills from '../components/Skills/Skills';
import Work from '../components/Work/Work';

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{ path: 'projects', element: <Projects /> },
			{ path: 'skills', element: <Skills /> },
			{ path: 'resume', element: <Resume /> },
			{ path: 'education', element: <Education /> },
			{ path: 'work', element: <Work /> }
		]
	}
]);
