import axios from 'axios';

const api = axios.create({
    baseURL: `https://dust.devbitapp.be/api`
    //baseURL: 'localhost'
})

const Backend:any = {
    resource: 'devices',

    get_devices() {
        console.log(`getting all devices`)
        return api.get(`/${this.resource}`)//returns prommise
    },
    get_device(id:number){
        console.log(`getting device with id ${id}`)
        return api.get(`/${this.resource}/${id}`)
    },
    get_periodeData(id:number,time:string){
        return api.get(`/${this.resource}/${id}/?period=${time}`)
    },
    get_soilModel(soilmodelid:any){
        return api.get(`/soilmodels/${soilmodelid}`)
    }
}

export { api, Backend }