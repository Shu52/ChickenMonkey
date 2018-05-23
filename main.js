//chicken Monkey by Shuaib Sajid 5/23/18

for (let i=0;i<=100;i++){
 let int = "";
 if (i % 5 == 0)
 {
     int += "Chicken";
 }
 if (i % 7 == 0){
     int += "Monkey";
 }  
 if (int == ""){
     int = i;
 }
 console.log(int)
}