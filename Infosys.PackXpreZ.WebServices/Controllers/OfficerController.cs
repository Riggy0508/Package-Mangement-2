using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Infosys.PackXpreZ.DataAccessLayer.Models;
using Infosys.PackXpreZ.DataAccessLayer;

namespace Infosys.PackXpreZ.WebServices.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class OfficerController : Controller
    {
        OfficerRepository officerRepositoryObj;
        public OfficerController()
        {
            officerRepositoryObj = new OfficerRepository();
        }


        #region ValidateLogin
        [HttpGet]
        public JsonResult ValidateLogin(string emailId, string password)
        {
            bool status = false;
            status = officerRepositoryObj.ValidateLogin(emailId, password);
            return Json(status);
        }
        #endregion

        #region EditPassword
        [HttpPut]
        public JsonResult EditPassword(string emailId, string password)
        {
            bool status = false;
            status = officerRepositoryObj.EditPassword(emailId, password);
            return Json(status);
        }
        #endregion

        #region SchedulePackage
        [HttpPost]
        public JsonResult SchedulePackage(SchedulePackage schedulePackageObj)
        {
            bool status = false;
            //EmailId will be of Customer and not of Officer
            status = officerRepositoryObj.SchedulePackage(schedulePackageObj);
            return Json(status);
        }
        #endregion

        #region GetPackageHistory
        [HttpGet]
        public JsonResult GetPackageHistory()
        {
            List<SchedulePackage> list_schedulePackageObj = new List<SchedulePackage>();
            list_schedulePackageObj = officerRepositoryObj.GetPackageHistory();
            return Json(list_schedulePackageObj);
        }
        #endregion

        #region ChangePackageStatus
        [HttpGet]
        public JsonResult ChangePackageStatus(int transactionId, string deliveryStatus)
        {
            bool status = false;
            status = officerRepositoryObj.ChangePackageStatus(transactionId, deliveryStatus);
            return Json(status);
        }
        #endregion


        #region ChangeComplaintStatus
        [HttpGet]
        public JsonResult ChangeComplaintStatus(int FeedbackId)
        {
            bool status = false;
            status = officerRepositoryObj.ChangeComplaintStatus(FeedbackId);
            return Json(status);
        }
        #endregion





    }

}