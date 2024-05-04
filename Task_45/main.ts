import { features } from "process";

function carsDetail(model: string, manufacturer: string, ...extraOptions: { [key:string] : any } [] ):
Object{
  const carInfo = {
     model,
     manufacturer,
     ...Object.assign({color:"red"},{tyres:"Tiger"}, ...extraOptions)
  };

  return carInfo;
};

console.log("Car Information!")
console.log(carsDetail('Honda','Honda Motors', {color:'Black'}, {features:['withAC','automatic']}));