const cities = require("../dataBase/cities.json")

//funciones
const funciones = require('../utils/funciones')

 class Viaje{
    constructor(){
        this.cities = cities
    }
  

   getAllCities(){
        return this.cities
    }

    getSomeCities(origen){
        return cities.filter(c => c.name !== origen)
    }

    getKmCitie(aCitie){
        const cities = this.getAllCities()
        const city = cities.find(c => c.name === aCitie)
        return city.km
    }

     total(origen,destiny,tb){
        let total = 0
        let totalCombustible = 4.5
        let costCombustible = 20
        let descuento = this.descuento(tb)

        const kmOrigen = this.getKmCitie(origen)
        const kmDestiny = this.getKmCitie(destiny)

        let kmTotal = kmOrigen + kmDestiny
        total = (kmTotal / totalCombustible) * costCombustible

        total = total*descuento 
        return Math.round(total)
    }

   
    getDatosViaje(){
        let minExtra = funciones.getRandomInt(10,50)
        let proximo = minExtra 
        let plataforma = funciones.getRandomInt(1,30)
        const dates={
            proximo:proximo,
            plataforma: plataforma
        }
        return dates
    }

    setTipoBoleto(tb){
        this.tipoBoleto = tb
    }

    getTipoBoleto(){
        return this.tipoBoleto
    }
    
    descuento(tb){
        let descuento 

        switch (tb) {
            case "Jubilado":
                descuento = 0.9
                return descuento
                
            case "Estudiante":
                descuento = 0.7
                return descuento
                
            case "Discapacitado":
                descuento = 0.9
                return descuento

            case "Obrero":
                descuento = 0.6
                return descuento
        
            default:
                descuento = 1
                return descuento
        }
    }
    

    

}







export default  Viaje



















