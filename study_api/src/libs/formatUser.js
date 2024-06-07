const formatUser = (usr) => {
  const finalUser = {
    id: usr.dataValues.id,
    name: usr.dataValues.name,
    email: usr.dataValues.email,
    contactNumber: usr.dataValues.contactNumber,
    image: usr.dataValues.image,
    role: usr.dataValues.Role.dataValues.name,
    description: usr.description,
    created: usr.created,
    password: usr.password,
    token: usr.token? usr.token: ""
  };
  return finalUser;
};

module.exports = formatUser;
