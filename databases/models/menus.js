module.exports=(sequelize,DataTypes)=>{

  const menu=sequelize.define('menu',{
      title:DataTypes.STRING,
      image:DataTypes.STRING,
      folder:DataTypes.STRING,
      description:DataTypes.TEXT,
      active:DataTypes.BOOLEAN
  });
   return menu;
}