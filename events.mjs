import { EventEmitter } from "events";


const emitter = new EventEmitter(); 

emitter.addListener("Hello",(name) => {
    console.info(`Helo ${name}`);
})

emitter.addListener("Hello", (name) => { 
    console.info(`halo gaes ${name}`);
})



//apabila jenis events beda makan tidak akan di trigger pada listener emmiter diatas. 
    /*
    emitter.emit("beda", "Eko")
    */
// jadi events harus sama seperti yang dibawah. 
emitter.emit("Hello", "Eko")