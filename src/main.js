'use strict';

import $ from "jquery";

class StringManipulation{
  toUpper(str) {
    return str.toUpperCase();
  }
}

const strManiPulationObj = new StringManipulation();


$('#convertString').on('click', () => {
  const upperStr = strManiPulationObj.toUpper( $('#user-input').val() );
  $('#show-upperString').text(upperStr);
});
