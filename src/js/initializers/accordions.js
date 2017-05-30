var select = require('../utils/select');
var whenDOMReady = require('../utils/when-dom-ready');
var Accordion = require('../components/accordion');

whenDOMReady(function initAccordions () {

  var accordions = select('.rus-accordion, .rus-accordion-bordered');
  accordions.forEach(function (el) {
    new Accordion(el);
  });
});
