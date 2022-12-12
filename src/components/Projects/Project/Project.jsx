import './Project.css';
import { FaLink, FaGithub } from 'react-icons/fa';

const Project = ({ title, github, deploy, image }) => {
	console.log(image);
	return (
		<article
			className='project'
			style={{ backgroundImage: `url('${image}')` }}
		>
			<div className='project-db'>
				<h3 title={title}>{title}</h3>
				<div className='project-links'>
					<a
						href={github}
						target='_blank'
						rel='noreferrer'
						title='Github'
					>
						<FaGithub />
					</a>
					<a
						href={deploy}
						target='_blank'
						rel='noreferrer'
						title='Deploy'
					>
						<FaLink />
					</a>
				</div>
			</div>
		</article>
	);
};

export default Project;
