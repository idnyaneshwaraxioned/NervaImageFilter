/* Author: 

*/

function imageFilter (){

    let filterlist = document.querySelectorAll('.filter-list li');
    let imageitem = document.querySelectorAll('.imageItem');

    for(let i=0; i<filterlist.length; i++){
        filterlist[i].addEventListener('click',function(){
            let filterVal = this.querySelector('a').getAttribute('title');
            // console.log(filterVal);
            // let imgAtr = imageitem[i].getAttribute('data-filter');
            // console.log(imgAtr);
            
            imageitem.forEach(function(val){
                let abc = val.getAttribute('data-filter');
                if (abc===filterVal){
                    val.style.display = ""
                }
                else{
                    val.style.display = "none";
                }
                
                if(filterVal==="all"){
                    val.style.display = "";
                }
            });

            // if(filterVal===imgAtr){
            //     imageitem[i].style.display = ""; 
            // }
            // else {
            //     imageitem[i].style.display = "none"; 
            // }
        })
    }

}

imageFilter();





















