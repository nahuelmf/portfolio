import './Skills.css';

import Skill from './Skill/Skill';
import { skills } from '../../db/db';

const Skills = () => {
	return (
		<section className='section-skills'>
			<h2>Skills</h2>
			<div className='skills'>
				{skills.map((skill, index) => {
					return <Skill key={index} {...skill} />;
				})}
			</div>
		</section>
	);
};

export default Skills;
