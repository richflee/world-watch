export class Country {

    public name: string;
    public capital: string;
    public flagImageUrl: string;

    public latitude: number;
    public longitude: number;

    constructor(name: string) {
        this.name = name;
    }

    setLocation(lat: number, lng: number): void {
        this.latitude = lat;
        this.longitude = lng;
    }
}
