import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Workspace, Assessment, IndicesAppSentinelFormulas } from "./index";

@Table({
  tableName: "workspace_assessments",
  timestamps: true,
})
export class WorkspaceAssessment extends Model {
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

  @ForeignKey(() => Assessment)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  assessmentId?: number;
  
  @BelongsTo(() => Assessment, "assessmentId")
  assessment?: Assessment; // Define association with Assessment model
  
  @ForeignKey(() => IndicesAppSentinelFormulas)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  indicesId!: number;

  @BelongsTo(() => IndicesAppSentinelFormulas, "indicesId")
  indicesAppSentinelFormulas!: IndicesAppSentinelFormulas;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  from!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  to!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  createdAt!: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  updatedAt!: Date;
}
