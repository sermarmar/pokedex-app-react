import { FC } from "react";
import styled from "@emotion/styled";
import { ajustarContraste } from "../../utils/calculateConstrast";
import { useTypeColor } from "../providers/useTypeColor";
interface ChipTypeProps{
    type: string
}

export const ChipType: FC<ChipTypeProps> = ({ type }) => {
    const { getColorByType } = useTypeColor();    

    const ChipColor = styled.div`
        background-color: ${ getColorByType(type) };
        color: ${ ajustarContraste(getColorByType(type) || '') };
        font-weight: bold;
        font-size: 12px;
        padding: 2px 5px;
        min-width: 4rem;
        max-width: 8rem;
        border-radius: 20px;
        text-align: center;
    `

    return(
        <ChipColor key={ type } className="rounded px-2 py-0">
            { type.toUpperCase() }
        </ChipColor>
    ); 
}
