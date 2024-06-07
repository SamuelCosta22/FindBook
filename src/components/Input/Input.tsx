import { forwardRef } from "react";

type Props = {
    placeholder: string;
}

export const Input = forwardRef<HTMLInputElement, Props>(({placeholder, ...rest}: Props, ref) => {
    return(
        <input ref={ref} type="text" placeholder={placeholder} className="outline-none shadow-lg border border-gray-100 rouded-lg w-full p-3 mt-3" {...rest} />
    )
})