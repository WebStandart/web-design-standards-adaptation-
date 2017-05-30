var select = require('../../utils/select');
var addClass = require('../../utils/add-class');
var removeClass = require('../../utils/remove-class');
var dispatch = require('../../utils/dispatch');

function toggleClass (element, className) {
  if (element.classList) {
    element.classList.toggle(className);
  }
}

function mobileInit () {
  var navElements = select('.rus-menu-btn, .rus-overlay, .rus-nav-close');
  var toggleElements = select('.rus-overlay, .rus-nav');
  var navCloseElement = select('.rus-nav-close')[ 0 ];

  navElements.forEach(function (element) {
    dispatch(element, 'click touchstart', function (e) {
      toggleElements.forEach(function (element) {
        toggleClass(element, 'is-visible');
      });
      toggleClass(document.body, 'rus-mobile_nav-active');
      navCloseElement.focus();
      return false;
    });
  });
}

module.exports = mobileInit;