import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'resources',
    timestamps: false
})
export class Resource extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: false,
        unique: true
    })
    resource!: string;
}

