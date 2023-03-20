using Microsoft.VisualStudio.TestTools.UnitTesting;
using Infosys.PackXpreZ.DataAccessLayer;

namespace Infosys.PackXpreZ.Test
{
    [TestClass]
    public class UnitTest1
    {
        CustomerRepository rep = new CustomerRepository();

        //[TestMethod]
        //public void Test1_Positive()
        //{
        //    bool actual = rep.RegisterCustomer("Shubham Khaire", "khaires@gmail.com", "1Qwertyu", "9921832122");
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test2_Negative()
        //{
        //    bool actual = rep.RegisterCustomer("Shubham Khaire", "khaires@gmail.com", "1Qwertyu", "9922334411");
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test3_Positive()
        //{
        //    bool actual = rep.AddAddress("khaires@gmail.com", "Mohan", "Shivaji 3", "Dhayari", "Pune", "Maharashtra", 676756);
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test4_Positive()
        //{
        //    bool actual = rep.AddAddress("random@gmail.com", "Balaji", "Vijay 2", "Bhagur", "Nashik", "Maharashtra", 676756);
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test5_Positive()
        //{
        //    bool actual = rep.EditCustomer("khaires@gmail.com", "Rigved", "7329287382");
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test6_Positive()
        //{
        //    bool actual = rep.EditCustomer("random@gmail.com", "Rigved", "1212121212");
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test7_Positive()
        //{
        //    bool actual = rep.EditAddress(104, "GEC2", "Hutta", "Tronic", "Mysore", "Karnataka0", 676756);
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test8_Negative()
        //{
        //    bool actual = rep.EditAddress(1004, "GEC2", "Hutta", "Tronic", "Mysore", "Karnataka0", 676756);
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test9_Positive()
        //{
        //    bool actual = rep.EditPassword("khaires@gmail.com", "1Wqertyu");
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test10_Negative()
        //{
        //    bool actual = rep.EditPassword("shaman@gmail.com", "1Wqertyu");
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test11_Positive()
        //{
        //    bool actual = rep.DeleteAddress(101);
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test12_Negative()
        //{
        //    bool actual = rep.DeleteAddress(101);
        //    bool expected = false;
        //    Assert.AreEqual(expected, actual);
        //}

        //[TestMethod]
        //public void Test13_Positive()
        //{
        //    bool actual = rep.AddFeedback("khaires@gmail.com", "Complaint", "Poor Customer Service");
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test14_Negative()
        //{
        //    bool actual = rep.AddFeedback("khairessss@gmail.com", "Complaint", "Poor Customer Service");
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test15_Positive()
        //{
        //    bool actual = rep.ValidateLogin("khaires@gmail.com", "1Wqertyu");
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test16_Negative()
        //{
        //    bool actual = rep.ValidateLogin("khaires@gmail.com", "2Wqertyu");
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test17_Positive()
        //{
        //    bool actual = rep.Recall("AWB-103");
        //    bool expected = true;
        //    Assert.AreEqual(actual, expected);
        //}

        //[TestMethod]
        //public void Test18_Negative()
        //{
        //    bool actual = rep.Recall("AWB-10333");
        //    bool expected = false;
        //    Assert.AreEqual(actual, expected);
        //}
    }
}