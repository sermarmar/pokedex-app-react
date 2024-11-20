import data from '../../assets/types-color.json';
import { TypeColor } from '../model/TypeColor';

export const TypeColorService = {

    async getTypesColor(): Promise<TypeColor[]> {
        return await data;
    }

}