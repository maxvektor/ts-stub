const hello:string = "Hello from typescript";

export const sayHello = (document:any) => {
  document.querySelector("h2").innerHTML = hello;  // eslint-disable-line no-param-reassign 
}

export default function main(document:any){
  sayHello(document);
}