import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Project, Domain, UserAOI } from "./index";

@Table({
  tableName: "workspaces",
  timestamps: true,
})
export class Workspace extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  name!: string;

  @ForeignKey(() => Project)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  projectId!: number;

  @BelongsTo(() => Project, "projectId")
  project!: Project; // Define association with Project model

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  status?: string;

  @ForeignKey(() => UserAOI)
  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  aoiId?: number;

  @BelongsTo(() => UserAOI, "aoiId")
  userAoi!: UserAOI;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
  })
  deleted?: boolean;

  @ForeignKey(() => Domain)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  domainId!: number;

  @BelongsTo(() => Domain, "domainId")
  domain!: Domain; // Define association with Domain model

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

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  stepNumber!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  progressPercentage!: number;
}
