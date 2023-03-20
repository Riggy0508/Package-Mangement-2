using System;
using System.Collections.Generic;

namespace Infosys.PackXpreZ.DataAccessLayer.Models
{
    public partial class SchedulePackage
    {
        public int TransactionId { get; set; }
        public string EmailId { get; set; }
        public string Awbnumber { get; set; }
        public string SenderAddr { get; set; }
        public byte PickUpTimeSlot { get; set; }
        public string ReceiverAddr { get; set; }
        public int PackageCost { get; set; }
        public bool? PackagingRequired { get; set; }
        public bool? Insurance { get; set; }
        public string DeliveryMode { get; set; }
        public string DeliveryStatus { get; set; }
        public DateTime? ScheduledDate { get; set; }
        public DateTime? DeliveredDate { get; set; }

        public CustomerDetails Email { get; set; }
    }
}
