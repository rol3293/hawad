import "animate.css";
import Header from "../components/Header";
import { get } from "@vercel/edge-config";

function calculateAge() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return month + 1 >= 8 && day >= 8 ? year - 2003 : year - 2004;
}

export const getServerSideProps = async () => {
    const about = await get("about");
    return { props: { about } };
};

export default function About({ about }) {
    return (
        <div>
            <Header title="About" />

            <main style={{ padding: "15px" }}>
                <div className="animate__animated animate__fadeIn animate__fast">
                    <div className="title">About Me</div>
                    <div className="subtitle" style={{whiteSpace: "pre-line"}}>{about.header}</div>
                </div>
                <br />
                <br />
                <h2 className="animate__animated animate__fadeInUp animate">
                    Personal Info
                </h2>
                <ul>
                    <li className="animationUp1">Age: {calculateAge()}</li>
                    <li className="animationUp2">
                        Favorite Colour: <b style={{ color: "green" }}>Green</b>
                    </li>
                    {about.personalInfo.map((value, index) => {
                        return (
                            <li
                                className={`animationUp${index + 3}`}
                                key={value.attribute}>
                                {value.attribute + " " + value.value}
                            </li>
                        );
                    })}
                </ul>
            </main>
        </div>
    );
}
