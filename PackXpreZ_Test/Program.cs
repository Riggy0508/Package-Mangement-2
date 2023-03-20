using System;
using Infosys.PackXpreZ.DataAccessLayer;
using Infosys.PackXpreZ.DataAccessLayer.Models;
using System.Linq;
using System.Collections.Generic;

namespace packxprez_test
{
    class program
    {
        static CustomerRepository custPckXpreZObj = new CustomerRepository();
        static OfficerRepository offPckXpreZObj = new OfficerRepository();

        #region CustomerTestCases

        static void getDistanceByPincode()
        {
            int ret;
            int pin1 = 676756;
            int pin2 = 787867;
            ret = custPckXpreZObj.GetDistanceByPincode(pin1, pin2);
            Console.WriteLine("Get Distance By Pincode " + ret);
        }

        static void RegisterCustomer()
        {
            bool status = false;

            string customerName = "Black Thunder";
            string emailId = "thunder777@gmail.com";
            string password = "thunderstruck";
            string contactNo = "7507517890";
            status = custPckXpreZObj.RegisterCustomer(customerName, emailId, password, contactNo);

            Console.WriteLine("Register Customer Validation " + status);
        }

        static void EditCustomer()
        {
            bool status = false;

            string emailId = "thunder@gmail.com";
            string customerName = "Stark Wound";
            string contactNo = "9921843515";

            status = custPckXpreZObj.EditCustomer(emailId, customerName, contactNo);
            Console.WriteLine("Edit Customer Validation " + status);
        }

        static void DeleteAddress()
        {
            int add_id = 101;
            bool status = false;
            status = custPckXpreZObj.DeleteAddress(add_id);
            Console.WriteLine("Delete Address Validation " + status);
        }

        public static void AddAddress()
        {
            bool status;
            status = custPckXpreZObj.AddAddress("john@gmail.com", "123", "azad road", "mera bazar", "pune", "kerala", 676756);
            Console.WriteLine("Add Address Validation: " + status);
        }

        public static void EditAddress()
        {
            bool status;
            status = custPckXpreZObj.EditAddress(103, "123", "azad road", "mera bazar", "punela", "kerala", 676756);
            Console.WriteLine("Update Address Validation: " + status);
        }

        public static void ValidatePincode()
        {
            bool status;
            status = custPckXpreZObj.ValidatePinCode(676756);
            Console.WriteLine("Pincode Validation: " + status);
        }

        public static void EditPassword()
        {
            bool status = false;
            string emailId = "thunde99529@gmail.com";
            string pass = "123456";
            status = custPckXpreZObj.EditPassword(emailId, pass);
            Console.WriteLine("Edit Password validation " + status);
        }

        public static void AddFeedback()
        {
            bool status = false;

            string emailId = "thunder@gmail.com";
            string feedType = "testtype";
            string feedText = "bad";

            status = custPckXpreZObj.AddFeedback(emailId, feedType, feedText);

            Console.WriteLine("Add Feedback validation " + status);
        }

        public static void GetFeedback()
        {

            List<Feedback> list_feedbackObj = new List<Feedback>();


            list_feedbackObj = custPckXpreZObj.GetFeedback();

            foreach (var item in list_feedbackObj)
            {
                Console.WriteLine(item.EmailId);
                Console.WriteLine(item.FeedBackType);
                Console.WriteLine(item.FeedBackText);
            }

        }

        public static void ValidateLogin()
        {
            bool status = false;
            string email = "thunder@gmail.com";
            string pass = "123456";
            status = custPckXpreZObj.ValidateLogin(email, pass);

            Console.WriteLine("Validate Login Validation " + status);
        }

        public static void SchedulePackage()
        {
            string awb = "awb-1002012";
            SchedulePackage obj = custPckXpreZObj.TrackPackage(awb);
            Console.WriteLine(obj.Awbnumber);
            Console.WriteLine(obj.TransactionId);
            Console.WriteLine(obj.EmailId);
        }

        public static void GetPackageHistory()
        {
            string email = "john@gmail.com";
            List<SchedulePackage> list_schedulePackageObj = custPckXpreZObj.GetPackageHistory(email);

            if (list_schedulePackageObj != null)
            {
                foreach (var item in list_schedulePackageObj)
                {
                    Console.WriteLine(item.EmailId);
                    Console.WriteLine(item.Awbnumber);
                    Console.WriteLine(item.TransactionId);
                }
            }
        }
        #endregion

        #region OfficerTestCases

        public static void OffValidateLogin()
        {
            bool status = false;

            string email = "karan@gmail.com";
            string pass = "yui@1234";

            status = offPckXpreZObj.ValidateLogin(email, pass);

            Console.WriteLine("Validate Login validation " + status);
        }

        public static void OffEditPassword()
        {
            bool status = false;

            string email = "karan@gmail.com";
            string pass = "Eminem@1234";

            status = offPckXpreZObj.EditPassword(email, pass);

            Console.WriteLine("Edit Password Validation " + status);
        }

        public static void OffGetPackageHistory()
        {
            List<SchedulePackage> list_schedulePackageObj = offPckXpreZObj.GetPackageHistory();

            if (list_schedulePackageObj != null)
            {
                foreach (var item in list_schedulePackageObj)
                {
                    Console.WriteLine(item.EmailId);
                    Console.WriteLine(item.Awbnumber);
                    Console.WriteLine(item.TransactionId);
                }
            }
        }

        public static void OffChangePackageStatus()
        {
            bool status = false;

            int trans = 102;
            string delStatus = "APPROVED";

            status = offPckXpreZObj.ChangePackageStatus(trans, delStatus);

            Console.WriteLine("Change Package Status Validation " + status);
        }

        public static void OffSchedulePackage()
        {
            bool status = false;
            SchedulePackage schedulePackageObj = new SchedulePackage();
            schedulePackageObj.EmailId = "thunder@gmail.com";
            schedulePackageObj.SenderAddr = "Rajdhani Express Society";
            schedulePackageObj.PickUpTimeSlot = 2;
            schedulePackageObj.ReceiverAddr = "Pune Mysore Maharashtra";
            schedulePackageObj.PackageCost = 2000;
            schedulePackageObj.PackagingRequired = true;
            schedulePackageObj.Insurance = true;
            schedulePackageObj.DeliveryMode = "EXPRESS";
            schedulePackageObj.DeliveryStatus = "APPROVED";


            status = offPckXpreZObj.SchedulePackage(schedulePackageObj);

            Console.WriteLine("Schedule Package Validation " + status);
        }

        //public static void OffGenerateAWBNumber()
        //{
        //    Console.WriteLine(offPckXpreZObj.GenerateAWBNumber());
        //}

        #endregion


        static void Main(string[] args)
        {
            //officer test cases calls
            //OffValidateLogin();
            //OffEditPassword();
            //OffGetPackageHistory();
            //OffChangePackageStatus();
            //OffSchedulePackage();
            //OffGenerateAWBNumber();

            //customer test cases calls
            //getDistanceByPincode();
            //RegisterCustomer();
            //EditCustomer();
            //DeleteAddress(); 
            //AddAddress();
            //EditAddress();
            //ValidatePincode();
            //EditPassword();
            //AddFeedback();
            //GetFeedback();
            //ValidateLogin();
            //SchedulePackage();
            //GetPackageHistory();
        }
    }
}

