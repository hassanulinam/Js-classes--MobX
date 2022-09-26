const { runInAction } = require("mobx");
const apiConst = require("../models/apiConst");

const makeAsyncCall = async (onSuccess, onFailure, setApiStatus) => {
  setApiStatus(apiConst.inProgress);
  await Promise.resolve("200")
    .then(() => {
      setApiStatus(apiConst.success);
      onSuccess();
    })
    .catch((err) => {
      setApiStatus(apiConst.error);
      onFailure(err);
    });
};

module.exports = makeAsyncCall;

// let api = apiConst.initial;
// const setApiStatus = (s) => (api = s);
// makeAsyncCall(
//   () => console.log(123),
//   console.error("my-testing-error"),
//   setApiStatus
// );
