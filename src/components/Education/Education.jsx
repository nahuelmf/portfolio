import './Education.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Education = () => {
	return (
		<section className='section-education'>
			<h2>Education</h2>
			<article className='education'>
			<Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img style={{width: '18rem'}} variant="top" src="https://firebasestorage.googleapis.com/v0/b/pichuninuni.appspot.com/o/6220f66b8cc5ce006d4aa768.png?alt=media&token=a0a8fb5d-2b50-4fa3-9439-d52225937f2b" />
      <Card.Body>
        <Card.Title>Desarrollo Web</Card.Title>
        <Button variant="primary"><div className='linkEducation'>
			<a href="https://www.coderhouse.com/certificados/6220f66b8cc5ce006d4aa768"
									target='_blank'
									rel='noreferrer'>Desarrollo Web Certificated</a>
			</div></Button>
      </Card.Body>
    </Card>
	<Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img style={{width: '18rem'}} variant="top" src="https://firebasestorage.googleapis.com/v0/b/pichuninuni.appspot.com/o/62ddb80e6e679500247e31df.png?alt=media&token=3c3a9440-ab5e-4e52-8a9c-e11e40af45f4" />
      <Card.Body>
        <Card.Title>JavaScript</Card.Title>
        <Button variant="primary"><div className='linkEducation'>
			<a href="https://www.coderhouse.com/certificados/62d05a51c8b2730019f8ed9f"
									target='_blank'
									rel='noreferrer'>JavaScript Certificated</a>
			</div></Button>
      </Card.Body>
    </Card>
	<Card style={{ width: '18rem', margin: '1rem' }}>
      <Card.Img style={{width: '18rem'}} variant="top" src="https://firebasestorage.googleapis.com/v0/b/pichuninuni.appspot.com/o/62ddb80e6e679500247e31df.png?alt=media&token=3c3a9440-ab5e-4e52-8a9c-e11e40af45f4" />
      <Card.Body>
        <Card.Title>React JS</Card.Title>
        <Button variant="primary"><div className='linkEducation'>
			<a href="https://www.coderhouse.com/certificados/62ddb80e6e679500247e31df"
									target='_blank'
									rel='noreferrer'>React JS Certificated</a>
			</div></Button>
      </Card.Body>
    </Card>
			</article>
		</section>
	);
};

export default Education;
