import { FC } from "react"

interface CardProps {
    title: string,
    image: string
    types: string[]
}

export const Card: FC<CardProps> = ({ title, image, types }) => {
    

    return (
        <>
            <img src={ image } alt="" />
        </>
    );
}