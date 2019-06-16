const tables=require('../data/tables');
const clients=require('../data/clients');
const products=require('../data/products');


const records=(record)=>{


    let myFind='';
   // console.log(record.table)
    switch (record.db) {
        case 'tables':
                tables.forEach(f=>{
                    if(f.qrcode===record.code){
                        myFind =f.name;
                    }
                });
            
            break;
            case 'clients':
                clients.forEach(f=>{
                    if(f.qrcode===record.code){
                        myFind =f.name;
                    }
                });
            
            break;
            case 'products':
                products.forEach(f=>{
                    if(f.qrcode===record.code){
                        //console.log(f);
                        myFind ={
                            'table':record.table,
                            'client':record.client,
                            'product':f.product,
                            'price':f.price
                        };
                    }
                });
            
            break;
    
        default:
            break;
    }

    

    console.log(myFind);
    return myFind;

}

module.exports=records;