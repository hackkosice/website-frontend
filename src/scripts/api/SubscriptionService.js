import axios from "axios";

function submit(email, recaptcha) {
  const formData = new FormData();

  formData.set("action", "mailchimp");
  formData.set("email", email);
  formData.set("g-recaptcha", recaptcha);

  return axios.post("/", formData);
}

export default {
  submit: submit
};
