import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model'; // Adjust the import path based on your project structure

@Table({
    tableName: 'proximity_results',
    timestamps: true
})
export class ProximityResults extends Model {
    @Column({
        type: DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true
    })
    id!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    userId!: number;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    proximity_name!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    layer_names!: string;

    @Column({
        type: DataType.ARRAY(DataType.INTEGER),
        allowNull: true
    })
    relative_feature_ids!: number[];

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: true
    })
    deleted!: boolean;

    @Column({
        type: DataType.GEOMETRY,
        allowNull: true
    })
    geom!: object;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: true
    })
    createdAt!: Date;

    @Column({
        type: DataType.DATE,
        defaultValue: DataType.NOW,
        allowNull: true
    })
    updatedAt!: Date;

    @Column({
        type: DataType.STRING(20),
        allowNull: true
    })
    layer_schema!: string;

    @BelongsTo(() => User, 'userId')
    user!: User; // Define association with User model
}
