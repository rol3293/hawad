import 'animate.css';
import Header from '../components/Header';
import Card from '../components/Card'
import { faMessage, faEye, faGamepad, faRobot, faCartShopping, faServer } from "@fortawesome/free-solid-svg-icons";

const projectList = [
    {
        link: 'https://github.com/rol3293/hawad',
        title: 'Portfolio',
        desc: 'The website you are currently in. Uses Next.js',
        icon: faServer
    },
    {
        link: 'https://github.com/me50/rol3293/tree/web50/projects/2020/x/capstone',
        title: 'Capstone',
        desc: 'Real time messaging web application for my final project for HarvardX CS50\'s Web Programming with Python and JavaScript. Uses Django, websockets, redist, and docker',
        icon: faMessage
    },
    {
        link: 'https://github.com/rol3293/BotMinter',
        title: 'Smart Contract Bot',
        desc: 'Bot for executing smart contract functions using electron',
        icon: faRobot
    },
    {
        link: 'https://github.com/phgthanhng/SYSDEV-project',
        title: 'Shisha shop web application',
        desc: 'Ecommerce final project for a client who wanted a shisha web application',
        icon: faCartShopping
    },
    {
        link: 'https://github.com/rol3293/AndroidMathGame',
        title: 'Android Math Game',
        desc: 'Simple and interactive Math game for Android',
        icon: faGamepad
    },
    {
        link: 'https://github.com/rol3293/Eye-Care',
        title: 'Eye Care (C#)',
        desc: 'App that notifies to apply the 20 minute rule. Written in C#',
        icon: faEye
    },
    {
        link: 'https://github.com/rol3293/client',
        title: 'Java Messaging App',
        desc: 'Simple messaging app using Java and sockets',
        icon: faMessage
    },
    {
        link: 'https://github.com/rol3293/Java-Eye-Care',
        title: 'Eye Care (Java)',
        desc: 'App that notifies to apply the 20 minute rule. Written in Java',
        icon: faEye
    }
]

export default function Projects() {
    return (
        <div>
            <Header title="Projects" />
            <main style={{ padding: '15px' }} >
                <div className='subtitle animate__animated animate__fadeIn animate__fast'>
                    <div className='title'>Projects</div>
                    <div className='subtitle'>List of my completed personal projects and projects that I&apos;m currently working on.</div>
                </div>

                <br />
                {
                    projectList.map(item => {
                        return (
                            <div 
                                key={item.link} 
                                className={'animate__animated animate__fadeInUp'}
                            >
                                <Card
                                    href={item.link}
                                    title={item.title}
                                    desc={item.desc}
                                    icon={item.icon} />
                            </div>
                        )
                    })
                }
            </main>

        </div>
    );
}