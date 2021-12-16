var obj = {
	"type": "Buffer",
	"data": [123,34,105,100,115,34,58,91,48,93,125]
}
var buf = new Buffer.from(JSON.stringify(obj));
//console.log(buf);
var temp = JSON.parse(buf.toString());
var temp2 = temp["data"]
var buf2 = new Buffer.from(temp2);
var temp3 = JSON.parse(buf2.toString());
var buf3 = new Buffer.from(JSON.stringify(temp3));
var temp4 = JSON.parse(buf3.toString());
var temp5 = temp4["ids"]
var ids = temp5
console.log(temp5.indexOf(0));
