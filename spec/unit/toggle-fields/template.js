var template = [
  '<form>',
  '<input id="password" name="password" type="password"/>',
  '<input id="confirmPassword" name="confirmPassword" type="password">',
  '<p class="rus-form-note">',
  '<a title="Show my typing" href="#" class="rus-show_multipassword" aria-controls="password confirmPassword">Show my typing</a>',
  '</p>',
  '</form>'
].join(',');

module.exports = template;
