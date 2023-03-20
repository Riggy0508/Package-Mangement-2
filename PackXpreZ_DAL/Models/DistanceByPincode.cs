using System;
using System.Collections.Generic;

namespace Infosys.PackXpreZ.DataAccessLayer.Models
{
    public partial class DistanceByPincode
    {
        public int DistanceId { get; set; }
        public decimal? Pincode1 { get; set; }
        public decimal? Pincode2 { get; set; }
        public int? Distance { get; set; }
    }
}
