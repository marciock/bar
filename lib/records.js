const tables=require('../data/tables');
const clients=require('../data/clients');
const products=require('../data/products');


const records=(record)=>{


    let myFind;
   // let myArray=['teste','teste'];

    
   // console.log(record.table)

  
    switch (record.db) {
        case 'tables':
                tables.forEach(f=>{
                    if(f.id===record.code){
                        myFind ={
                            id:f.id,
                            name:f.name
                        };
                    }
                });
            
            break;
            case 'clients':
                clients.forEach(f=>{
                    if(f.id===record.code){
                        myFind ={
                            id:f.id,
                            name:f.name
                        };
                    }
                });
            
            break;
            case 'products':
                products.forEach(f=>{
                    if(f.id===record.code){
                        //console.log(f);
                       
                        myFind ={
                            id:f.id,
                            product:f.product,
                            price:f.price
                        };
                       // console.log(myFind);
                    }
                });
            
            break;
            
            
    
        default:
            break;
    }

    

    //console.log(`records - ${myFind}`)
    return myFind;

}

module.exports=records;