using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Infosys.PackXpreZ.DataAccessLayer;

namespace Infosys.PackXpreZ.WebServices.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CustomerController : Controller
    {
        CustomerRepository customerObj;

        public CustomerController()
        {
            customerObj = new CustomerRepository();
        }

        #region RegisterCustomer
        [HttpPost]
        public bool RegisterCustomer(Models.RegisterCustomer regObj)
        {
            bool status = false;
            bool status1 = false;
            bool status2 = false;

            DataAccessLayer.Models.CustomerDetails cusObj = new DataAccessLayer.Models.CustomerDetails();

            cusObj.CustomerName = regObj.CustomerName;
            cusObj.EmailId = regObj.EmailId;
            cusObj.Password = regObj.Password;
            cusObj.ContactNo = regObj.ContactNo;

            DataAccessLayer.Models.Address addObj = new DataAccessLayer.Models.Address();

            addObj.EmailId = regObj.EmailId;
            addObj.BuildingNo = regObj.BuildingNo;
            addObj.StreetName = regObj.StreetName;
            addObj.Locality = regObj.Locality;
            addObj.City = regObj.City;
            addObj.State = regObj.State;
            addObj.Pincode = regObj.Pincode;

            try
            {
                status1 = customerObj.RegisterCustomer(cusObj.CustomerName, cusObj.EmailId, cusObj.Password, cusObj.ContactNo);
                status2 = customerObj.AddAddress(addObj.EmailId, addObj.BuildingNo, addObj.StreetName, addObj.Locality, addObj.City, addObj.State, addObj.Pincode);
                if (status1 && status2)
                {
                    status = true;
                }
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region Update CustomerDetails
        [HttpPut]
        public bool UpdateCustomerDetails(DataAccessLayer.Models.CustomerDetails custObj)
        {
            bool status = false;
            try
            {
                status = customerObj.EditCustomer(custObj.EmailId, custObj.CustomerName, custObj.ContactNo);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region Validate Login
        [HttpGet]
        public bool ValidateLogin(string emailId, string password)
        {
            bool status = false;
            try
            {
                status = customerObj.ValidateLogin(emailId, password);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region Edit Password
        [HttpPut]
        public bool UpdatePassword(DataAccessLayer.Models.CustomerDetails cusObj)
        {
            bool status = false;
            try
            {
                status = customerObj.EditPassword(cusObj.EmailId, cusObj.Password);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region Validate Pincode
        [HttpGet]
        public bool ValidatePinCode(decimal pincode)
        {
            bool status = false;
            try
            {
                status = customerObj.ValidatePinCode(pincode);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region AddAddress
        [HttpPost]
        public bool AddAddress(Models.Address addressObj)
        {
            DataAccessLayer.Models.Address obj = new DataAccessLayer.Models.Address();
            obj.EmailId = addressObj.EmailId;
            obj.BuildingNo = addressObj.BuildingNo;
            obj.StreetName = addressObj.StreetName;
            obj.City = addressObj.City;
            obj.Locality = addressObj.Locality;
            obj.State = addressObj.State;
            obj.Pincode = addressObj.Pincode;

            bool status = false;
            try
            {
                status = customerObj.AddAddress(obj.EmailId, obj.BuildingNo, obj.StreetName, obj.Locality, obj.City, obj.State, obj.Pincode);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region Edit Address
        [HttpPut]
        public bool UpdateAddress(DataAccessLayer.Models.Address addressObj)
        {
            bool status = false;
            try
            {
                status = customerObj.EditAddress(addressObj.AddressId, addressObj.BuildingNo, addressObj.StreetName, addressObj.Locality, addressObj.City, addressObj.State, addressObj.Pincode);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region Delete Address
        [HttpDelete]
        public bool RemoveAddress(int addressId)
        {
            bool status = false;
            try
            {
                status = customerObj.DeleteAddress(addressId);
            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region Scheule Package
        [HttpPost]
        public bool SchedulePackage(DataAccessLayer.Models.SchedulePackage packageObj)
        {
            bool status = false;
            try
            {
                status = customerObj.SchedulePackage(packageObj);

            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }
        #endregion

        #region GetPackageHistory By Email
        [HttpGet]
        public JsonResult GetPackageHistoryByEmail(string emailId)
        {
            List<DataAccessLayer.Models.SchedulePackage> packageList = new List<DataAccessLayer.Models.SchedulePackage>();
            try
            {
                packageList = customerObj.GetPackageHistory(emailId).ToList();
            }
            catch (Exception)
            {
                packageList = null;
            }
            return Json(packageList);
        }
        #endregion

        #region Track Package by AWB number
        [HttpGet]
        public JsonResult GetPackageHistoryByAWBNumber(string awbNumber)
        {
            DataAccessLayer.Models.SchedulePackage package = new DataAccessLayer.Models.SchedulePackage();
            try
            {
                package = customerObj.TrackPackage(awbNumber);
            }
            catch (Exception)
            {
                package = null;
            }
            return Json(package);
        }
        #endregion

        #region Add Feedback
        [HttpPost]
        public bool AddFeedback(DataAccessLayer.Models.Feedback feedbackObj)
        {
            bool status = false;
            try
            {
                status = customerObj.AddFeedback(feedbackObj.EmailId, feedbackObj.FeedBackType, feedbackObj.FeedBackText);

            }
            catch (Exception)
            {
                status = false;
            }
            return status;
        }

        #endregion

        #region Get Feedback
        [HttpGet]
        public JsonResult GetFeedback()
        {
            List<DataAccessLayer.Models.Feedback> packageList = new List<DataAccessLayer.Models.Feedback>();
            try
            {
                packageList = customerObj.GetFeedback().ToList();
            }
            catch (Exception)
            {
                packageList = null;
            }
            return Json(packageList);
        }
        #endregion

        #region GetAddress
        [HttpGet]
        public JsonResult GetAddress(string emailId)
        {
            List<DataAccessLayer.Models.Address> addressObj = new List<DataAccessLayer.Models.Address>();
            try
            {
                addressObj = customerObj.GetAddress(emailId);
            }
            catch (Exception)
            {
                addressObj = null;              
            }
            return Json(addressObj);
            
        }
        #endregion

        #region getDistanceByPincode
        [HttpGet]
        public int GetDistanceByPincode(int pin1, int pin2)
        {
            int distance = 0;
            try
            {
                distance = customerObj.GetDistanceByPincode(pin1, pin2);
            }
            catch (Exception ex)
            {
                distance = 0;
                Console.WriteLine(ex.Message);
            }
            return distance;
        }
        #endregion

        #region Recall Package
        
        [HttpPut]
        public bool RecallPackage(DataAccessLayer.Models.SchedulePackage obj)
        {
            bool status = false;
            try
            {
                status = customerObj.Recall(obj.Awbnumber);
            }
            catch (Exception ex)
            {
                status = false;
                Console.WriteLine(ex.Message);
            }
            return status;
        }
        #endregion

        #region GetAddressByAddressId
        [HttpGet]
        public JsonResult GetAddressByAddressId(int addressId)
        {
            DataAccessLayer.Models.Address addressObj = new DataAccessLayer.Models.Address();
            try
            {
                addressObj = customerObj.GetAddressByAddressId(addressId);
            }
            catch (Exception e)
            {
                addressObj = null;
                Console.WriteLine(e.Message);
            }

            return Json(addressObj);
        }

        #endregion

        #region GetCustomerDetails
        [HttpGet]

        public JsonResult GetCustomerDetails(string emailId)
        {
            DataAccessLayer.Models.CustomerDetails customerDetailsObj = new DataAccessLayer.Models.CustomerDetails();
            try
            {
                customerDetailsObj = customerObj.GetCustomerDetails(emailId);
            }
            catch (Exception e)
            {
                customerDetailsObj = null;
            }
            return Json(customerDetailsObj);
        }
        #endregion

    }
}