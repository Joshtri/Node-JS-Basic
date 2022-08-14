import fs from "fs"; 


//konsep dari stream adalah replace. 
const writer = fs.createWriteStream("target.log"); 

writer.write("Yostri\n");
writer.write("Sugiatma\n");
writer.write("Lenggu\n");
writer.close();

writer.end();

//untuk membaca file.
const reader = fs.createReadStream("target.log"); 

//utk baca bisa pake ini
/*
reader.read();
*/

//utk baca bisa pake event / listener
reader.addListener("data", (data)=>{
    console.info(data.toString());

});

//bisa pake data.
/*
reader.on("data", function(data){
    console.info(data.toString());
    reader.close();
});
*/
