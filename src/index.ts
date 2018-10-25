const hello:string = "Hello from typescript";

const sayHello = (document:any) => {
  document.querySelector("h2").innerHTML = hello;  // eslint-disable-line no-param-reassign 
}

sayHello(document);

export default sayHello;