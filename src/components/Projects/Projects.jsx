import './Projects.css';
import { projects } from '../../db/db';
import Project from './Project/Project';

const Projects = () => {
	return (
		<section className='section-projects'>
			<h2>Projects</h2>
			<div className='projects'>
				{projects.map((project, index) => (
					<Project key={index} {...project} />
				))}
			</div>
		</section>
	);
};

export default Projects;
