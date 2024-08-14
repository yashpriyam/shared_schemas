import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Analysis } from './index';  // Adjust the import path as needed

@Table({
    tableName: 'analysis_archive',
    timestamps: true
})
export class AnalysisArchive extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => Analysis)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    analysisId!: number;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    mlApiRequestId?: number;

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

    @Column({
        type: DataType.JSON,
        allowNull: true
    })
    result?: object;

    @BelongsTo(() => Analysis)
    analysis!: Analysis;
}
