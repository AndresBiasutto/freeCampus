const formatUser = (usr) => {
  const finalUser = {
    id: usr.id,
    name: usr.name,
    email: usr.email,
    contactNumber: usr.contactNumber,
    image: usr.image,
    role: usr.Role.name,
    description: usr.description,
    created: usr.created,
    password: usr.password,
    token: usr.token? usr.token: "",
    enrolledSubjects: usr.enrolledSubjects,
    createdSubjects: usr.createdSubjects
  };
  return finalUser;
};

module.exports = formatUser;
