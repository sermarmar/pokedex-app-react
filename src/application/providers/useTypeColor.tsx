import { useContext } from "react";
import { TypeColorContext } from "./TypeColorContext";

export const useTypeColor = () => {
    const context = useContext(TypeColorContext);
    
    if(!context) {
        throw new Error("useTypeColor debe usarse dentro TypeColorProvider");
    }
    return context;
}