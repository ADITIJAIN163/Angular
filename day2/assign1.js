// let col=(st1:string,st2:string,st3:string)=>{console.log(st1+st1.length+st2+st2.length+st3+st3.length)}
// console.log(col('meera','m','ee'));
// let Sorted=(num:number[]):number[]=>{return num.sort((a,b)=>(a-b))}
// console.log(Sorted([24,2,56,6]));
//let check=(str:string):boolean=>{if(((str.split('')).reverse()).join('')==str)return true;else return false;}
//console.log(check('noo'));
// class Item{
//     itemId:number;
//      itemName:string;
//      itemPrice:number;
//      category:string;
//      constructor(itemid:number,itemname:string,itemprice:number,Category:string)
//      {
//      this.itemId=itemid;
//      this.itemName=itemname;
//      this.itemPrice=itemprice;
//      this.category=Category;
//      }
// }
// let i1=new Item(1,"cello",10,"pen");
// let i2=new Item(2,"classmate",50,"stationery");
// let func2=(obj:Item)=>{
//     console.log(obj);
// }
// console.log(func2(i1));
// console.log(func2(i2))
// interface shape
// {
//     shapename:string;
// printname:()=>string;
// }
// class Cone implements shape
// {
//     shapename: string;
//     length:number;
//     radius:number;
//     printname:()=>"Cone";
//     constructor(shapename: string,length:number,radius:number)
//     {
//         this.shapename=shapename;
//         this.length=length;
//         this.radius=radius;
//     }
//     area=()=>{console.log(3.14*this.length*this.radius)};
// }
// let cone=new Cone("cone",10,10);
// cone.area();
// class Sphere implements shape
// {
//     shapename: string;
//     radius:number;
//     printname:()=>"Sphere";
//     constructor(shapename: string,radius:number)
//     {
//         this.shapename=shapename;        
//         this.radius=radius;
//     }
//     area=()=>{console.log(4*this.radius*this.radius)};
// }
// let sph=new Sphere("sphere",10);
// sph.area();
// class Rectangle implements shape
// {
//     shapename: string; 
//     length:number;
//     breadth:number;
//     printname:()=>"Rectangle";
//     constructor(shapename: string,length:number,breadth:number)
//     {
//         this.shapename=shapename;        
//         this.length=length;
//         this.breadth=breadth;
//     }
//     area=()=>{console.log(this.length*this.breadth)};
// }
// let rect=new Rectangle("Rectangle",10,10);
// rect.area();
var Alpha = /** @class */ (function () {
    function Alpha() {
        var _this = this;
        this.setval = function (alp) { alp = _this.alp; };
        this.checkval = function (alp) { if (alp[0] == 'a' || alp[0] == 'e' || alp[0] == 'i' || alp[0] == 'o' || alp[0] == 'u')
            return true;
        else
            return false; };
        this.count = function (alp) {
            if (_this.checkval(alp)) {
                for (var i = 1; i < alp.length; i++) {
                    if (alp[0] != 'a' && alp[0] != 'e' && alp[0] != 'i' && alp[0] != 'o' && alp[0] != 'u')
                        _this.sumc = _this.sumc + 1;
                }
                return _this.sumc;
            }
            else {
                for (var i = 1; i < alp.length; i++) {
                    if (alp[0] == 'a' || alp[0] == 'e' || alp[0] == 'i' || alp[0] == 'o' || alp[0] == 'u')
                        _this.sumv = _this.sumv + 1;
                }
                return _this.sumv;
            }
        };
    }
    return Alpha;
}());
var c = new Alpha();
c.setval('suruchi');
console.log(c.count('suruchi'));
