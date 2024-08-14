import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserModel ,Upload} from './index';

@Table({
    tableName: 'user_model_dataset',
    timestamps: true
})
export class UserModelDataset extends Model {
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

    @ForeignKey(() => Upload)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    uploadId!: number;

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

    @BelongsTo(() => UserModel, 'modelId')
    userModel!: UserModel; // Define association with UserModel

    @BelongsTo(() => Upload, 'uploadId')
    upload!: Upload; // Define association with Upload model
}
