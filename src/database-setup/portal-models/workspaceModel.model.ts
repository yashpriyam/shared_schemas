import {
  Table,
  Column,
  Model as SeqModel,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Workspace, UserModel } from "./index";

@Table({
  tableName: "workspace_models",
  timestamps: false,
})
export class WorkspaceModel extends SeqModel {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => Workspace)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  workspaceId!: number;

  @BelongsTo(() => Workspace, "workspaceId")
  workspace!: Workspace; // Define association with Workspace model

  @ForeignKey(() => UserModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  modelId!: number;

  @BelongsTo(() => UserModel, "modelId")
  model!: UserModel; // Define association with Model model
}
