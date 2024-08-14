import { Table, Column, Model as SeqModel, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Domain } from './domain.model';  // Adjust the path as needed

@Table({
    tableName: 'models',
    timestamps: true
})
export class Model extends SeqModel {
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

    @BelongsTo(() => Domain)
    domain!: Domain;

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
}
