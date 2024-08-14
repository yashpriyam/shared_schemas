import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Upload } from './index';  // Adjust the import path as needed
import { Dataset } from './dataset.model';  // Adjust the import path as needed

@Table({
    tableName: 'dataset_assets',
    timestamps: true
})
export class DatasetAsset extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => Upload)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    uploadId!: number;

    @ForeignKey(() => Dataset)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    datasetId!: number;

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

    @BelongsTo(() => Upload)
    upload!: Upload;

    @BelongsTo(() => Dataset)
    dataset!: Dataset;
}
