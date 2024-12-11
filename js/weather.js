class Weather {
    constructor(city , state){
        this.apiKey = '51d7887a9186357c08ad5eb7e54a9753'
        this.city = city; // حذف کاما و فاصله اضافی
        this.state = state;
    }

    async getWeather(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apiKey}`)
        
        if(response.ok){
            const responseData = await response.json();
            return responseData;
        }else{
            throw Error(response.status);
        }
        
    }

    changeLocation(city , state){
        this.city = city,
        this.state = state
    }
    
    get location(){
        return this.state + ' , ' + this.city;
    }
}