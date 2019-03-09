module.exports=(sequelize,DataTypes)=>{

  const sector=sequelize.define('sector',{
      sector:DataTypes.STRING,
      description:DataTypes.STRING,
      active:DataTypes.BOOLEAN
  });
   return sector;
}
