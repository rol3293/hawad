import 'animate.css'
import Header from '../components/Header'

const description = 'Currenlty enrolled in Computer Science Technology at Vanier. Ever since I was a young child, I always interested on electronics and how it worked. My curiosity led me to start programming at a young age (Wrote my first \'hello world\' program in Java when I was 14). I have learned and increased my knowledge in computer science ever since.';

function calculateAge() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return (month + 1 >=8 && day >= 8) ? year - 2003 : year - 2004;
}

export default function About() {
    return (
        <div>
            <Header title="About"/>

            <main style={{ padding: '15px' }} >
                <div className='animate__animated animate__fadeIn animate__fast'>
                    <div className='title'>About Me</div>
                    <div className='subtitle'>{description}</div>
                </div>
                <br /><br />
                <h2 className='animate__animated animate__fadeInUp animate'>Personal Info</h2>
                <ul>
                    <li className='animationUp1'>Age: {calculateAge()}</li>
                    <li className='animationUp2'>Favorite Colour: <bold style={{ color: 'green' }}>Green</bold></li>
                    <li className='animationUp3'>Sports that I play: Soccer and Basketball</li>
                    <li className='animationUp4'>Favorite Fruit: Blueberries</li>
                </ul>
            </main>
        </div>
    )
}