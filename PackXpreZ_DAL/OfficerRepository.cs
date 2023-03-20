using System;
using System.Collections.Generic;
using System.Text;
using Infosys.PackXpreZ.DataAccessLayer.Models;
using System.Linq;
using Microsoft.EntityFrameworkCore;

namespace Infosys.PackXpreZ.DataAccessLayer
{
    public class OfficerRepository
    {
        PackXprezDBContext context;

        public OfficerRepository()
        {
            context = new PackXprezDBContext();
        }

        #region ValidateLogin
        public bool ValidateLogin(string emailId, string password)
        {
            bool status = false;
            BranchOfficer branchOfficerObj = new BranchOfficer();
            try
            {
                branchOfficerObj = context.BranchOfficer.Find(emailId);
                if (branchOfficerObj != null)
                {
                    if (branchOfficerObj.Password == password)
                    {
                        status = true;
                    }
                    else
                    {
                        Console.WriteLine("Password doesn't Match");
                        status = false;
                    }
                }
                else
                {
                    Console.WriteLine("Find Returns Null");
                    status = false;
                }
            }
            catch (Exception e)
            {
                status = false;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return status;
        }
        #endregion

        #region EditPassword
        public bool EditPassword(string emailId, string password)
        {
            bool status = false;
            try
            {
                BranchOfficer branchOfficerObj = context.BranchOfficer.Find(emailId);
                if (branchOfficerObj != null)
                {
                    branchOfficerObj.Password = password;
                    context.SaveChanges();
                    status = true;
                }
                else
                {
                    Console.WriteLine("Find Returns Null");
                    status = false;
                }
            }
            catch (Exception e)
            {
                status = false;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return status;
        }

        #endregion

        #region SchedulePackage
        public bool SchedulePackage(SchedulePackage prmschedulePackageObj)
        {
            bool status = false;
            SchedulePackage schedulePackageObj = new SchedulePackage();
            try
            {
                schedulePackageObj.EmailId = prmschedulePackageObj.EmailId;//EmailId will be of customer and not Officer
                schedulePackageObj.SenderAddr = prmschedulePackageObj.SenderAddr;
                schedulePackageObj.PickUpTimeSlot = prmschedulePackageObj.PickUpTimeSlot;
                schedulePackageObj.ReceiverAddr = prmschedulePackageObj.ReceiverAddr;
                schedulePackageObj.PackageCost = prmschedulePackageObj.PackageCost;
                schedulePackageObj.PackagingRequired = prmschedulePackageObj.PackagingRequired;
                schedulePackageObj.Insurance = prmschedulePackageObj.Insurance;
                schedulePackageObj.DeliveryMode = prmschedulePackageObj.DeliveryMode;
                schedulePackageObj.DeliveryStatus = "IN-TRANSIT";

                SchedulePackage tempObj = context.SchedulePackage.FromSql($"select * from SchedulePackage where TransactionId = (select max(TransactionId) from SchedulePackage)").FirstOrDefault();
                schedulePackageObj.Awbnumber = "AWB-" + tempObj.TransactionId;

                context.SchedulePackage.Add(schedulePackageObj);
                context.SaveChanges();


                status = true;
            }
            catch (Exception e)
            {
                status = false;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return status;
        }
        #endregion

        #region GetPackageHistory
        public List<SchedulePackage> GetPackageHistory()
        {
            List<SchedulePackage> list_schedulePackageObj = new List<SchedulePackage>();
            try
            {
                list_schedulePackageObj = (from s in context.SchedulePackage select s).ToList<SchedulePackage>();
                if (list_schedulePackageObj.Count() == 0)
                {
                    list_schedulePackageObj = null;
                }
            }
            catch (Exception e)
            {
                list_schedulePackageObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return list_schedulePackageObj;
        }
        #endregion

        #region ChangePackageStatus
        public bool ChangePackageStatus(int transactionId, string deliveryStatus)
        {
            bool status = false;
            SchedulePackage schedulePackageObj = new SchedulePackage();
            try
            {

                schedulePackageObj = context.SchedulePackage.Find(transactionId);
                if (schedulePackageObj != null)
                {
                    schedulePackageObj.DeliveryStatus = deliveryStatus;
                    if (deliveryStatus == "IN-TRANSIT")
                    {
                        schedulePackageObj.Awbnumber = "AWB-" + transactionId;
                    }
                    if (deliveryStatus == "DELIVERED")
                    {
                        DateTime date = DateTime.Now.Date;
                        schedulePackageObj.DeliveredDate = date;
                    }
                    status = true;
                    context.SaveChanges();
                }
                else
                {
                    status = false;
                }
            }
            catch (Exception e)
            {
                status = false;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return status;
        }
        #endregion


        #region ChangeComplaintStatus

        public bool ChangeComplaintStatus(int FeedbackId)
        {
            Feedback feedbackObj = new Feedback();
            bool status = false;
            try
            {
                feedbackObj = context.Feedback.Find(FeedbackId);
                //feedbackObj = (from c in context.Feedback where c.FeedbackId == FeedbackId select c);
                if (feedbackObj != null)
                {
                    feedbackObj.ActionTaken = "Action Taken";
                    context.SaveChanges();
                    status = true;
                }
                else
                {
                    status = false;
                }

            }
            catch (Exception e)
            {
                status = false;
                feedbackObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return status;
        }
        #endregion



    }
}
