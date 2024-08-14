import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Domain } from './index';

@Table({
    tableName: 'indices_app_sentinel_formulas',
    timestamps: true
})
export class IndicesAppSentinelFormulas extends Model {
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
    index_name!: string;
    
    @ForeignKey(() => Domain)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    domainId?: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true
    })
    deleted?: boolean;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    index_style!: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    index_formulas!: string;

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
