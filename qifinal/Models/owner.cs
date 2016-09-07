using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace qisep07.Models
{
    public class owner
    {
        [Key]
        public string name { get; set; }
        public string phoneno { get; set; }
    }
}