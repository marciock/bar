const products=require('../data/products');


const recordSearch=(record)=>{

    let myRecord=record;
    let myRec=[];

    products.forEach(f=>{
            
   
        for(let rec of myRecord){
            if(f.id===rec.code){
                let make;
                make={
                    id:rec.code,
                    product:f.product,
                    price:f.price,
                    tables_id:rec.tables_id,
                    tables_name:rec.tables_name,
                    clients_id:rec.clients_id,
                    clients_name:rec.clients_name
                }
                myRec.push(make);
            }

            
            //console.log(`Record - ${rec.db}`)

            
        }
    })
    console.log(myRec);
    return myRec;
}

module.exports=recordSearch;