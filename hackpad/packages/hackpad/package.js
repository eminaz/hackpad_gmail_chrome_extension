Package.describe({
  summary: "hackpad"
});

Npm.depends({
  "hackpad":"0.0.2"
});

Package.on_use(function (api) {
  api.add_files('hackpad.js', 'server');
});
