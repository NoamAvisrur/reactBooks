export default class appHelper {

   static cleanData = (value) => { //clean string data from characters and capitalize them
    let newValue = (value).replace(/[^\w\s]/gi, '');
    return newValue.charAt(0).toUpperCase() + newValue.substr(1).toLowerCase();
  }
}


