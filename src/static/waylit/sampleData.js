const startCaseData = [
  {
    id: 1,
    candidate: "Lewis Hamilton",
    jobTitle: "Driver",
    type: "F-1",
  },
  {
    id: 2,
    candidate: "Lando Norris",
    jobTitle: "Driver",
    type: "J-1",
  },
  {
    id: 3,
    candidate: "Toto Wolf",
    jobTitle: "CEO",
    type: "F-1",
  },
];

const taskTableData = [
  {
    id: 1,
    status: "completed",
    task: "Prevailing Wage",
    comments: 2,
    date: "10/10/2020",
    assignee: "Unassigned"
  },
  {
    id: 2,
    status: "started",
    task: "Attorney Recommended Wage",
    comments: 6,
    date: "10/20/2020",
    assignee: "Anderson Paak"
  },
  {
    id: 3,
    status: "not started",
    task: "Management Recommended Wage",
    comments: "",
    date: "10/30/2020",
    assignee: "Frank Ocean"
  },  
];

const selectInputData = [
  {
    id: 0,
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Tom Cook",
    selected: true,
  },
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1568409938619-12e139227838?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Caroline Schultz",
    selected: false,
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    name: "Wade Cooper",
    selected: false,
  }
]

export { startCaseData, taskTableData, selectInputData, };