module.exports=(sequelize,DataTypes)=>{

  const user=sequelize.define('user',{
      name:DataTypes.STRING,
      email:DataTypes.STRING,
      password:DataTypes.STRING,
      sector:DataTypes.INTEGER,
      active:DataTypes.BOOLEAN
  });
   return user;
}
