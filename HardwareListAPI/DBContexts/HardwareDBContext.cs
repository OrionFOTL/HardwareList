using HardwareListAPI.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HardwareListAPI.DBContexts
{
    public class HardwareDBContext : DbContext
    {
        public HardwareDBContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<CPU> CPUs { get; set; }
        public DbSet<GPU> GPUs { get; set; }
        public DbSet<HDD> HDDs { get; set; }
        public DbSet<SSD> SSDs { get; set; }
    }
}
