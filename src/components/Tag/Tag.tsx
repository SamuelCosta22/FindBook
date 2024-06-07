import classNames from "classnames";
import { useCallback } from "react";

type Props = {
    title: string;
    className?: string;
}

export function Tag({title, className}: Props){
    const randomColors = useCallback(() => {
        const hue = Math.floor(Math.random() * 360);
        const lightness = `hsl(${hue}, 100%, 95%)`;
        const darkness = `hsl(${hue}, 100%, 20%)`;
        return {lightness, darkness};
    }, []);

    return(
        <p style={{backgroundColor: randomColors().lightness, color: randomColors().darkness}}
           className={classNames([
            "rounded-full bg-green-100 bg-opacity-50 text-evergreen text-center w-fit px-3 py-1",
            className
           ])}>
            {title}
        </p>
    )
}