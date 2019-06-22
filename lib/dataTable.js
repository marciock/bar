const records=require('../lib/records');
const search=(args,socket,out)=>{

    const io=socket;

       let rec= records(args)
   // io.emit(out,args.toString());
    io.emit(out,rec);


}

module.exports=search;



