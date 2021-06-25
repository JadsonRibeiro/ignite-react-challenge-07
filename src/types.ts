export interface IContinent {
    id: string;
    name: string;
    shortDescription: string;
    longDescription: string;
    images: Image[],
    countriesQuantity: number;
    languagesQuantity: number;
    biggestsCities: ICity[]
}

export interface ICity {
    id: number;
    name: string;
    country: string;
    image: Image;
    flag: Image;
}

interface Image {
    url: string;
    alt?: string
}