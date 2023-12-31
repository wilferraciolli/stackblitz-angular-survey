export const surveyJson = {
  elements: [
    {
    name: "FirstName",
    title: "Enter your first name:",
    type: "text"
  },
   {
    name: "LastName",
    title: "Enter your last name:",
    type: "text"
  }
]
};

export const surveyJsonWithPages = {
  pages: [{
    name: "PersonalDetails",
    elements: [{
      type: "text",
      name: "FirstName",
      title: "Enter your first name:"
    }, {
      type: "text",
      name: "LastName",
      title: "Enter your last name:"
    }, {
      type: "panel",
      name: "Contacts",
      state: "collapsed",
      title: "Contacts (optional)",
      elements: [{
        type: "text",
        name: "Telegram",
        title: "Telegram:"
      }, {
        type: "text",
        name: "GitHub",
        title: "GitHub username:"
      }]
    }]
  }]
};

