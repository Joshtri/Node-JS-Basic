//Buffer Encoding.

const buffer2 = Buffer.from("Yostri Lenggu", "utf-8")

console.info(buffer2.toString())
console.info(buffer2.toString("hex"))
console.info(buffer2.toString("base64"))


const bufferBase64 = Buffer.from()