module.exports=(sequelize,DataTypes)=>{

  const permition=sequelize.define('permition',{
      sector:DataTypes.INTEGER,
      menu:DataTypes.INTEGER,
      active:DataTypes.BOOLEAN
  });
   return permition;
}
