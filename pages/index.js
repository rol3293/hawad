import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/Header'
import Link from 'next/link'

export default function Home() {

	return (
		<div>

			<Header title="hawad" />

			<main className={`animate__animated animate__fadeInUp`}>
				<div className={`animate__animated animate__fadeInUp`}>
					<h1 className='title'>Hawad</h1>
					<div className='subtitle'>Computer Science student from Montreal</div>
					<br />
					<div>Currently taking
						<a 
							className='nav-item underline' 
							style={{marginLeft: '7px'}}
							href='https://www.udemy.com/share/101Wbw3@zkWPfO8omtllOL9aZLSVqYQWfDi31ONI7upX55dbDk1Tu8kXMxKm6jl5Xb9BOQ1ScA==/'
						>
							&apos;The Complete React Native + Hooks Course&apos;
						</a>
					</div>
					<br />
					<Link href='/education'><a className='nav-item underline'>View all my learnings</a></Link>
				</div>

				<div style={{ display: 'inline-block', marginTop: '40px'}}>
					<a className='nav-item' href='https://github.com/rol3293' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} size={'lg'}/></a>
					<a className='nav-item' href='https://www.linkedin.com/in/hawad-ahmad-6979121b5/' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={'lg'}/></a>
					<a className='nav-item' href='https://twitter.com/Thorpost1' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faTwitter} size={'lg'}/></a>
					<a className='nav-item' href='https://discord.com/users/328941655656759306' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faDiscord} size={'lg'}/></a>
				</div>
			</main>
		</div>
	)
}
