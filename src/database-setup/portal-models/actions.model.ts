import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
  tableName: "actions",
  timestamps: false,
})
export class Action extends Model {
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
  action!: string;
}
