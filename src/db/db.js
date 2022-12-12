import {
	FaHtml5,
	FaCss3Alt,
	FaSass,
	FaBootstrap,
	FaReact,
	FaNodeJs
} from 'react-icons/fa';
import { VscTerminalBash } from 'react-icons/vsc';
import { SiMongodb, SiJavascript } from 'react-icons/si';

export const skills = [
	{
		title: 'HTML',
		icon: <FaHtml5 />,
		color: '#eb9c00'
	},
	{
		title: 'CSS',
		icon: <FaCss3Alt />,
		color: '#039be5'
	},
	{
		title: 'Sass',
		icon: <FaSass />,
		color: '#bf4080'
	},
	{
		title: 'Bootstrap',
		icon: <FaBootstrap />,
		color: '#712cf9'
	},
	{
		title: 'JavaScript',
		icon: <SiJavascript />,
		color: '#e0bd41'
	},
	{
		title: 'React JS',
		icon: <FaReact />,
		color: '#61dafb'
	},
	{
		title: 'Node JS',
		icon: <FaNodeJs />,
		color: '#026e00'
	},
	{
		title: 'Mongo DB',
		icon: <SiMongodb />,
		color: '#116149'
	},
	{
		title: 'Bash',
		icon: <VscTerminalBash />,
		color: '#000000de'
	}
];

export const projects = [
	{
		title: 'Maac Audiovisuales',
		deploy: 'https://maacaudiovisuales.com/',
		image: 'https://firebasestorage.googleapis.com/v0/b/pichuninuni.appspot.com/o/maac.jpeg?alt=media&token=cfc6863d-5e3e-4233-8bce-445c8b4304b2'
	},
	{
		title: 'Veeconessen',
		github: 'https://github.com/nahuelmf/JS',
		deploy: 'https://nahuelmf.github.io/JS/',
		image: 'https://firebasestorage.googleapis.com/v0/b/pichuninuni.appspot.com/o/Veconessen.png?alt=media&token=41019480-534a-48c1-a5cf-96b5a475e0f6'
	},
	{
		title: 'Pichininuni ecommerce',
		github: 'https://github.com/nahuelmf/React-Figueroa',
		deploy: 'https://pichuninuni.web.app/',
		image: 'https://firebasestorage.googleapis.com/v0/b/pichuninuni.appspot.com/o/Pichuninuni.jpg?alt=media&token=0c04c903-9def-4ad6-b49c-1b98d57f7938'
	}
];

export const education = [
	{
		title: 'Desarrollo Web',
		state: 'Complete',
		certificate:
			'https://www.coderhouse.com/certificados/6220f66b8cc5ce006d4aa768'
	},
	{
		title: 'React JS',
		state: 'Complete',
		certificate:
			'https://www.coderhouse.com/certificados/62ddb80e6e679500247e31df'
	},
	{
		title: 'JavaScript',
		state: 'Complete',
		certificate:
			'https://www.coderhouse.com/certificados/62d05a51c8b2730019f8ed9f'
	},
	{
		title: 'Desarrollo Back End',
		state: '',
		certificate: ''
	},
	{
		title: 'Desarrollo Full Stack',
		state: '',
		certificate: ''
	}
];
