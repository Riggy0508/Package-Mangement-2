using System;
using System.Collections.Generic;

namespace Infosys.PackXpreZ.DataAccessLayer.Models
{
    public partial class Feedback
    {
        public int FeedbackId { get; set; }
        public string EmailId { get; set; }
        public string FeedBackType { get; set; }
        public string FeedBackText { get; set; }
        public string ActionTaken { get; set; }

        public CustomerDetails Email { get; set; }
    }
}
