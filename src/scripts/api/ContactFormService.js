import axios from "axios";

function submit(email, message, recaptcha) {
  const formData = new FormData();

  formData.set("action", "contact-us");
  formData.set("email", email);
  formData.set("message", message);
  formData.set("g-recaptcha", recaptcha);

  return axios.post("/", formData);
}

export default {
  submit: submit
};
