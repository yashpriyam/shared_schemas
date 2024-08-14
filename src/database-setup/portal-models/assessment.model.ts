import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Domain } from './index';  // Adjust the import path as needed

@Table({
    tableName: 'assessments',
    timestamps: true
})
export class Assessment extends Model {
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
    name!: string;

    @ForeignKey(() => Domain)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    domainId!: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    deleted?: boolean;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: false
    })
    updatedAt!: Date;

    @BelongsTo(() => Domain)
    domain!: Domain;
}
