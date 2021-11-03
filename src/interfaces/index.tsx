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

export interface Counter {
    title: string;
    count: number;
    fc_increment: () => void;
    fc_decrement: () => void;
}
