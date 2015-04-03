// javascript 语言精粹
var myObject = {
	value : 0,
	increment:function(inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
document.writeln(myObject.value);
myObject.increment(2);
document.writeln(myObject.value);


var Quo = function(string) {
	this.status = string;
}

Quo.prototype.get_status = function(){
	return this.status;
};

var myQuo = new Quo("confused");
document.writeln((myQuo.get_status()));
