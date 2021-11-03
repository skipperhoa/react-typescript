export interface TxtNode {
    title: string;
    description: string;
    year: number;
}

export interface Animals {
    API: string;
    Description: string;
    Auth: string;
    HTTPS: Boolean;
    Cors: string;
    Link: string;
    Category: string;
}
/* counter */
export interface Counter {
    title: string;
    count: number;
    fc_increment: () => void;
    fc_decrement: () => void;
}

/* cards */
export interface Rating {
    count: number;
    rate: number;
}
export interface Item {
    id: number;
    title: string;
    image: string;
    description: string;
    price: number;
    rating: Rating;
    category: string;
}