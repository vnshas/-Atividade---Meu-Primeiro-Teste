export function removeBearer(frase:string){
    if(frase.includes("Bearer")){
        return frase.replace("Bearer","")
    }
    else{
        return frase
    }
}