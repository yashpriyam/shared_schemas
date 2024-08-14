import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'layer_details',
  timestamps: true,
})
export class LayerDetails extends Model {
  @Column({
    type: DataType.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  })
  id!: number;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  layername!: string;

  @Column({
    type: DataType.STRING(60),
    allowNull: false,
  })
  original_names!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  style!: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  type!: string;

  @Column({
    type: DataType.STRING(15),
    allowNull: false,
  })
  label!: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  layer_columns!: string;
}
