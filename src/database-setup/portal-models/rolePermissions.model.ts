import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Role, Operation } from "./index"; // Adjust the path based on your project structure

@Table({
  tableName: "role_permissions",
  timestamps: false,
})
export class RolePermission extends Model {
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

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  permission?: string;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId!: number;

  @BelongsTo(() => Role, "roleId")
  role!: Role;

  @ForeignKey(() => Operation)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  operationId!: number;

  @BelongsTo(() => Operation, "operationId")
  operation!: Operation;
}
