import './AsideRight.css';
import { FaLinkedin, FaGithubSquare, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';

const AsideRight = () => {
	return (
		<aside className='aside-right'>
			<div className='profile-picture'>
				<img src='https://scontent.faep8-3.fna.fbcdn.net/v/t39.30808-6/217873566_10220526721221907_7897060641692774650_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFzQAL2rxsZfyudigju6fAWauTHgv9tb8Bq5MeC_21vwB6nVfya_A-0nDuK_kFRwQg&_nc_ohc=bXpJFRdckdoAX_B3rKn&tn=vd4Q2BEltZprI5AQ&_nc_ht=scontent.faep8-3.fna&oh=00_AfA63yes47FZq9TBj_pPKImUJhw0Nyk8ly6wC0gYBmJHjw&oe=639BC55F	' alt='Nahuel Martin Figueroa' />
			</div>
			<h3 className='profile-name'>Nahuel Martín Figueroa</h3>
			<p className='description'>
				Con un año de experiencia he desarrollado sitios de
				manera freelance. En
				los proyectos en los que he trabajado me destaqué por ser
				resolutivo, eficiente y comprometido.
			</p>
			<ul className='contact'>
				<li>
					<a
						href='https://www.linkedin.com/in/nahuel-mart%C3%ADn-figueroa-9796831b1/'
						target='_blank'
						rel='noreferrer'
					>
						<FaLinkedin />
						<span>LinkedIn</span>
					</a>
				</li>
				<li>
					<a
						href='https://github.com/nahuelmf'
						target='_blank'
						rel='noreferrer'
					>
						<FaGithubSquare />
						<span>Github</span>
					</a>
				</li>
				<li>
					<a
						href='https://wa.me/541141615158'
						target='_blank'
						rel='noreferrer'
					>
						<FaWhatsapp />
						<span>Whatsapp</span>
					</a>
				</li>
				<li>
					<a
						href='mailto:nahuelmf.sl@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						<HiOutlineMail />
						<span>Email</span>
					</a>
				</li>
				<li>
					<a href='tel:541141615158' target='_blank' rel='noreferrer'>
						<HiOutlinePhone />
						<span>Phone</span>
					</a>
				</li>
			</ul>
		</aside>
	);
};

export default AsideRight;



