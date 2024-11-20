import { FC} from "react"
import { ChipType } from "./ChipType";
import styled from "@emotion/styled";
import { useTypeColor } from "../providers/useTypeColor";

interface CardProps {
    title: string
    image: string
    types: string[]
}

export const PokemonCard: FC<CardProps> = ({ title, image, types }) => {
    const { getColorByType } = useTypeColor();

    const typesList = types.map(type => (
        <ChipType type={ type } />
    ))

    const handleColourGradient = () => {
        if(types.length == 2) {
            const firstType = getColorByType(types[0]);
            const secondType = getColorByType(types[1]);
            return `linear-gradient(140deg, ${firstType + '84'} 0%, ${secondType + '84'} 100%)`;
        }
        return getColorByType(types[0]) + '84';
    }

    const CardHeader = styled.div`
        width: 100%;
        display: flex;
        justify-content: center;
        background: ${ handleColourGradient() };
    `

    return (
        <Card>
            <CardHeader>
                <Image src={ image } alt={ title } />
            </CardHeader>
            <CardBody>
                <h3> { title.toUpperCase() } </h3>
                <TypesList className="flex gap-3">
                    { typesList }
                </TypesList>
            </CardBody>
        </Card>
    );
}

const Card = styled.div`
    width: 280px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px #dcdcdc9a;
    overflow: hidden;
`

const CardBody = styled.div`
    padding: 13px;
`

const Image = styled.img`
    width: 88%;
    position: relative;
`

const TypesList = styled.div`
    display: flex;
    gap: 8px
`