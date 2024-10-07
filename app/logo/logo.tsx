import React from "react";
import { lusitana } from "../ui/fonts/fonts";

interface LogoAttributes {
    className?: string,
}

export const Logo: React.FC<LogoAttributes> = ({ className = '' }: LogoAttributes) => {
    return (
        <div className={`${lusitana.className} flex flex-row items-center leading-none text-white bottom`}>

            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="Viadeo--Streamline-Simple-Icons.svg" height="40" width="40"><desc>Viadeo Streamline Icon: https://streamlinehq.com</desc><title>Viadeo</title><path d="M16.2888 13.8979c0.361 0.884 0.5428 1.8423 0.5428 2.875 0 1.9315 -0.6593 3.6185 -1.977 5.0626C13.537 23.2796 11.8417 24 9.7697 24c-2.0819 0 -3.778 -0.7204 -5.0973 -2.1645 -1.3177 -1.4441 -1.9786 -3.1311 -1.9786 -5.0626 0 -1.9142 0.6213 -3.5747 1.8687 -4.9791C5.9381 10.2439 7.6688 9.469 9.7673 9.469c0.884 0 1.7018 0.1388 2.4536 0.4131 -0.2453 0.4808 -0.4659 1.0698 -0.5262 1.7035 -0.599 -0.2503 -1.2425 -0.3759 -1.9332 -0.3759 -1.454 0 -2.7015 0.5453 -3.7416 1.6382 -1.0409 1.0921 -1.5614 2.4132 -1.5614 3.963 0 0.9996 0.2396 1.9315 0.7105 2.7948 0.4792 0.8642 1.1153 1.53 1.9249 2.0009 0.8096 0.4701 1.6936 0.7047 2.6602 0.7047 0.9666 0 1.8588 -0.2338 2.6602 -0.7047 0.8096 -0.47 1.454 -1.1367 1.9249 -2.0009 0.8345 -1.4971 0.9618 -3.465 0.2974 -5.0386 0.4708 -0.0991 1.0491 -0.2949 1.6522 -0.6692zM20.3873 0.4285l-0.0126 -0.0148c-0.7574 1.6151 -2.1586 1.9175 -2.1586 1.9175 -1.4013 0.3613 -1.8924 0.8997 -1.8924 0.8997 -1.4013 1.416 -0.295 3.1344 -0.295 3.1344 3.0311 -0.6933 4.1374 -3.186 4.1374 -3.186 -0.1327 1.6815 -3.7317 3.658 -3.7317 3.658 1.1947 1.1726 2.3305 1.0325 3.0828 0.5826 0.9956 -0.59 1.475 -1.8953 1.475 -1.8953 0.966 -2.8984 -0.6049 -5.0961 -0.6049 -5.0961zM7.0301 20.4729s0.4278 0.0738 0.9123 0.0516c0 0 10.3286 -7.021 7.6094 -14.3148l-0.0405 -0.118v0.0074c0.0339 0.4867 -4.483 13.0613 -8.4812 14.3738zm8.3828 -15.1895C15.0486 1.4101 12.9327 0 12.9327 0c1.4897 2.5134 2.2995 4.7694 2.4816 5.3055 0 -0.0132 -0.0014 -0.0221 -0.0014 -0.0221z" fill="#ffffff" strokeWidth="1"></path></svg>

            <p className="text-[35px] bold">PTMO</p>
        </div>

    );
}