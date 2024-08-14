import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModelDataset, UserModel } from './index';

@Table({
    tableName: 'user_model_dataset_annotations',
    timestamps: true
})
export class UserModelDatasetAnnotation extends Model {
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
    userModelId!: number;

    @Column({
        type: DataType.JSON,
        allowNull: false
    })
    annotation!: object;

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

    @BelongsTo(() => UserModelDataset, 'datasetId')
    dataset!: UserModelDataset; // Define association with UserModelDataset
}
