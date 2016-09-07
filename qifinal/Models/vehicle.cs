using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
namespace qisep07.Models
{
    public class vehicle
    {
        [Key]
        public string vehno { get; set; }
        public string vehdesc { get; set; }

        public string vehimg { get; set; }
    }
}