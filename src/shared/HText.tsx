import React from "react";

type Props = {
    children: React.ReactNode;
};

const HText = ({children}: Props) => {
    return (
        <h2 className={'basis-3/5 font-montserrat text-3xl font-bold relative z-10'}>
            {children}
        </h2>
    );
};

export default HText