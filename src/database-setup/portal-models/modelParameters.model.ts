import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'model_parameters',
    timestamps: true
})
export class ModelParameter extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    parameter?: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    slug?: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    type?: string;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    default?: string;

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
