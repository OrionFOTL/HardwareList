using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace HardwareListAPI.Models
{
    public class SSD
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]

        public int Id { get; set; }

        [Required]
        public string Vendor { get; set; }

        [Required]
        public string Model { get; set; }

        [Required]
        public double TransferRate { get; set; }

        [Required]
        public double Random4K { get; set; }

        [Required]
        public double AccessTime { get; set; }
    }
}
