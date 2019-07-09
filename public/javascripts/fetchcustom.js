let total=0;
const fetchSaveNote=(url,params)=>{
  let response=fetch(url,{
      method:'POST',
      headers:{
        'Content-Type':'application/json;charset=utf-8'
      },
      body:JSON.stringify(params)
    });
    
}

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

const fetchNotes=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    element.innerText=data.name;
    myNote=data._id;
    //console.log(data.code);
    

  })
}
const fetchTables=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    element.innerText=data.name;
    myTable=data._id;
    //console.log(data.code);
    

  })
}
const fetchItensNotes=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{
  
  //console.log(`data - ${data.price}`);
  let myPrice=data.price.$numberDecimal.toString();
  //console.log(`price - ${myPrice}`);
  let tr=document.createElement('tr');
  let tBody=document.getElementById(element);
  
  tr.innerHTML =`<td>${data.product}</td><td>${myPrice.toString()}</td>`;
  tBody.appendChild(tr);
  
  let spanTotal=document.getElementById('total');
      spanTotal.innerHTML=`<p class="flow-text">${totalItem(myPrice)}</p>`;

      let db={
        _id:data._id
      }
      myMenu.push(db);

      console.log(myPrice)
  })
}


const totalItem=(val)=>{
  
  total += parseFloat(val);
  //  console.log(total)
   // total=subtotal.toFixed(2);
   // total=;
    return total.toFixed(2);
}

const fetchGetWaiters=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    element.innerHTML=contentWaiter(data.name,data.login,data._id);
    
    //console.log(data.code);
    

  })
}

let contentWaiter=(name,login,id)=>{
      
  return (`

  <div style="margin-top:5em;">
  <div class="input-field col s6" >
      <input type="text" palceholder="Nome Completo" id="name" name="name" value="${name}" >
      <label class="active" for="name">Nome da Mesa</label>
  </div>
  <div class="input-field col s6" >
      <input type="email" palceholder="Digite seu email" id="login" name="login" value="${login}" >
      <label class="active" for="login">Login</label>
  </div>
  <div class="input-field col s6" >
      <input type="password" palceholder="senha" id="password" name="password" >
      <label for="password">Digite a Senha</label>
  </div>
  <div class="input-field col s6" >
      <input type="password" palceholder="Rpita a senha " id="re_password" name="re_password" >
      <label for="re_password">Repita a Senha</label>
  </div>
    <input type="hidden" id="id" name="id" value="${id}" >
  
</div>

  `);

}

const fetchGetTables=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    element.innerHTML=contentTable(data.name,data.code,data._id);
    myTable=data._id;
    //console.log(data.code);
    

  })
}

let contentTable=(name,code,id)=>{
      
  return (`

  <div style="margin-top:5em;">
    <div class="input-field col s6" >
        <input type="text"  id="name" name="name" value="${name}" >
        <label for="name" class="active">Nome da Mesa</label>
    </div>
    <div class="input-field col s6" >
        <input type="number"  id="code" name="code" value="${code}">
        <label for="code" class="active">Código da Mesa</label>
    </div>
    <input type="hidden" id="id" name="id" value="${id}">
    
  </div>

  `);

}

const fetchGetMenus=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    

   

    element.innerHTML=contentMenu(data.product,data.code,data.description,data.price,data._id);
    
    //console.log(data.code);
    

  })
}

let contentMenu=(product,code,description,price,id)=>{
      
  return (`

    <div style="margin-top:5em;">
        <div class="input-field col s6" >
            <input type="text" palceholder="Nome do Produto" id="product" name="product" value="${product}" >
            <label for="name" class="active">Nome do Produto</label>
        </div>
        <div class="input-field col s6" >
            <input type="number" palceholder="Digite o Código" id="code" name="code" value="${code}">
            <label for="login" class="active">Código do Produto</label>
        </div>
        <div class="input-field col s6" >

           <textarea id="descricption" class="materialize-textarea" name="description" >${description}</textarea>
            <label for="password" class="active">Descrição</label>
        </div>
        <div class="input-field col s6" >
            <input type="number"  id="price" name="price" step="any" value="${price}">
            <label for="re_password" class="active">Preço</label>
        </div>
        <input type="hidden" id="id" name="id" value="${id}">
        
      </div>
  `);

}
const fetchGetNotes=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    element.innerHTML=contentNote(data.name,data.code,data._id);
    
    //console.log(data.code);
    

  })
}

let contentNote=(name,code,id)=>{ 
      
  return (`

  <div style="margin-top:5em;">
    <div class="input-field col s6" >
        <input type="text"  id="name" name="name" value="${name}" >
        <label for="name" class="active">Nome da Comanda</label>
    </div>
    <div class="input-field col s6" >
        <input type="number"  id="code" name="code" value="${code}">
        <label for="code" class="active">Código da Comanda</label>
    </div>
    <input type="hidden" id="id" name="id" value="${id}">
    
  </div>

  `);

}
const fetchGetCashiers=(url,element)=>{
  let st=fetch(url,{
    method:'GET',
    headers:{
      'Content-Type':'application/json;charset=utf-8'
    },

  })
  .then(response=>{
      //console.log(data.json());
      return response.json();

  }).then(data=>{

    let elem=document.getElementById(element);
    let li=document.createElement('li');
   // li.classList.add('blue-grey', 'darken-1');
    let body=document.createElement('div');
    body.classList.add('collapsible-body');
    data.map((f)=>{
     // 
      if(f.tables === elem.id){
        let header=`<div class="collapsible-header blue-grey darken-1" id="${f.notes._id}">${f.notes.name}</div>`;
        li.innerHTML +=header;
       // console.log(f.notes.name)
     
      f.menus.map((menu)=>{
       // let body=`<div class="collapsible-body"><span>${menu._id.product} - </span><span>R$ ${menu._id.price.$numberDecimal}</span></div>`
        let span=`
        <span>
          <div class="row">
            <div class="col s6">${menu._id.product}</div>
            <div class="col s6">${menu._id.price.$numberDecimal}</div>
          </div>
         
        </span>
        ` 
       body.innerHTML +=span;
        console.log(menu._id.price)
      }).join('')
      li.appendChild(body);
    }
    }).join('')
   
    elem.appendChild(li);
   
   

    //console.log(data);
   
    

  })
}

