import 'animate.css'
import Header from '../components/Header'
import {getAll} from "@vercel/edge-config";

function calculateAge() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return (month + 1 >=8 && day >= 8) ? year - 2003 : year - 2004;
}

export async function getServerSideProps() {
    const allVariables = await getAll();

    return {
        props: {
            rol: allVariables
        }
    };
}

export default function About({ rol }) {
    console.log(rol);
    return (
        <div>
            <Header title="About"/>

            <main style={{ padding: '15px' }} >
                <div className='animate__animated animate__fadeIn animate__fast'>
                    <div className='title'>About Me</div>
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
