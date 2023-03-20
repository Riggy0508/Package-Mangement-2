using System;
using System.Collections.Generic;

namespace Infosys.PackXpreZ.DataAccessLayer.Models
{
    public partial class BranchOfficer
    {
        public string OfficerEmail { get; set; }
        public string OfficerName { get; set; }
        public string Password { get; set; }
        public string BranchName { get; set; }
        public decimal Pincode { get; set; }
    }
}
