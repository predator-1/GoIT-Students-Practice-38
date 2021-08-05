//Courses work interface and rise error

const courses = ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL'];

const addCource = name => {
  if (courses.includes(name)) {
    console.log(`${name} exists`);
    return;
  }

  courses.push(name);
  console.log(courses);
};

const updateCourse = (name, newName) => {
  const nameIndex = courses.indexOf(name);
  if (nameIndex < 0) {
    console.log(`${name} does not exist`);
    return;
  }

  newName !== null
    ? courses.splice(nameIndex, 1, newName)
    : courses.splice(nameIndex, 1);

  console.log(courses);
};

const removeCource = name => updateCourse(name, null);

addCource('Express');
addCource('HTML');
removeCource('React');
updateCourse('Express', 'NestJS');
