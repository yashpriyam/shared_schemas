import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'analysis',
    timestamps: false
})
export class Analysis extends Model {
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
    mlApiRequestId?: number;

    @Column({
        type: DataType.STRING(255),
        allowNull: true
    })
    status?: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    completion?: number;

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    result?: object;
}
