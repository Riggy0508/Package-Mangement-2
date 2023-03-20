using System;
using System.Collections.Generic;

namespace Infosys.PackXpreZ.DataAccessLayer.Models
{
    public partial class Address
    {
        public int AddressId { get; set; }
        public string EmailId { get; set; }
        public string BuildingNo { get; set; }
        public string StreetName { get; set; }
        public string Locality { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public decimal Pincode { get; set; }

        public CustomerDetails Email { get; set; }
    }
}
