import { FC, useEffect, useState } from "react";
import { TypeColorService } from "../../core/services/TypeColorService";
import { TypeColor } from "../../core/model/TypeColor";
import styled from "@emotion/styled";
import { ajustarContraste } from "../../utils/calculateConstrast";

interface ChipTypeProps{
    type: string
}

export const ChipType: FC<ChipTypeProps> = ({ type }) => {
    const [color, setColor] = useState<TypeColor>();

    useEffect(() => {
        const loanColors = async () => {
            const colors = await TypeColorService.getTypesColor();
            setColor(colors.find(color => color.type == type))
        }
        loanColors();
    }, []);

    const ChipColor = styled.div({
        backgroundColor: color?.color,
        color: ajustarContraste(color?.color || ''),
        fontWeight: "bold"
    })

    return(
        <ChipColor key={ type } className="rounded px-2 py-0">{ type.toUpperCase() }</ChipColor>
    ); 
}
