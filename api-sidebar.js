module.exports = [
  {
    type: "category",
    label: "Packages",
    items: [
      {
        type: "category",
        label: "@checkup/cli",
        items: [
          "api/@checkup/cli/CheckupTaskRunner",
          "api/@checkup/cli/file-writer",
          "api/@checkup/cli/get-formatter",
        ],
        collapsed: false,
      },
      {
        type: "category",
        label: "@checkup/core",
        items: [
          "api/@checkup/core/AstAnalyzer",
          "api/@checkup/core/AstTransformer",
          "api/@checkup/core/BaseMigrationTask",
          "api/@checkup/core/BaseTask",
          "api/@checkup/core/BaseValidationTask",
          "api/@checkup/core/CheckupError",
          "api/@checkup/core/CheckupLogBuilder",
          "api/@checkup/core/CheckupLogParser",
          "api/@checkup/core/DependencyAnalyzer",
          "api/@checkup/core/HandlebarsAnalyzer",
          "api/@checkup/core/JavaScriptAnalyzer",
          "api/@checkup/core/JsonAnalyzer",
          "api/@checkup/core/TaskError",
          "api/@checkup/core/error-kind",
          "api/@checkup/core/normalize-package-name",
          "api/@checkup/core/plugin-name",
        ],
        collapsed: false,
      },
    ],
    collapsed: false,
  },
];
