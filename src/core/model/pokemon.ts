export interface Pokemon {
    id: number
    name: string
    types: Type[]
    sprites: Sprites

}

export interface Type {
    type: {
        name: string
    }
}

export interface Sprites {
    back_default:       string;
    front_default:      string;
    other?:             Other;
}

export interface Other {
    "official-artwork": OfficialArtwork;
}

export interface OfficialArtwork {
    front_default: string;
    front_shiny:   string;
}