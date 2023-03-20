using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infosys.PackXpreZ.WebServices.Models
{
    public class Address
    {
        public string EmailId { get; set; }
        public string BuildingNo { get; set; }
        public string StreetName { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public decimal Pincode { get; set; }
    }
}
