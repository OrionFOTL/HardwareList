﻿// <auto-generated />
using HardwareListAPI.DBContexts;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace HardwareListAPI.Migrations
{
    [DbContext(typeof(HardwareDBContext))]
    [Migration("20190520143819_InitialCreate")]
    partial class InitialCreate
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity("HardwareListAPI.Models.CPU", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CinebenchMultiCore");

                    b.Property<int>("CinebenchSingleCore");

                    b.Property<int>("Frequency");

                    b.Property<string>("Model")
                        .IsRequired();

                    b.Property<string>("Vendor")
                        .IsRequired();

                    b.Property<int>("Voltage");

                    b.HasKey("Id");

                    b.ToTable("CPUs");
                });

            modelBuilder.Entity("HardwareListAPI.Models.GPU", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CoreClock");

                    b.Property<int>("FireStrikeScore");

                    b.Property<int>("MemoryClock");

                    b.Property<string>("Model")
                        .IsRequired();

                    b.Property<string>("Vendor")
                        .IsRequired();

                    b.Property<int>("Voltage");

                    b.HasKey("Id");

                    b.ToTable("GPUs");
                });

            modelBuilder.Entity("HardwareListAPI.Models.HDD", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Model")
                        .IsRequired();

                    b.Property<string>("Random4K")
                        .IsRequired();

                    b.Property<string>("TransferRate")
                        .IsRequired();

                    b.Property<string>("Vendor")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("HDDs");
                });

            modelBuilder.Entity("HardwareListAPI.Models.SSD", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Model")
                        .IsRequired();

                    b.Property<string>("Random4K")
                        .IsRequired();

                    b.Property<string>("TransferRate")
                        .IsRequired();

                    b.Property<string>("Vendor")
                        .IsRequired();

                    b.HasKey("Id");

                    b.ToTable("SSDs");
                });
#pragma warning restore 612, 618
        }
    }
}
