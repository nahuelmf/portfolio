import { NavLink } from 'react-router-dom';
import './AsideLeft.css';
import { FaHome, FaRocket, FaBriefcase, FaBlackTie } from 'react-icons/fa';
import { IoDocumentOutline, IoSchool } from 'react-icons/io5';

const AsideLeft = () => {
	let activeStyle = {
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
		borderRadius: '5px'
	};
	return (
		<aside className='aside-left'>
			<nav>
				<ul>
					<li>
						<NavLink
							to='/'
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							<FaHome />
							<span>Home</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='projects'
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							<FaBriefcase />
							<span>Projects</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='skills'
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							<FaRocket />
							<span>Skills</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='resume'
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							<IoDocumentOutline />
							<span>Resume</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='education'
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							<IoSchool />
							<span>Education</span>
						</NavLink>
					</li>
					<li>
						<NavLink
							to='work'
							style={({ isActive }) =>
								isActive ? activeStyle : undefined
							}
						>
							<FaBlackTie />
							<span>Work Experience</span>
						</NavLink>
					</li>
				</ul>
			</nav>
		</aside>
	);
};

export default AsideLeft;
