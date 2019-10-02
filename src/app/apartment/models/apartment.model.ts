export interface IApartment {
    id: number;
    url: string;
    title: string;
}

export const apartments: IApartment[] = [
    {
        id: 548282618,
        url: 'https://www.olx.pl/oferta/mieszkanie-2-pokojowe-krowodrza-skrzyzowanie-wroclawska-i-kijowska-CID3-IDB6xm2.html',
        title: 'Mieszkanie 2 pokojowe, Krowodrza skrzyżowanie Wrocławska i Kijowska',
    },
    {
        id: 553077623,
        url: 'https://www.olx.pl/oferta/apartament-krakow-grzegorzki-ul-masarska-bezposrednio-bez-prowizji-CID3-IDBqEKP.html',
        title: 'Apartament Kraków Grzegórzki, ul. Masarska, bezpośrednio, bez prowizji',
    },
    {
        id: 514117687,
        url: 'https://www.olx.pl/oferta/inwestycja-starowislna-mieszkanie-CID3-IDyNbuL.html',
        title: 'Inwestycja Starowiślna mieszkanie',
    },
];
