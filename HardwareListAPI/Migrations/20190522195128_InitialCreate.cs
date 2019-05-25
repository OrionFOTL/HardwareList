using Microsoft.EntityFrameworkCore.Migrations;

namespace HardwareListAPI.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CPUs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Vendor = table.Column<string>(nullable: false),
                    Model = table.Column<string>(nullable: false),
                    Frequency = table.Column<int>(nullable: false),
                    Voltage = table.Column<float>(nullable: false),
                    CinebenchSingleCore = table.Column<int>(nullable: false),
                    CinebenchMultiCore = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CPUs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "GPUs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Vendor = table.Column<string>(nullable: false),
                    Model = table.Column<string>(nullable: false),
                    CoreClock = table.Column<int>(nullable: false),
                    MemoryClock = table.Column<int>(nullable: false),
                    Voltage = table.Column<float>(nullable: false),
                    FireStrikeScore = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GPUs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HDDs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Vendor = table.Column<string>(nullable: false),
                    Model = table.Column<string>(nullable: false),
                    TransferRate = table.Column<double>(nullable: false),
                    Random4K = table.Column<double>(nullable: false),
                    AccessTime = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HDDs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SSDs",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Vendor = table.Column<string>(nullable: false),
                    Model = table.Column<string>(nullable: false),
                    TransferRate = table.Column<double>(nullable: false),
                    Random4K = table.Column<double>(nullable: false),
                    AccessTime = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SSDs", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CPUs");

            migrationBuilder.DropTable(
                name: "GPUs");

            migrationBuilder.DropTable(
                name: "HDDs");

            migrationBuilder.DropTable(
                name: "SSDs");
        }
    }
}
