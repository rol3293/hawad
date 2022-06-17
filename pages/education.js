import 'animate.css'
import Header from '../components/Header';

const educationList2021 = [
    {
        title: 'Ethereum and Solidity: The Complete Developer\'s Guide',
        link: 'https://www.udemy.com/certificate/UC-4a2bf2dd-8af9-40cd-a69e-ad21da41e829/'
    },
    {
        title: 'Angular - The Complete Guide (2021 Edition)',
        link: 'https://www.udemy.com/certificate/UC-96438dbc-261e-4013-adbe-be0f96287489/'
    }
]
const educationList2020 = [
    {
        title: 'Databases: Relational Databases and SQL',
        link: 'https://courses.edx.org/certificates/3b92a51cce574bc19744bc0be397db93'
    }, 
    {
        title: 'CS50\'s Web Programming with Python and JavaScript',
        link: 'https://courses.edx.org/certificates/929a5d78cc834644a959de0b20477b12'
    },
    {
        title: 'CS50\'s Introduction to Computer Science',
        link: 'https://courses.edx.org/certificates/c6814e216c314ec2a1486155fb112b5b'
    }
];

export default function Education() {
    return (
        <div>
            <Header />

            <main>
                <div className='title'>Education</div>
                <div className='subtitle'>List of all my learnings and certificates</div>
                <br />
                <h2 className={'animate__animated animate__fadeInUp'}>2021</h2>
                <ul className={'animate__animated animate__fadeInUp'}>
                    {
                        educationList2021.map(item => {
                            return (
                                <li key={item.link}>
                                    <a
                                        href={item.link}
                                        className='hover-underline-animation'
                                        target='_blank'
                                        rel="noreferrer"
                                    >{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
                <h2 className={'animate__animated animate__fadeInUp'}>2020</h2>
                <ul className={'animate__animated animate__fadeInUp'}>
                    {
                        educationList2020.map(item => {
                            return (
                                <li key={item.link}>
                                    <a
                                        href={item.link}
                                        className='hover-underline-animation'
                                        target='_blank'
                                        rel="noreferrer"
                                    >{item.title}</a>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
        </div>
    );
}