
  const person = new Person(
    "selva",
    "anand",
    32,
    "123 Main St, Anytown, india",
    "0123456789",
    "selvagoogly@gmail.com"
  );
  
  console.log(person.getFullName());
  console.log(person.toString()); 
  person.setAge(31);
  console.log(person.getAge());
  