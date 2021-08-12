/**
 * Create team
 */

const ROLES = {
  FRONTEND: 'front-end',
  BACKEND: 'back-end',
  PM: 'project manager',
};

const members = {}; // each member has 'name', 'salary', 'role'

const createMember = (salary, role) => {
  if (!Object.values(ROLES).includes(role)) {
    console.log('invalid role');
    return;
  }

  if (!(salary > 0)) {
    console.log('invalid salary');
    return;
  }

  return {
    salary,
    role,
  };
}; //factory

const addMemberByName = (name, currentMember) => {
  if (members.hasOwnProperty(name)) {
    console.log(`${name} exists`);
    return;
  }

  members[name] = currentMember;
};

const addMembers = (...freshmens) => {
  for (let freshmen of freshmens) {
    const [name, currentMember] = freshmen;
    addMemberByName(name, currentMember);
  }
};

const removeMemberByName = name => {
  delete members[name];
};

const getMembersCount = () => {
  return Object.keys(members).length;
};

const getTeamCost = () => {
  const keys = Object.keys(members);
  let total = 0;
  for (let key of keys) {
    total += members[key].salary;
  }
  return total;
}; // all members salaries

const getAvarageSalary = () => {
  return getTeamCost() / getMembersCount();
};

const removeMembersByRole = role => {
  const keys = Object.keys(members);
  for (const key of keys) {
    if (role === members[key].role) {
      delete members[key];
    }
  }
};

//addMembers(['name', createMember(1000, ROLES.BACKEND)], )

addMemberByName('alex', createMember(1500, ROLES.BACKEND));
addMembers(
  ['kriss', createMember(2000, ROLES.FRONTEND)],
  ['anna', createMember(1800, ROLES.PM)],
  ['nadia', createMember(2300, ROLES.BACKEND)],
);

removeMemberByName('kriss');

console.log(members);
console.log(getTeamCost());
console.log(Math.floor(getAvarageSalary()));
removeMembersByRole(ROLES.BACKEND);
console.log(members);
