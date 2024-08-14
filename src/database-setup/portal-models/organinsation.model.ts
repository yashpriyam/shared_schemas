import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'organizations',
    timestamps: true
})
export class Organization extends Model {
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

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: true
    })
    enabled?: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false
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

