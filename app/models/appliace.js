var applianceStateModel = {
  "light": false,
  "speaker": false,
  "computer": false,
  "heating": false
};

console.log(applianceStateModel);

var setState = function(appliance) {
  applianceStateModel[appliance] = !applianceStateModel[appliance];
};

var getState = function(appliance) {
  return applianceStateModel.appliance;
};

var operateService = {
  applianceStateModel: applianceStateModel,
  setState: setState,
  getState: getState
};

module.exports = operateService;
