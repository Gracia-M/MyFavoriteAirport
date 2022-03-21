export interface Airport {
    id: number;
    code: string;
    name: string;
    city: string;
    country: string;
    picture: UserPhoto;
    description: string;
    location: UserLocation;
}

export interface UserPhoto {
    filePath: string;
    webViewPath: string;
}

export interface UserLocation {
    lati: number;
    longi: number;
}

export interface AddAirportOptions {
    code: string;
    name: string;
    city: string;
    country: string;
    picture: UserPhoto;
    description: string;
    location: UserLocation;
}

export const airportsList = [
    {
        id: 1,
        code: 'DOH',
        name: 'Hamad International Airport',
        city: 'Doha',
        country:'Qatar',
        picture: {
            filePath:'https://live.staticflickr.com/3856/14889141487_1cc7a75c8b_b.jpg',
            webViewPath:'https://live.staticflickr.com/3856/14889141487_1cc7a75c8b_b.jpg'
        },
        // eslint-disable-next-line max-len
        description:'The home base of Qatar Airways and the second largest airport in the middle east . Last year, it was awarded the \'Best Airport\' in the world. ',
        location: {
            lati: 25.2744444,
            longi: 51.6083333
        }
    },

    {
        id: 2,
        code: 'DXB',
        name: 'Dubai International Airport',
        city: 'Dubai',
        country: 'United Arab Emirates',
        picture: {
            filePath:'https://live.staticflickr.com/3721/12340318753_a4d936ce7e_b.jpg',
            webViewPath:'https://live.staticflickr.com/3721/12340318753_a4d936ce7e_b.jpg'
        },
        // eslint-disable-next-line max-len
        description:'The world\'s busiest airport by international passenger traffic with its Terminal 3 being the largest terminal in the world. ',
        location: {
            lati: 25.252777,
            longi:55.364445
        }
    },

    {
        id: 3,
        code: 'SIN',
        name: 'Singapore Changi Airport',
        city: 'Singapore',
        country: 'Singapore',
        picture: {
            filePath:'https://i.pinimg.com/originals/fe/34/11/fe34116ec730cdf5b36e910ac73ae49a.jpg',
            webViewPath:'https://i.pinimg.com/originals/fe/34/11/fe34116ec730cdf5b36e910ac73ae49a.jpg'
        },
        // eslint-disable-next-line max-len
        description:'The major civilian international airport that serves Singapore, and is one of the largest transportation hubs in Asia.  It was rated the World\'s Best Airport by Skytrax, the first airport in the world to do so for eight consecutive years.',
        location: {
            lati: 1.359167,
            longi: 103.989441
        },
    },

    {
        id: 4,
        code: 'LHR',
        name: 'Heathrow Airport',
        city: 'London',
        country: 'England',
        picture: {
            filePath:'https://i.dailymail.co.uk/i/pix/2014/10/21/1413878984792_wps_5_D43X4X_The_inside_of_Heat.jpg',
            webViewPath:'https://i.dailymail.co.uk/i/pix/2014/10/21/1413878984792_wps_5_D43X4X_The_inside_of_Heat.jpg',
        },
        description:'The major international airport in London and the busiest airport in United Kingdom. ',
        location: {
            lati: 51.470020,
            longi: -0.454295
        },
    }

];
