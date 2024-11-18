export interface PokemonDto {
    id: number
    name: string
    types: string[]
    image?: string
    imageSprites: Sprites
}


export interface Sprites {
    back_default?: string;
    front_default?: string;
}