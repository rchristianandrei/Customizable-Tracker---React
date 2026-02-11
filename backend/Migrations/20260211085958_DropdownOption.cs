using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace backend.Migrations
{
    /// <inheritdoc />
    public partial class DropdownOption : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DropdownOption_DropdownComponents_DropdownComponentId",
                table: "DropdownOption");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DropdownOption",
                table: "DropdownOption");

            migrationBuilder.DropColumn(
                name: "OrderIndex",
                table: "DropdownOption");

            migrationBuilder.RenameTable(
                name: "DropdownOption",
                newName: "DropdownOptionComponents");

            migrationBuilder.RenameIndex(
                name: "IX_DropdownOption_DropdownComponentId",
                table: "DropdownOptionComponents",
                newName: "IX_DropdownOptionComponents_DropdownComponentId");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateTimeCreated",
                table: "DropdownOptionComponents",
                type: "datetime(6)",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddPrimaryKey(
                name: "PK_DropdownOptionComponents",
                table: "DropdownOptionComponents",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DropdownOptionComponents_DropdownComponents_DropdownComponen~",
                table: "DropdownOptionComponents",
                column: "DropdownComponentId",
                principalTable: "DropdownComponents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DropdownOptionComponents_DropdownComponents_DropdownComponen~",
                table: "DropdownOptionComponents");

            migrationBuilder.DropPrimaryKey(
                name: "PK_DropdownOptionComponents",
                table: "DropdownOptionComponents");

            migrationBuilder.DropColumn(
                name: "DateTimeCreated",
                table: "DropdownOptionComponents");

            migrationBuilder.RenameTable(
                name: "DropdownOptionComponents",
                newName: "DropdownOption");

            migrationBuilder.RenameIndex(
                name: "IX_DropdownOptionComponents_DropdownComponentId",
                table: "DropdownOption",
                newName: "IX_DropdownOption_DropdownComponentId");

            migrationBuilder.AddColumn<int>(
                name: "OrderIndex",
                table: "DropdownOption",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddPrimaryKey(
                name: "PK_DropdownOption",
                table: "DropdownOption",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_DropdownOption_DropdownComponents_DropdownComponentId",
                table: "DropdownOption",
                column: "DropdownComponentId",
                principalTable: "DropdownComponents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
