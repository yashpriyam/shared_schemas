import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { User } from './user.model'; // Adjust the import path based on your project structure

enum NotificationType {
    EMAIL = 'email',
    BROWSER = 'browser',
    BROWSER_EMAIL = 'browser-email'
}

@Table({
    tableName: 'notifications',
    timestamps: true
})
export class Notification extends Model {
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
        type: DataType.TEXT,
        allowNull: true
    })
    msgHTML!: string;

    @Column({
        type: DataType.ENUM(...Object.values(NotificationType)),
        allowNull: true
    })
    notificationType!: NotificationType;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    entityType!: string;

    @Column({
        type: DataType.STRING(50),
        allowNull: true
    })
    entitySlug!: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    entityId!: number;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: true
    })
    read!: boolean;

    @Column({
        type: DataType.BOOLEAN,
        defaultValue: false,
        allowNull: true
    })
    sent!: boolean;

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

    @BelongsTo(() => User)
    user!: User; // Define association with User model
}
