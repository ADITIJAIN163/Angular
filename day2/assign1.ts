//que1
// let col=(st1:string,st2:string,st3:string)=>{console.log(st1+st1.length+st2+st2.length+st3+st3.length)}
// console.log(col('meera','m','ee'));

//que2
// let Sorted=(num:number[]):number[]=>{return num.sort((a,b)=>(a-b))}
// console.log(Sorted([24,2,56,6]));

//que3
//let check=(str:string):boolean=>{if(((str.split('')).reverse()).join('')==str)return true;else return false;}
//console.log(check('noo'));


//que4
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



//que5
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


//que6
class alpha{

    classvar:string;

    getvar=()=>{return this.classvar;}

   

    checkVowel=(str:string):Boolean=>{

        if(str[0]=='a'||str[0]=='e'||str[0]=='i'||str[0]=='o'||str[0]=='u'||str[0]=='A'||str[0]=='E'||str[0]=='I'||str[0]=='O'||str[0]=='U')

        {

            return true;

        }

        return false;

    }

   

    countLetters=(str:string):number=>{

        if(this.checkVowel(str))

        {

            var count=0;

            for(var i=1;i<str.length;i++)

            {

             if(str[i]!='a'&&str[i]!='e'&&str[i]!='i'&&str[i]!='o'&&str[i]!='u'&&str[i]!='A'&&str[i]!='E'&&str[i]!='I'&&str[i]!='O'&&str[i]!='U')

             {

                count++;

             }



            }

            return count;



        }

       else

       {

        var count=0;

        for(var i=1;i<str.length;i++)

        {

         if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'||str[i]=='A'||str[i]=='E'||str[i]=='I'||str[i]=='O'||str[i]=='U')

         {

            count++;

         }

        }

        return count;

       }

    }

    setvar=(classvar:string)=>

    {

        this.classvar=classvar;

       

    }




}

let o=new alpha();

o.setvar("hey");

console.log(o.countLetters(o.getvar()));

o.setvar("aditi");

console.log(o.countLetters(o.getvar()));