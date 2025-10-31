import Global from "@/Global";
import axios from "axios";
export default class ServiceCoches {
    getCoches () { 
        return new Promise(function(resolve){
        let coches = []
        let url = Global.url
        let request = "webresources/coches"
        axios.get(url + request).then(response => {
            console.log("Leyendo Coches");
            coches = response.data
        resolve(coches);
        })
})
}
}