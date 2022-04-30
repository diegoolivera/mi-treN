const path = require('path')

//funciones
const funciones = require('../utils/funciones')

export class Viaje{
    constructor(){
        this.cities = path.join(__dirname,"../dataBase/cities.json")
    }

    async getAllCities(){
        return await this.readData()
    }

    async getKmCitie(aCitie){
        const cities = this.getAllCities()
        const city = cities.find(c => c.name === aCitie)
        return city.km
    }

    async total(origen,destiny){
        let total = 0
        let totalCombustible = 4.5
        let costCombustible = 109

        const kmOrigen = this.getKmCitie(origen)
        const kmDestiny = this.getKmCitie(destiny)

        let kmTotal = kmOrigen + kmDestiny
        total = (kmTotal / totalCombustible) * costCombustible

        return total
    }

   
    getDatosViaje(){
        let minExtra = funciones.getRandomInt(20,50)
        let proximo = new Date().getHours() + ":" + (new Date().getMinutes()+minExtra) 
        let plataforma = funciones.getRandomInt(1,30)
        const dates={
            proximo:proximo,
            plataforma: plataforma
        }
        return dates
    }


}



























