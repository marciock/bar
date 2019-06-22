let total=0;


const fetchGarcon=(url,params,element)=>{
    let response=fetch(url,{
        method:'POST',
        headers:{
          'Content-Type':'application/json;charset=utf-8'
        },
        body:JSON.stringify(params)
      });
      //let search= response.json();

       // console.log(response);

        let st=fetch(url,{
          method:'GET',
          headers:{
            "Content-Type":"text/plain;charset=UTF-8"
          },

        }).then(response=>{
            //console.log(data.json());
            return response.json();

        }).then(data=>{
          const spanElement=document.getElementById(element);
         spanElement.innerHTML=`<p class="flow-text">${data.name}</p>`;
          spanElement.dataset.name=data.name;
                                         
                     
        })
}



const fetchItens=(url,params,element)=>{
  let response=fetch(url,{
    method:'POST',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },
    body:JSON.stringify(params)
  });
  //let search= response.json();

   // console.log(response);

    let st=fetch(url,{
      method:'GET',
      headers:{
        "Content-Type":"text/plain;charset=UTF-8"
      },

    }).then(response=>{
        //console.log(data.json());
        return response.json();

    }).then(data=>{
      
      const tBodyd=document.getElementById(element);
      const tr=document.createElement('tr');
     
        tr.innerHTML=`<td >${data.product}</td><td>${data.price}</td>`;
        tBodyd.appendChild(tr);

        const spanTotal=document.getElementById('total');
        spanTotal.innerHTML=`<p class="flow-text">${totalItem(data.price)}</p>`;
       
      //return data;
    })
}

const totalItem=(val)=>{

  total += parseFloat(val);
  //  console.log(total)
    return total;
}


