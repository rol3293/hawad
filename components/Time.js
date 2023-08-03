import { useState, useEffect } from "react";
import date from 'date-and-time';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function Time() {
    const [time, setTime] = useState('');

	useEffect(() => {
		setTimeout(() => {
			const now = new Date();

			setTime(date.format(now, 'ddd, MMM DD YYYY h:mm:ss A'));
		}, 1000)
	});

    return (
        <>
            <FontAwesomeIcon icon={faClock} size={"lg"} style={{ paddingRight: 10}} />
            {time}
        </>
    );
}