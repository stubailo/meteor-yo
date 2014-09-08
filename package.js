Package.describe({
  summary: "Meteor Yo integration.",
  version: "1.0.0",
  git: ""
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.addFiles('yo.js');
});
