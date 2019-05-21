using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HardwareListAPI.Models
{
    public class CPU
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int Id { get; set; }

        [Required]
        public string Vendor { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public int Frequency { get; set; }

        [Required]
        public float Voltage { get; set; }

        [Required]
        public int CinebenchSingleCore { get; set; }

        [Required]
        public int CinebenchMultiCore { get; set; }

    }
}
