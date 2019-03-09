module.exports=(sequelize,DataTypes)=>{

  const menu=sequelize.define('menu',{
      title:DataTypes.STRING,
      image:DataTypes.STRING,
      folder:DataTypes.STRING,
      description:DataTypes.STRING,
      active:DataTypes.BOOLEAN
  });
   return menu;
}