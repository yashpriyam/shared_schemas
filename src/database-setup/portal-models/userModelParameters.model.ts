import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModel } from './index';

@Table({
    tableName: 'user_model_parameters',
    timestamps: true
})
export class UserModelParameter extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    modelId!: number;

    @Column({
        type: DataType.DOUBLE,
        allowNull: true
    })
    metricsPrecisionB?: number;

    @Column({
        type: DataType.DOUBLE,
        allowNull: true
    })
    metricsRecallB?: number;

    @Column({
        type: DataType.DOUBLE,
        allowNull: true
    })
    metricsMAP50B?: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    epoch?: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true,
        defaultValue: 0
    })
    progressPercentage?: number;

    @Column({
        type: DataType.JSONB,
        allowNull: true
    })
    progressHistory!: object[];

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

    @BelongsTo(() => UserModel, 'modelId')
    userModel!: UserModel; // Define association with UserModel
}
