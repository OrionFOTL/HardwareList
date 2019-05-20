using Microsoft.EntityFrameworkCore;
using HardwareListAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HardwareListAPI.Models
{
    public class DbContexts
    {
        public DbContexts(DbContextOptions options) : base(options)
        {

        }
        public DbSet<CPU> CPUs { get; set; }
        public DbSet<GPU> GPUs { get; set; }
        public DbSet<HDD> HDDs { get; set; }
        public DbSet<SSD> SSDs { get; set; }
    }
}
