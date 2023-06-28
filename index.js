const person = {
    id: 2,
    gender: "mail",
  };
  
  const student = {
    name: "ravi",
    email: "ravi11@yopmail.com",
  };
  
  const newObject = { ...person, ...student }; // concatinating both the objects using spread operator
  console.log(newObject); // output: Object{id: 2, gender: "mail", name: "ravi", email: "ravi11@yopmail.com"}
  