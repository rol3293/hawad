import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Header from '../components/Header'
import Time from '../components/Time'
import Link from 'next/link'
import {get} from "@vercel/edge-config";

export async function getServerSideProps() {
	const index = await get("index")
	return { props: {index} }
}
export default function Home({index}) {

	return (
		<div>
			<Header title="hawad" />
			<main>
				<div className='animate__animated animate__fadeIn'>
					<h1 className='title'>Hawad</h1>
					<div className='subtitle'>{index.header}</div>
				</div>
				<br />
				<div className='animate__animated animate__fadeInUp animate__faster'>Currently taking
					<a
						className='nav-item underline'
						style={{ marginLeft: '7px' }}
						href='https://www.udemy.com/share/101Wbw3@zkWPfO8omtllOL9aZLSVqYQWfDi31ONI7upX55dbDk1Tu8kXMxKm6jl5Xb9BOQ1ScA==/'
					>
						&apos;The Complete React Native + Hooks Course&apos;
					</a>
				</div>
				<br />
				<div className='animate__animated animate__fadeInUp animate__fast'>
					<Link href='/education'>
						<a className='nav-item underline'>View all my learnings</a>
					</Link>
				</div>

				<div style={{ marginTop: '20px' }} className='animationUp1'>
					<a className='nav-item' href='https://github.com/rol3293' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub} size={'lg'} /></a>
					<a className='nav-item' href='https://www.linkedin.com/in/hawad-ahmad-6979121b5/' target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={'lg'} /></a>
				</div>

				<div style={{ marginTop: '25px' }}>
					<Time />
				</div>
			</main>
		</div>
	)
}
