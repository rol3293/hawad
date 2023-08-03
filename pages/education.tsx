import 'animate.css'
import Header from '../components/Header';
import {GetServerSideProps, InferGetStaticPropsType} from "next";
import {get} from "@vercel/edge-config";

type EducationItem = {
    title: string,
    link: string
}

type EducationList = {
    [key: string]: EducationItem[]
}

export const getServerSideProps: GetServerSideProps<{ educationList: EducationList }> = async () => {
    const educationList: EducationList = await get("education");
    return {props: {educationList}}
}

export default function Education({educationList}): InferGetStaticPropsType<typeof getServerSideProps> {
    return (
        <div>
            <Header title="Education"/>

            <main>
                <div className='subtitle animate__animated animate__fadeIn animate__fast'>
                    <div className='title'>Education</div>
                    <div>List of all my learnings and certificates</div>
                </div>

                <br/>
                {
                    Object.keys(educationList).reverse().map(key => {
                        return (
                            <div key={key}>
                                <h2 className={'animate__animated animate__fadeInUp animate__fast'}>{key}</h2>
                                <ul className={'animate__animated animate__fadeInUp'}>
                                    {educationList[key].map((item: EducationItem) => {
                                        return <li key={item.link}>
                                            <a
                                                href={item.link}
                                                className='hover-underline-animation'
                                                target='_blank'
                                                rel="noreferrer"
                                            >{item.title}</a>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        )
                    })
                }
            </main>
        </div>
    );
}