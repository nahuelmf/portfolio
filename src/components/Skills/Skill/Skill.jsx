import './Skill.css';

const Skill = ({ title, icon, color }) => {
	return (
		<article className='skill'>
			<div
				style={{
					color: `${color}`,
					filter: `drop-shadow(0 0 5px ${color})`
				}}
			>
				{icon}
			</div>
			<h3>{title}</h3>
		</article>
	);
};

export default Skill;
