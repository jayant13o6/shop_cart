
        // document.getElementsByClassName('add_butt').addEventListener("click",);
        var y,i,z;
        // document.querySelectorAll('.fas').addEventListener("click",function butt(){console.log("button worksss")});
        // document.getElementById("badge").innerHTML=cart();
        y=document.querySelectorAll('.add_butt');
        
        z=document.querySelectorAll('.add_butt2');
        let y_arr= Array.prototype.slice.call(y);
        let z_arr= Array.prototype.slice.call(z);
        
        let a1=document.querySelectorAll(".addButton1");
        let a1Arr= Array.prototype.slice.call(a1);


        try {
            
            y_arr.forEach(plan);
            z_arr.forEach(plan2);
            a1Arr.forEach(Add_to_cart);

            
        } catch (error) {
            console.log(error)
        }
        

        function cartAdd() {
            // add tooltip at every click
            let x=parseInt(document.querySelector('.badge').innerHTML);
            x=x+1;
            x=parseInt(x);
            document.querySelector('.badge').innerHTML=x;
        }

        function cartMinus() {
            // add tooltip at every click
            let x=parseInt(document.querySelector('.badge').innerHTML);
            x=x-1;
            x=parseInt(x);
            document.querySelector('.badge').innerHTML=x;
        }

        function plan(ele) {
                ele.addEventListener("click",cartAdd);             
            }

        function plan2(ele) {
                ele.addEventListener("click",cartMinus);                
            }
        
        function individual_qty(){

        }

        function Add_to_cart(ele) {
            ele.addEventListener('click',function showButton(e) {
                
                // target is the last button

                // console.log(e.target.parentElement);           //parent class is media

                // console.log(e.target.previousElementSibling);   //previous element is class=symbol
                
                node=e.target.previousElementSibling;               // node is class symbol
                
                para_node=(node.previousElementSibling.firstChild.nextElementSibling);   // node for para class
                
                i_qty=para_node.firstChild.nextElementSibling.nextElementSibling;
                
                // qty=(i_qty.firstChild.nextElementSibling.innerHTML);
                
                add_button=node.firstChild.nextElementSibling                            // add button
                sub_button=(node.childNodes[2].nextElementSibling.nextElementSibling);   // sub button
                
                new_element = add_button.querySelector('.fas');                       // add symbol button
                new_element2 = sub_button.querySelector('.fas');                      // sub symbol button

                // console.log(add_button);
                console.log(i_qty.innerHTML);
                // console.log(qty[5]);

                       
                e.target.previousElementSibling.style.display='block';  // hide add button
                e.target.style.display='none';    // show + and - icons
                console.log('called');
                
                
                function iqty()                                 // method to increase individual qty:
                {   
                    // console.log(i_qty);
                    // console.log(i_qty.innerHTML)
                    // var qty=(i_qty.firstChild.nextElementSibling.innerHTML);
                    // console.log(qty);
                    var x = parseInt(i_qty.innerHTML[4]);
                    x=x+1;
                    
                    // console.log(new_element);   
                    (i_qty.innerHTML='Qty:'+ x);
                };

                
                function rqty() {             // method to remove an item:
                    
                    var x = parseInt(i_qty.innerHTML[4]);
                    // if x>0:
                    x=x-1;
                    (i_qty.innerHTML='Qty:'+ x);
                }
                
                new_element.addEventListener('click',iqty);
                new_element2.addEventListener('click',rqty);
         
            })            
        }
    // </script>
