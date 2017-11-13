let favoriteCityId = "rome"
console.log(favoriteCityId)
favoriteCityId = "paris"
console.log(favoriteCityId)

const citiesId = ["paris", "nyc", "rome", "rio-de-janeiro"]
console.log(citiesId)

//citiesId = [];

citiesId.push("tokyo")
console.log(citiesId)


function getWeather(cityId){
    let city = cityId;
    let temperature = 20;

    return{city, temperature}
}

const weather = getWeather(favoriteCityId)
console.log(weather)

const city = weather.city;
const temperature = weather.temperature;

console.log(city);
console.log(temperature);

const[parisId, nycId, ...otherCitiesId] = citiesId;

console.log(parisId)
console.log(nycId)
console.log(otherCitiesId.length)

class Trip{
    constructor(id, name, imageUrl){
        this.id = id
        this.name = name
        this.imageUrl = imageUrl
    }

    toString(){
        return `Trip [${this.id}, ${this.name}, ${this.imageUrl}, ${this.price}]`
    }

    get price(){
        return this._price;
    }
    set price(price){
        this._price = price
    }

    static getDefaultTrip(){
        return new Trip("rio-de-janeiro", "Rio-de-janeiro", "img/rio-de-janeiro.jpg")
    }
}

let parisTrip = new Trip("paris", "Paris", "img/paris.jpg")
parisTrip.price = 100

console.log(parisTrip.toString())

const defaultTrip = Trip.getDefaultTrip();

console.log(defaultTrip.toString())


class FreeTrip extends Trip{
    constructor(id, name, imageUrl){
        super(id, name, imageUrl);
        this.price = 0;
    }

    toString(){
        return "Free" + super.toString();
    }
}

const freeTrip = new FreeTrip("nantes", "Nantes", "img/nantes.jpg")
console.log(freeTrip.toString())

class TripService{
    constructor(){
        this.trips = new Set();
        let t1 = {id:'paris', name:'Paris', imageUrl:'img/paris.jpg'}
        let t2 = {id:'nantes', name:'Nantes', imageUrl:'img/nantes.jpg'}
        let t3 = {id:'rio-de-janeiro', name:'Rio de Janeiro', imageUrl:'img/rio-de-janeiro.jpg'}
        this.trips.add(t1);
        this.trips.add(t2);
        this.trips.add(t3);
     }
    
    findByName(tripName){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.trips.forEach(function(element){
                    if(element.name == tripName){
                        resolve(element);
                    }
                })
                reject('No trip with name ' + tripName)
            }, 2000)
        })
    }
}
class PriceService {
    constructor() {
        this.prices = new Map();
        this.prices.set('paris', 100)
        this.prices.set('rio-de-janeiro', 800)
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }
    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                if(this.prices.has(tripId)){
                resolve(this.prices.get(tripId));
                } else{
                    reject('No trip with name ' + tripId)
                }
            }, 2000);
        });
    }
 }

tripService = new TripService();
priceService = new PriceService();

priceService.findPriceByTripId('rio-de-janeiro').then(function(price){
    console.log(price);
})
function find(nomVille){
    tripService.findByName(nomVille)
        .then(trip => { return priceService.findPriceByTripId(trip.id)
        .then(prix=>{console.log(prix)},error=>{console.log(error)})
        })
        
    }

find("Rio de Janeiro");