import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { User, Role, Organization } from "./index";

@Table({
  tableName: "user_organizations",
  timestamps: false,
})
export class UserOrganization extends Model {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId!: number;

  @ForeignKey(() => Organization)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  organizationId!: number;

  @ForeignKey(() => Role)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  roleId!: number;

  @BelongsTo(() => User, "userId")
  user!: User; // Define association with User model

  @BelongsTo(() => Organization, "organizationId")
  organization!: Organization; // Define association with Organization model

  @BelongsTo(() => Role, "roleId")
  role!: Role; // Define association with Role model
}
