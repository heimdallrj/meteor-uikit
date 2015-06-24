Package.describe({
  name: "thinkholic:uikit",
  version: "0.0.2",
  summary: "Meteor UIkit package -- http://getuikit.com/",
  git: "https://github.com/thinkholic/meteor-uikit/",
  documentation: ""
});

Package.onUse(function(api) {
  api.versionsFrom("1.1.0.2");
  api.use("jquery", "client");
  api.addFiles("bower_components/uikit/css/uikit.min.css", "client");
  api.addFiles("bower_components/uikit/js/uikit.min.js", "client");
});

Package.onTest(function(api) {
  api.use("tinytest");
  api.use("thinkholic:uikit");
  api.addFiles("uikit-tests.js");
});
