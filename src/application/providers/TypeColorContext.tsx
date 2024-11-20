import { createContext } from "react";

interface TypeColorContextProps {
    getColorByType(type: string): any
}

export const TypeColorContext = createContext<TypeColorContextProps | undefined>(undefined);