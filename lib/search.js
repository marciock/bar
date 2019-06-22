const recordSearch=require('../lib/recordsearch');
const search=(args,socket,out)=>{

    const io=socket;

     let rec= recordSearch(args);
   // io.emit(out,args.toString());
   // io.emit(out,rec);
    
  // console.log(`eh o rec- ${JSON.stringify(args)}`);
   io.emit(out,rec);


}

module.exports=search;



