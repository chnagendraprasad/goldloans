import axios from "axios";

export default axios.create({
  baseURL: "https://goldloan.itiorg.com/UPFLServicesLiveTest/api/CustomerServices/",
  headers: {
    'Authorization': "Basic Z29sZGxvYW5zbGl2ZTpQYXNzQCEyMw==",
    'Content-Type': "application/json",
  },
});
