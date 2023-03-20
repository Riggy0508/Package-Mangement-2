using System;
using System.Collections.Generic;
using System.Text;
using Infosys.PackXpreZ.DataAccessLayer.Models;
using System.Linq;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;

namespace Infosys.PackXpreZ.DataAccessLayer
{
    public class CustomerRepository
    {
        PackXprezDBContext context;
        public CustomerRepository()
        {
            context = new PackXprezDBContext();
        }

        #region RegisterCustomer
        public bool RegisterCustomer(string customerName, string emailId, string password, string contactNo)
        {
            bool status = false;
            try
            {
                CustomerDetails customerObj = new CustomerDetails();
                customerObj.CustomerName = customerName;
                customerObj.EmailId = emailId;
                customerObj.Password = password;
                customerObj.ContactNo = contactNo;
                context.CustomerDetails.Add(customerObj);
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

        #region AddAddress
        public bool AddAddress(string emailId, string buildingNo, string streetName, string locality, string city, string state, decimal pincode)
        {
            bool status = false;
            try
            {
                Address addressObj = new Address();
                addressObj.EmailId = emailId;
                addressObj.BuildingNo = buildingNo;
                addressObj.StreetName = streetName;
                addressObj.Locality = locality;
                addressObj.City = city;
                addressObj.State = state;
                addressObj.Pincode = pincode;
                context.Address.Add(addressObj);
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

        #region EditCustomer    
        public bool EditCustomer(string emailId, string customerName, string contactNo)
        {
            bool status = false;
            try
            {
                CustomerDetails customerObj = context.CustomerDetails.Find(emailId);
                if (customerObj != null)
                {
                    customerObj.CustomerName = customerName;
                    customerObj.ContactNo = contactNo;
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

        #region EditAddress
        public bool EditAddress(int addressId, string buildingNo, string streetName, string locality, string city, string state, decimal pincode)
        {
            bool status = false;
            try
            {
                Address addressObj = context.Address.Find(addressId);
                if (addressObj != null)
                {
                    addressObj.BuildingNo = buildingNo;
                    addressObj.StreetName = streetName;
                    addressObj.Locality = locality;
                    addressObj.City = city;
                    addressObj.State = state;
                    addressObj.Pincode = pincode;
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
                CustomerDetails customerObj = context.CustomerDetails.Find(emailId);
                if (customerObj != null)
                {
                    customerObj.Password = password;
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

        #region DeleteAddress
        public bool DeleteAddress(int addressId)
        {
            bool status = false;
            try
            {
                Address addressObj = context.Address.Find(addressId);
                if (addressObj != null)
                {
                    context.Address.Remove(addressObj);
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

        #region AddFeedback
        public bool AddFeedback(string emailId, string feedBackType, string feedBackText)
        {
            bool status = false;
            try
            {
                Feedback feedbackObj = new Feedback();
                feedbackObj.EmailId = emailId;
                feedbackObj.FeedBackType = feedBackType;
                feedbackObj.FeedBackText = feedBackText;
                feedbackObj.ActionTaken = "Action Pending";
                context.Feedback.Add(feedbackObj);
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

        #region GetFeedback
        public List<Feedback> GetFeedback()
        {
            List<Feedback> list_feedbackObj = new List<Feedback>();
            try
            {
                list_feedbackObj = (from f in context.Feedback select f).ToList<Feedback>();
                if (list_feedbackObj.Count() == 0)
                {
                    list_feedbackObj = null;
                }
            }
            catch (Exception e)
            {
                list_feedbackObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return list_feedbackObj;
        }
        #endregion

        #region ValidateLogin
        public bool ValidateLogin(string emailId, string password)
        {
            bool status = false;
            CustomerDetails customerDetailsObj = new CustomerDetails();
            try
            {
                customerDetailsObj = context.CustomerDetails.Find(emailId);
                if (customerDetailsObj != null)
                {
                    if (customerDetailsObj.Password == password)
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

        #region ValidatePinCode
        public bool ValidatePinCode(decimal pincode)
        {
            bool status = false;
            PincodeDetails pincodeDetailsObj = new PincodeDetails();
            try
            {
                pincodeDetailsObj = context.PincodeDetails.Find(pincode);
                if (pincodeDetailsObj != null)
                {
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

        #region TrackPackage
        public SchedulePackage TrackPackage(string awbNumber)
        {
            SchedulePackage schedulePackageObj = new SchedulePackage();
            try
            {
                schedulePackageObj = (from s in context.SchedulePackage where s.Awbnumber == awbNumber select s).FirstOrDefault<SchedulePackage>();
            }
            catch (Exception e)
            {
                schedulePackageObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return schedulePackageObj;
        }
        #endregion

        #region SchedulePackage
        public bool SchedulePackage(SchedulePackage prmschedulePackageObj)
        {
            bool status = false;
            SchedulePackage schedulePackageObj = new SchedulePackage();
            try
            {
                DateTime date = DateTime.Now.Date;

                schedulePackageObj.EmailId = prmschedulePackageObj.EmailId;//EmailId will be of customer and not Officer
                schedulePackageObj.SenderAddr = prmschedulePackageObj.SenderAddr;
                schedulePackageObj.PickUpTimeSlot = prmschedulePackageObj.PickUpTimeSlot;
                schedulePackageObj.ReceiverAddr = prmschedulePackageObj.ReceiverAddr;
                schedulePackageObj.PackageCost = prmschedulePackageObj.PackageCost;
                schedulePackageObj.PackagingRequired = prmschedulePackageObj.PackagingRequired;
                schedulePackageObj.Insurance = prmschedulePackageObj.Insurance;
                schedulePackageObj.DeliveryMode = prmschedulePackageObj.DeliveryMode;
                schedulePackageObj.DeliveryStatus = "SCHEDULED";
                schedulePackageObj.ScheduledDate = date;
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
        public List<SchedulePackage> GetPackageHistory(string emailId)
        {
            List<SchedulePackage> list_schedulePackageObj = new List<SchedulePackage>();
            try
            {
                list_schedulePackageObj = (from s in context.SchedulePackage where s.EmailId == emailId select s).ToList<SchedulePackage>();
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

        #region GetAddress
        public List<Address> GetAddress(string emailId)
        {
            List<Address> addressObj = new List<Address>();
            try
            {
                addressObj = (from a in context.Address where a.EmailId == emailId select a).ToList<Address>();
                if (addressObj.Count == 0)
                {
                    addressObj = null;
                }
            }
            catch (Exception e)
            {
                addressObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return addressObj;
        }
        #endregion

        #region GetAddressByAddressId(AddressId)
        public Address GetAddressByAddressId(int addressId)
        {
            Address addressObj = new Address();
            try
            {
                addressObj = context.Address.Find(addressId);

            }
            catch (Exception e)
            {
                addressObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return addressObj;
        }
        #endregion

        #region GetDistanceByPincode

        public int GetDistanceByPincode(decimal Pincode1, decimal Pincode2)
        {
            DistanceByPincode distanceByPincodeObj = new DistanceByPincode();

            int distance;
            try
            {
                distanceByPincodeObj = (from d in context.DistanceByPincode where (d.Pincode1 == Pincode1 && d.Pincode2 == Pincode2) select d).FirstOrDefault();
                if (distanceByPincodeObj != null)
                {
                    distance = distanceByPincodeObj.Distance.Value;
                }
                else
                {
                    distance = 0;
                }
            }
            catch (Exception e)
            {
                distance = 0;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return distance;
        }
        #endregion

        #region Recall
        public bool Recall(string Awbnumber)
        {
            bool status = false;
            SchedulePackage schedulePackageObj = new SchedulePackage();
            try
            {
                schedulePackageObj = (from s in context.SchedulePackage where s.Awbnumber == Awbnumber select s).FirstOrDefault();
                if (schedulePackageObj != null)
                {
                    schedulePackageObj.DeliveryStatus = "RECALLED";
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
                schedulePackageObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return status;
        }
        #endregion

        #region GetCustomerDetails

        public CustomerDetails GetCustomerDetails(string emailId)
        {
            CustomerDetails customerDetailsObj = new CustomerDetails();
            try
            {
                customerDetailsObj = (from c in context.CustomerDetails where c.EmailId == emailId select c).FirstOrDefault();

            }
            catch (Exception e)
            {
                customerDetailsObj = null;
                Console.WriteLine("Exception/Error Occurred: " + e.Message);
            }
            return customerDetailsObj;
        }
        #endregion


    }
}
