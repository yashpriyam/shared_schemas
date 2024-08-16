import { Sequelize } from "sequelize-typescript";
import {
  User,
  Action,
  Analysis,
  AnalysisArchive,
  AnalysisComment,
  Assessment,
  Dataset,
  DatasetAsset,
  Domain,
  Model,
  ModelParameter,
  Operation,
  Organization,
  Project,
  ProjectTag,
  Resource,
  Role,
  RolePermission,
  Upload,
  UserAOI,
  UserModel,
  UserModelClass,
  UserModelDataset,
  UserModelDatasetAnnotation,
  UserModelParameter,
  UserOrganization,
  UserProject,
  VulnerabilityType,
  Workspace,
  WorkspaceAssessment,
  WorkspaceModel,
  WorkspaceVulnerabilityType,
  LayerDetails
} from "../portal-models"; // Import all your models here

const portalModels = [
  User,
  Action,
  Analysis,
  AnalysisArchive,
  AnalysisComment,
  Assessment,
  Dataset,
  DatasetAsset,
  Domain,
  Model,
  ModelParameter,
  Operation,
  Organization,
  Project,
  ProjectTag,
  Resource,
  Role,
  RolePermission,
  Upload,
  UserAOI,
  UserModel,
  UserModelClass,
  UserModelDataset,
  UserModelDatasetAnnotation,
  UserModelParameter,
  UserOrganization,
  UserProject,
  VulnerabilityType,
  Workspace,
  WorkspaceAssessment,
  WorkspaceModel,
  WorkspaceVulnerabilityType,
  LayerDetails
];


export const portalSequelize = new Sequelize({
  database: process.env.PORTAL_DB_NAME || "portal",
  username: process.env.PORTAL_DB_USER || "user",
  password: process.env.PORTAL_DB_PASSWORD || "password",
  host: process.env.PORTAL_DB_HOST || "portal-db",
  port: Number(process.env.PORTAL_DB_PORT) || 5432,
  dialect: "postgres",
  models: portalModels,
});

portalSequelize.addModels(portalModels);

portalSequelize
  .sync({ force: true }) // or sequelize.sync()
  .then(() => {
    console.log("Database & tables created!");
  })
  .catch((error) => {
    console.error("Error syncing the database:", error);
  });

console.log(
  "Registered Models:",
  portalSequelize.modelManager.models.map((model) => model.name)
);

if (!portalSequelize.isDefined("IndicesAppSentinelFormulas")) {
  console.error("Model IndicesAppSentinelFormulas is not defined");
}
