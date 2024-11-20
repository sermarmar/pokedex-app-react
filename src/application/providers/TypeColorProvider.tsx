import { useEffect, useState } from "react";
import { TypeColorService } from "../../core/services/TypeColorService";
import { TypeColor } from "../../core/model/TypeColor";
import { TypeColorContext } from "./TypeColorContext";

interface TypeColorProviderProps {
    children: React.ReactNode
}

export const TypeColorProvider: React.FC<TypeColorProviderProps> = ({ children }) => {
    const [colors, setColors] = useState<TypeColor[]>([]);

    useEffect(() => {
        const loanColors = async () => {
            const colors = await TypeColorService.getTypesColor();
            setColors(colors);
            
        }
        loanColors();
    }, []);

    const getColorByType = (type: string) => {
        return colors.find(color => color.type == type)?.color || '';
    }

    return(
       <TypeColorContext.Provider value={{ getColorByType }}>{ children }</TypeColorContext.Provider>
    );
}