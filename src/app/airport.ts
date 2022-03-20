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

export const AirportsList = [
    {
        id: 1,
        code: "DOH",
        name: "Hamad International Airport",
        city: "Doha",
        country:"Qatar", 
        picture: {
            filePath:"",
            webViewPath:""
        },
        description:"The home base of Qatar Airways and the second largest airport in the middle east . Last year, it was awarded the 'Best Airport' in the world. ",
        location: {
            lati: 25.2744444,
            longi: 51.6083333
        }
    },
    {
        id: 2,
        code: "DXB",
        name: "Dubai International Airport",
        city: "Dubai",
        country: "United Arab Emirates",
        picture: {
            filePath:"",
            webViewPath:"",
        },
        description:"The world's busiest airport by international passenger traffic with its Terminal 3 being the largest terminal in the world. ",
        location: {
            lati: 25.252777,
            longi:55.364445
        }
    },
    {
        id: 3,
        code: "SIN",
        city: "Singapore Changi Airport",
        country: "Singapore",
        picture: {
            filePath:"",
            webViewPath:""
        }, 
        description:"The major civilian international airport that serves Singapore, and is one of the largest transportation hubs in Asia. ",
        location: {
            lati: 1.359167,
            longi: 103.989441
        },
    },
    {
        id: 4,
        code: "LHR",
        name: "Heathrow Airport",
        city: "London",
        country: "England",
        picture: {
            filePath:"",
            webViewPath:"",
        },
        description:"The major international airport in London and the busiest airport in United Kingdom. ",
        location: {
            lati: 51.470020,
            longi: -0.454295
        },
    }

]
    
    
