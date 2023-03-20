using System;
using System.Collections.Generic;

namespace Infosys.PackXpreZ.DataAccessLayer.Models
{
    public partial class CustomerDetails
    {
        public CustomerDetails()
        {
            Address = new HashSet<Address>();
            Feedback = new HashSet<Feedback>();
            SchedulePackage = new HashSet<SchedulePackage>();
        }

        public string EmailId { get; set; }
        public string CustomerName { get; set; }
        public string Password { get; set; }
        public string ContactNo { get; set; }

        public ICollection<Address> Address { get; set; }
        public ICollection<Feedback> Feedback { get; set; }
        public ICollection<SchedulePackage> SchedulePackage { get; set; }
    }
}
