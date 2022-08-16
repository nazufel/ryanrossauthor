const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "",
  server: "",
});

async function addMember() {
  const response = await mailchimp.lists.addListMember(, {
    email_address: "",
    status: ""});

  console.log(response);
}

async function getList() {
  const response = await mailchimp.lists.getListMembersInfo();
  console.log(response);
  
}

// addMember();
getList();