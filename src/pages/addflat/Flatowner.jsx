// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// import infraLogo from "../../assets/Royalmedeinfra Logo.svg";
// import { useRef } from "react";
// import html2pdf from "html2pdf.js/dist/html2pdf";

// import { BsBuilding, BsFillLightningChargeFill } from "react-icons/bs";
// import {
//   FaBook,
//   FaCalendarAlt,
//   FaEnvelope,
//   FaGitSquare,
//   FaHandshake,
//   FaIdBadge,
//   FaIdCard,
//   FaSortAmountUp,
//   FaUser,
// } from "react-icons/fa";
// import { FaAddressCard } from "react-icons/fa6";
// import { MdOutlineAttachMoney } from "react-icons/md";
// import { RiFilePaper2Fill } from "react-icons/ri";
// import { GiGavel, GiJusticeStar } from "react-icons/gi";
// import { AiOutlineFileProtect } from "react-icons/ai";
// import { FaBuilding } from "react-icons/fa";
// import { LuFileType } from "react-icons/lu";
// import { SiFlathub } from "react-icons/si";
// import { MdConfirmationNumber } from "react-icons/md";
// import { RiNumbersFill } from "react-icons/ri";
// import { RiMoneyDollarCircleFill } from "react-icons/ri";
// import { GrStatusUnknown } from "react-icons/gr";
// import { CiBank } from "react-icons/ci";
// import { FaSortAmountUpAlt } from "react-icons/fa";
// import { SiAnswer } from "react-icons/si";
// import { BASE_URL } from "../../config";
// import "./FlatOwner.css";
// function Flatowner() {
//   const letterref = useRef();
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const token = JSON.parse(
//     localStorage.getItem("employeROyalmadeLogin")
//   )?.token;
//   const [customerDetail, setCustomerDetail] = useState(null);
//   const [bankName, setbankName] = useState("");
//   const [LoanAmount, setLoanAmount] = useState("");
//   const [customerid, setCustomerId] = useState("");
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [showBankDetailForm, setshowBankDetailForm] = useState(false);
//   const [showInstallmentForm, setShowInstallmentForm] = useState(false);
//   const [installmentData, setInstallmentDate] = useState("");
//   const [installmentAmount, setInstallMentAmount] = useState("");
//   const [selectinstallmentType, setselectinstallmentType] = useState("");
//   const [showCustomerInstallMentcard, setshowCustomerInstallMentcard] =
//     useState(false);
//   const [customerInstallMentDeta, setcustomerInstallMentDeta] = useState("");
//   const [customerSlip, setcustomerSlip] = useState(false);
//   const [note, setNote] = useState("");
//   const [showCustomerInstallmentEditForm, setshowCustomerInstallmentEditForm] =
//     useState(false);
//   const [installmentId, setinstallmentId] = useState("");
//   const [InstallmentEditFormDate, setInstallmentEditFormDate] = useState("");
//   const [InstallmentEditFormAmount, setInstallmentEditFormAmount] =
//     useState("");
//   const [
//     InstallmentEditFormPaymentMethod,
//     setInstallmentEditFormPaymentMethod,
//   ] = useState("");
//   const [InstallmentEditFormRemark, setInstallmentEditFormRemark] =
//     useState("");

//   const [ShowEditCustomerForm, setShowEditCustomerForm] = useState(false);
//   const [customerBookingUpdateId, setcustomerBookingUpdateId] = useState("");
//   const [dealPrice, setDealPrice] = useState("");
//   const [tokenAmount, setTokenAmount] = useState("");
//   const [agreementAmount, setAgreementAmount] = useState("");
//   const [stampDutyAmount, setStampDutyAmount] = useState("");
//   const [registrationAmount, setRegistrationAmount] = useState("");
//   const [gstAmount, setGstAmount] = useState("");
//   const [electricWaterAmmount, setElectricWaterAmmount] = useState("");
//   const [legalChargesAmmout, setLegalChargesAmmout] = useState("");
//   const [bookedOn, setBookedOn] = useState("");
//   const [bookingStatus, setBookingStatus] = useState("");

//   // Customer fields
//   const [name, setName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [email, setEmail] = useState("");
//   const [aadharNumber, setAadharNumber] = useState("");
//   const [address, setAddress] = useState("");
//   const [panCard, setPanCard] = useState("");
//   const [agentName, setAgentName] = useState("");
//   const [brokerage, setBrokerage] = useState("");
//   const [customerBookingId, setcustomerBookingId] = useState("");
//   useEffect(() => {
//     async function customerProfile() {
//       try {
//         const response = await axios.get(`${BASE_URL}/booking/${id}`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         console.log(response.data);
//         setCustomerId(response?.data?.customer?.id);
//         setCustomerDetail(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     }
//     customerProfile();
//   }, [id, token, refreshKey]);

//   async function handleSubmitloan(e) {
//     e.preventDefault();

//     const formdata = {
//       bankName: bankName,
//       loanAmount: LoanAmount.replace(/,/g, ""),
//     };
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/addLoanDetails/${customerid}`,
//         formdata,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.status === 200) {
//         alert("Bank Details Added Successfully");
//         setRefreshKey((prev) => prev + 1);
//         setshowBankDetailForm(false);
//         setbankName("");
//         setLoanAmount("");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function handleCancleBooking() {
//     const cancleBooking = window.confirm("Do you want to cancle the booking ?");
//     if (!cancleBooking) return;
//     try {
//       const response = await axios.put(
//         `${BASE_URL}/cancelBooking/${id}`,
//         {},
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       alert("booking Delete Successfully");
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function handleAddflatinstallment(e) {
//     e.preventDefault();
//     const formdata = [
//       {
//         installmentDate:
//           installmentData || new Date().toISOString().split("T")[0],
//         installmentAmount: installmentAmount.replace(/,/g, ""),
//         installmentStatus: selectinstallmentType,
//         remark: note,
//       },
//     ];
//     try {
//       const response = await axios.post(
//         `${BASE_URL}/${id}/addInstallment`,
//         formdata,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       alert("payment Added");
//       setShowInstallmentForm(false);
//       setInstallmentDate("");
//       setInstallMentAmount("");
//       setselectinstallmentType("");
//       setNote("");
//       setRefreshKey(refreshKey + 1);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   async function handleShowInstallment() {
//     setshowCustomerInstallMentcard(true);
//     try {
//       const response = await axios.get(`${BASE_URL}/BookingSummary/${id}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       });
//       console.log(response.data);
//       setcustomerInstallMentDeta(response.data);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   // useEffect(() => {
//   //   handleShowInstallment()
//   // }, [refreshKey,token])

//   const handleDownload = () => {
//     const element = letterref.current;
//     const options = {
//       margin: 0.5,
//       filename: "Final Booking Slip.pdf",
//       image: { type: "jpeg", quality: 0.98 },
//       html2canvas: { scale: 2 },
//       jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
//     };

//     html2pdf().set(options).from(element).save();
//   };

//   async function handleEditInstallment(installmentId) {
//     setinstallmentId(installmentId);
//     setshowCustomerInstallmentEditForm(true);

//     try {
//       const response = await axios.get(
//         `${BASE_URL}/getBookingInstallmentById/${installmentId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response.data);
//       setInstallmentEditFormAmount(response.data.installmentAmount);
//       setInstallmentEditFormDate(response.data.installmentDate);
//       setInstallmentEditFormPaymentMethod(response.data.installmentStatus);
//       setInstallmentEditFormRemark(response.data.remark);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formdata = {
//       installmentDate: InstallmentEditFormDate,
//       installmentAmount: String(InstallmentEditFormAmount)?.replace(/,/g, ""),
//       remark: InstallmentEditFormRemark,
//       installmentStatus: InstallmentEditFormPaymentMethod,
//     };

//     try {
//       const response = await axios.put(
//         `${BASE_URL}/updateBookingInstallment/${installmentId}`,
//         formdata,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.status === 200) {
//         alert("installment updated");
//         handleShowInstallment();
//         setshowCustomerInstallmentEditForm(false);
//         setInstallmentEditFormDate("");
//         setInstallmentEditFormAmount("");
//         setInstallmentEditFormRemark("");
//         setInstallmentEditFormPaymentMethod("");
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   async function handleDeleteInstallment(id) {
//     const deleteInstallment = window.confirm(
//       "Do you want to delete the Installment ?"
//     );
//     if (!deleteInstallment) return;
//     try {
//       const response = await axios.delete(
//         `${BASE_URL}/deleteBookingInstallment/${id}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       if (response.status === 200) {
//         alert("Installment deleted");
//         setRefreshKey(refreshKey + 1);
//         setcustomerInstallMentDeta((prev) => ({
//           ...prev,
//           bookingInstallments: prev.bookingInstallments.filter(
//             (installment) => installment.id !== id
//           ),
//         }));
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   const handlePrintInstallment = () => {
//     const element = document
//       .getElementById("customerInstallmentCard")
//       .cloneNode(true);
//     element
//       .querySelectorAll(
//         ".installment_edit_button, .installment_delete_button, .action-column"
//       )
//       .forEach((btn) => btn.remove());
//     element.style.padding = "20px";
//     html2pdf()
//       .from(element)
//       .save(`Customer_Installment_${customerInstallMentDeta.identifier}.pdf`);
//   };

//   async function handleEditCustomerDetail(customerId, bookingId) {
//     setcustomerBookingUpdateId(customerId);
//     setcustomerBookingId(bookingId);
//     setShowEditCustomerForm(true);
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/getBookingCoustomerId/${customerId}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response.data);
//       setAgreementAmount(response.data.agreementAmount);
//       setDealPrice(response.data.dealPrice);
//       setTokenAmount(response.data.tokenAmount);
//       setStampDutyAmount(response.data.stampDutyAmount);
//       setRegistrationAmount(response.data.registrationAmount);
//       setGstAmount(response.data.gstAmount);
//       setElectricWaterAmmount(response.data.electricWaterAmmount);
//       setLegalChargesAmmout(response.data.legalChargesAmmout);
//       setBookedOn(response.data.bookedOn);
//       setBookingStatus(response.data.bookingStatus);
//       setName(response.data?.customer?.name);
//       setPhoneNumber(response.data?.customer?.phoneNumber);
//       setEmail(response.data?.customer?.email);
//       setAadharNumber(response.data?.customer?.aadharNumber);
//       setAddress(response.data?.customer?.address);
//       setPanCard(response.data?.customer?.panCard);
//       setAgentName(response.data?.customer?.agentName);
//       setBrokerage(response.data?.customer?.brokerage);
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   const handleUpdateCustomerDetail = async (e) => {
//     e.preventDefault();

//     const payload = {
//       dealPrice,
//       tokenAmount,
//       agreementAmount,
//       stampDutyAmount,
//       registrationAmount,
//       gstAmount,
//       electricWaterAmmount,
//       legalChargesAmmout,
//       bookedOn,
//       bookingStatus,
//       customerDto: {
//         name,
//         phoneNumber,
//         email,
//         aadharNumber,
//         address,
//         panCard,
//         agentName,
//         brokerage,
//       },
//     };

//     console.log("Form Submitted:", payload);

//     try {
//       const response = await axios.put(
//         `${BASE_URL}/updateBooking/${customerBookingId}`,
//         payload,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log(response.data);
//       if (response.status === 200) {
//         alert("Customer Updated");
//         setRefreshKey((prev) => prev + 1);
//         setShowEditCustomerForm(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <h2
//         style={{ textAlign: "center", marginTop: "50px", marginBottom: "50px" }}
//       >
//         Flatowner Details
//       </h2>

//       <div className="flat_owener_multi_button_wrapper">
//         <button
//           className="CustomerSlip"
//           onClick={() => setcustomerSlip(!customerSlip)}
//         >
//           Customer Slip
//         </button>

//         <button
//           className="AddBankAccount"
//           onClick={() => setshowBankDetailForm(true)}
//         >
//           Add Bank Name
//         </button>
//         <button
//           className="AddFlatInstallment"
//           onClick={() => setShowInstallmentForm(true)}
//         >
//           Add Flat Installment
//         </button>

//         <button
//           className="ShowCustomerInstallment"
//           onClick={handleShowInstallment}
//         >
//           Show Customer installment
//         </button>
//         <button className="CancleBooking" onClick={handleCancleBooking}>
//           Cancle Booking
//         </button>
//       </div>

//       {customerDetail ? (
//         <div className="customer_data_card_wrapper">
//           <div className="customer_card_flat_no">
//             <p>
//               <strong>
//                 {" "}
//                 <BsBuilding /> Flat No -{" "}
//               </strong>{" "}
//               {customerDetail.residency?.identifier || "NA"}
//             </p>
//             <button
//               onClick={() =>
//                 handleEditCustomerDetail(
//                   customerDetail.customer?.id,
//                   customerDetail.id
//                 )
//               }
//             >
//               {" "}
//               Edit
//             </button>
//           </div>

//           <div className="customer_card_name_wrapper">
//             <p>
//               {" "}
//               <b style={{ color: "#00a4b3", fontSize: "25px" }}>
//                 {" "}
//                 {customerDetail.customer?.name || "NA"}{" "}
//               </b>
//             </p>
//             <p>
//               {" "}
//               <b>{customerDetail.customer?.phoneNumber || "NA"} </b>
//             </p>
//           </div>
//           <div className="customer_flat_owner_conatiner">
//             <div className="customer_data_container">
//               <h3 style={{ color: "#00a4b3" }}>
//                 {" "}
//                 <FaUser /> Customer Information
//               </h3>
//               <p>
//                 <strong>
//                   <FaEnvelope />{" "}
//                 </strong>{" "}
//                 <b>Email:</b> {customerDetail.customer?.email || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <FaIdCard />{" "}
//                 </strong>{" "}
//                 <b>PAN Card:</b> {customerDetail.customer?.panCard || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <FaIdBadge />{" "}
//                 </strong>{" "}
//                 <b>Aadhar Number:</b>{" "}
//                 {customerDetail.customer?.aadharNumber || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <FaAddressCard />
//                 </strong>{" "}
//                 <b>Address:</b> {customerDetail.customer?.address || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <FaHandshake />
//                 </strong>{" "}
//                 <b>Agent Name:</b> {customerDetail.customer?.agentName || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <MdOutlineAttachMoney />
//                 </strong>
//                 <b>Brokerage:</b>{" "}
//                 {customerDetail.customer?.brokerage
//                   ? Number(customerDetail.customer.brokerage).toLocaleString()
//                   : "NA"}
//               </p>
//             </div>
//             <div className="customer_data_container">
//               <h3 style={{ color: "#00a4b3" }}> Customer Residency </h3>
//               <p>
//                 <strong>
//                   <FaBuilding />
//                 </strong>{" "}
//                 <b>Residency Name:</b> {customerDetail.residency?.name || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <LuFileType />
//                 </strong>{" "}
//                 <b>Flat Type:</b> {customerDetail.residency?.flatType || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <SiFlathub />
//                 </strong>{" "}
//                 <b>Residency Type:</b>{" "}
//                 {customerDetail.residency?.residencyType || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <MdConfirmationNumber />
//                 </strong>{" "}
//                 <b>Floor Number:</b>{" "}
//                 {customerDetail.residency?.floorNumber || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <RiNumbersFill />
//                 </strong>{" "}
//                 <b>Flat No:</b> {customerDetail.residency?.identifier || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <RiMoneyDollarCircleFill />
//                 </strong>{" "}
//                 <b>Actual Price:</b>{" "}
//                 {customerDetail.residency?.price?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <GrStatusUnknown />
//                 </strong>{" "}
//                 <b>Availability Status:</b>{" "}
//                 {customerDetail.residency?.availabilityStatus || "NA"}
//               </p>
//             </div>
//             <div className="customer_data_container">
//               <h3 style={{ color: "#00a4b3" }}>
//                 {" "}
//                 <RiFilePaper2Fill /> Deal Information
//               </h3>
//               <p>
//                 <strong>
//                   <FaCalendarAlt />
//                 </strong>{" "}
//                 <b>Booked On:</b>{" "}
//                 {customerDetail.bookedOn
//                   ? new Date(customerDetail.bookedOn).toLocaleDateString(
//                       "en-GB"
//                     )
//                   : "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <FaBook />
//                 </strong>
//                 <b>Booking Status:</b> {customerDetail.bookingStatus || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <FaSortAmountUp />
//                 </strong>{" "}
//                 <b>GST Amount:</b>{" "}
//                 {customerDetail.gstAmount?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <MdOutlineAttachMoney />
//                 </strong>{" "}
//                 <b>Deal Price:</b>{" "}
//                 {customerDetail.dealPrice?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <MdOutlineAttachMoney />
//                 </strong>{" "}
//                 <b>Token Amount:</b>{" "}
//                 {customerDetail.tokenAmount?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <RiFilePaper2Fill />
//                 </strong>{" "}
//                 <b>Agreement Amount:</b>{" "}
//                 {customerDetail.agreementAmount?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <GiJusticeStar />
//                 </strong>{" "}
//                 <b>Stamp Duty Amount:</b>{" "}
//                 {customerDetail.stampDutyAmount?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <AiOutlineFileProtect />
//                 </strong>{" "}
//                 <b>Registration Amount:</b>{" "}
//                 {customerDetail.registrationAmount?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <BsFillLightningChargeFill />
//                 </strong>{" "}
//                 <b>Electric/Water Amount:</b>{" "}
//                 {customerDetail.electricWaterAmmount?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <GiGavel />
//                 </strong>{" "}
//                 <b>Legal Charges:</b>{" "}
//                 {customerDetail.legalChargesAmmout?.toLocaleString() || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <SiAnswer />
//                 </strong>{" "}
//                 <b>Loan:</b> {customerDetail.customer?.loan || "NA"}
//               </p>
//               <p>
//                 <strong>
//                   <FaSortAmountUpAlt />
//                 </strong>{" "}
//                 <b>Loan Amount:</b>{" "}
//                 {customerDetail.customer?.loanAmount?.toLocaleString() || "N/A"}
//               </p>
//               <p>
//                 <strong>
//                   <CiBank />
//                 </strong>{" "}
//                 <b>Bank Name:</b> {customerDetail.customer?.bankName || "N/A"}
//               </p>
//             </div>
//           </div>
//         </div>
//       ) : (
//         <p>Loading details...</p>
//       )}

//       {ShowEditCustomerForm && (
//         <>
//           <form
//             className="editcustomerbookingDetailform"
//             onSubmit={handleUpdateCustomerDetail}
//           >
//             <div className="editcustomerbookingDetailclosebutton_wrapper">
//               <button
//                 type="button"
//                 className="editcustomerbookingDetailclosebutton"
//                 onClick={() => setShowEditCustomerForm(false)}
//               >
//                 Close
//               </button>
//             </div>

//             <h2>Booking Details</h2>
//             <div className="editcustomerbookingDetailsection">
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Deal Price</label>
//                 <input
//                   type="number"
//                   value={dealPrice}
//                   onChange={(e) => setDealPrice(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Token Amount</label>
//                 <input
//                   type="number"
//                   value={tokenAmount}
//                   onChange={(e) => setTokenAmount(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Agreement Amount</label>
//                 <input
//                   type="number"
//                   value={agreementAmount}
//                   onChange={(e) => setAgreementAmount(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Stamp Duty Amount</label>
//                 <input
//                   type="number"
//                   value={stampDutyAmount}
//                   onChange={(e) => setStampDutyAmount(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Registration Amount</label>
//                 <input
//                   type="number"
//                   value={registrationAmount}
//                   onChange={(e) => setRegistrationAmount(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>GST Amount</label>
//                 <input
//                   type="number"
//                   value={gstAmount}
//                   onChange={(e) => setGstAmount(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Electric Water Amount</label>
//                 <input
//                   type="number"
//                   value={electricWaterAmmount}
//                   onChange={(e) => setElectricWaterAmmount(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Legal Charges Amount</label>
//                 <input
//                   type="number"
//                   value={legalChargesAmmout}
//                   onChange={(e) => setLegalChargesAmmout(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Booked On</label>
//                 <input
//                   type="date"
//                   value={bookedOn}
//                   onChange={(e) => setBookedOn(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Booking Status</label>
//                 <select
//                   value={bookingStatus}
//                   onChange={(e) => setBookingStatus(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 >
//                   <option value="PENDING">PENDING</option>
//                   <option value="COMPLETE">COMPLETE</option>
//                   <option value="CANCELLED">CANCELLED</option>
//                 </select>
//               </div>
//             </div>

//             <h2>Customer Details</h2>
//             <div className="editcustomerbookingDetailsection">
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Name</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Phone Number</label>
//                 <input
//                   type="text"
//                   value={phoneNumber}
//                   onChange={(e) => setPhoneNumber(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Email</label>
//                 <input
//                   type="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Aadhar Number</label>
//                 <input
//                   type="text"
//                   value={aadharNumber}
//                   onChange={(e) => setAadharNumber(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Address</label>
//                 <input
//                   type="text"
//                   value={address}
//                   onChange={(e) => setAddress(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>PAN Card</label>
//                 <input
//                   type="text"
//                   value={panCard}
//                   onChange={(e) => setPanCard(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Agent Name</label>
//                 <input
//                   type="text"
//                   value={agentName}
//                   onChange={(e) => setAgentName(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//               <div className="editcustomerbookingDetailgroup">
//                 <label>Brokerage</label>
//                 <input
//                   type="text"
//                   value={brokerage}
//                   onChange={(e) => setBrokerage(e.target.value)}
//                   className="editcustomerbookingDetailinput"
//                 />
//               </div>
//             </div>

//             <button
//               type="submit"
//               className="editcustomerbookingDetailsubmitbutton"
//             >
//               Submit
//             </button>
//           </form>
//         </>
//       )}

//       {/* bank details form start */}
//       {showBankDetailForm && (
//         <div className="customer_bank_details_form_wrapper">
//           <button
//             onClick={() => setshowBankDetailForm(false)}
//             className="customer_bank_detail_form_close"
//           >
//             X
//           </button>
//           <form className="customer_bank_name" onSubmit={handleSubmitloan}>
//             <label htmlFor=""> Bank name</label>
//             <input
//               type="text"
//               value={bankName}
//               onChange={(e) => setbankName(e.target.value)}
//             />
//             <label htmlFor=""> Loan Amount</label>
//             <input
//               type="text"
//               value={LoanAmount}
//               onChange={(e) => setLoanAmount(e.target.value)}
//             />
//             <div className="bank_detail_submit_button">
//               <button> Submit</button>
//             </div>
//           </form>
//         </div>
//       )}

//       {/* bank details form end */}

//       {/* Add customet installment Form */}
//       {showInstallmentForm && (
//         <div className="customer_installment_form_wrapper">
//           <button
//             onClick={() => setShowInstallmentForm(false)}
//             className="customer_installment_form_close_button"
//           >
//             {" "}
//             X
//           </button>
//           <form
//             action=""
//             onSubmit={handleAddflatinstallment}
//             className="customet_installment_form"
//           >
//             <input
//               type="date"
//               placeholder="Enter Installment Date"
//               value={installmentData || new Date().toISOString().split("T")[0]}
//               onChange={(e) => setInstallmentDate(e.target.value)}
//               className="customer_installment_form_input"
//             />
//             <input
//               type="text"
//               placeholder="Enter Installment Amount"
//               value={installmentAmount}
//               onChange={(e) => setInstallMentAmount(e.target.value)}
//               className="customer_installment_form_input"
//             />
//             <select
//               value={selectinstallmentType}
//               onChange={(e) => setselectinstallmentType(e.target.value)}
//               className="customer_installment_form_select"
//             >
//               <option value=""> Select Payment Method</option>
//               <option value="CASH">Cash</option>
//               <option value="CHECK">Cheque</option>
//               <option value="UPI">UPI</option>
//               <option value="RTGS">RTGS</option>
//               <option value="NEFT">NEFT</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Note ..."
//               value={note}
//               onChange={(e) => setNote(e.target.value)}
//             />
//             <button className="customer_installment_form_submit_button">
//               Submit
//             </button>
//           </form>
//         </div>
//       )}
//       {/* End customet installment Form */}

//       {/*   show Customer installment Card */}
//       {showCustomerInstallMentcard && customerInstallMentDeta && (
//         <div className="customer_installment_card_wrapper">
//           <div className="customer_installment_card_header">
//             <button
//               className="add_print_button_bill"
//               onClick={handlePrintInstallment}
//             >
//               Print
//             </button>
//             <button
//               onClick={() => setshowCustomerInstallMentcard(false)}
//               className="customer_installment_card_close_button"
//             >
//               X
//             </button>
//           </div>

//           <div
//             id="customerInstallmentCard"
//             className="customer_installment_card_content"
//           >
//             <div className="residency_details_section">
//               <h1>Residency Details</h1>
//               <p>
//                 <strong>Residency Name:</strong>{" "}
//                 {customerInstallMentDeta.residencyName}
//               </p>
//               <p>
//                 <strong>Customer Name:</strong>{" "}
//                 {customerInstallMentDeta?.customerName}
//               </p>
//               <p>
//                 <strong>Plot No:</strong> {customerInstallMentDeta.identifier}
//               </p>
//               <p>
//                 <strong>Flat Price:</strong>{" "}
//                 {customerInstallMentDeta.dealPrice
//                   ? customerInstallMentDeta.dealPrice.toLocaleString()
//                   : "N/A"}
//               </p>
//               <p>
//                 <strong>Token Amount:</strong>{" "}
//                 {customerInstallMentDeta.tokenAmount.toLocaleString()}
//               </p>
//               <p>
//                 <strong>Agreement Price:</strong>{" "}
//                 {customerInstallMentDeta.agreementAmount.toLocaleString()}
//               </p>
//               <p>
//                 <strong>Customer Remaining Amount:</strong>{" "}
//                 {customerInstallMentDeta.remainingAmount.toLocaleString()}
//               </p>
//             </div>
//             <table className="customer_installment_card_table">
//               <thead>
//                 <tr className="customer_installment_card_tr">
//                   <th className="customer_installment_card_th">
//                     Installment Date
//                   </th>
//                   <th className="customer_installment_card_th">
//                     Installment Amount
//                   </th>
//                   <th className="customer_installment_card_th">
//                     Installment Status
//                   </th>
//                   <th className="customer_installment_card_th">Note</th>
//                   <th className="customer_installment_card_th action-column">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {customerInstallMentDeta.bookingInstallments.map(
//                   (item, index) => (
//                     <tr key={item.id} className="customer_installment_card_tr">
//                       <td className="customer_installment_card_td">
//                         {new Date(item.installmentDate).toLocaleDateString(
//                           "en-GB"
//                         )}
//                       </td>
//                       <td className="customer_installment_card_td">
//                         {item.installmentAmount.toLocaleString()}
//                       </td>
//                       <td className="customer_installment_card_td">
//                         {item.installmentStatus}
//                       </td>
//                       <td className="customer_installment_card_td">
//                         {item.remark}
//                       </td>
//                       <td className="customer_installment_card_td">
//                         <button
//                           className="installment_edit_button"
//                           onClick={() => handleEditInstallment(item.id)}
//                         >
//                           Edit
//                         </button>
//                         <br />
//                         <button
//                           className="installment_delete_button"
//                           onClick={() => handleDeleteInstallment(item.id)}
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   )
//                 )}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       )}
//       {showCustomerInstallmentEditForm && (
//         <>
//           <p className="showCustomerInstallmentEditForm_heading">
//             {" "}
//             Edit InstallMent
//           </p>
//           <form
//             className="showCustomerInstallmentEditForm_form"
//             onSubmit={handleSubmit}
//           >
//             <button
//               type="button"
//               onClick={() => setshowCustomerInstallmentEditForm(false)}
//               className="showCustomerInstallmentEditForm_close_button"
//             >
//               X
//             </button>
//             <input
//               type="date"
//               value={
//                 InstallmentEditFormDate ||
//                 new Date().toISOString().split("T")[0]
//               }
//               onChange={(e) => setInstallmentEditFormDate(e.target.value)}
//               className="showCustomerInstallmentEditForm_input"
//             />
//             <input
//               type="text"
//               placeholder="Installment Amount"
//               value={InstallmentEditFormAmount}
//               onChange={(e) => setInstallmentEditFormAmount(e.target.value)}
//               className="showCustomerInstallmentEditForm_input"
//             />
//             <select
//               value={InstallmentEditFormPaymentMethod}
//               onChange={(e) =>
//                 setInstallmentEditFormPaymentMethod(e.target.value)
//               }
//               className="showCustomerInstallmentEditForm_select"
//             >
//               <option value="">Select Payment Method</option>
//               <option value="CASH">Cash</option>
//               <option value="CHECK">Cheque</option>
//               <option value="UPI">UPI</option>
//               <option value="RTGS">RTGS</option>
//               <option value="NEFT">NEFT</option>
//             </select>
//             <input
//               type="text"
//               placeholder="Remark"
//               value={InstallmentEditFormRemark}
//               onChange={(e) => setInstallmentEditFormRemark(e.target.value)}
//               className="showCustomerInstallmentEditForm_input"
//             />
//             <button
//               type="submit"
//               className="showCustomerInstallmentEditForm_submit_button"
//             >
//               Submit
//             </button>
//           </form>
//         </>
//       )}

//       {/*   customer Slip */}

//       {customerSlip && customerDetail && (
//         <>
//           <div className="customer_final_slip_main_wrapper">
//             <button
//               onClick={() => setcustomerSlip(!customerSlip)}
//               className="customer_salary_slip_close_button"
//             >
//               X
//             </button>

//             <button
//               onClick={handleDownload}
//               className="customer_salary_slip_downlode_btn"
//             >
//               {" "}
//               Download
//             </button>
//             <div className="royaal_patment_slip_main_wrapper" ref={letterref}>
//               <div
//                 className="payment_slip_header"
//                 style={{ marginLeft: "25px" }}
//               >
//                 <img src={infraLogo} alt="" height={"80px"} width={"150px"} />
//                 <p style={{ fontSize: "12px" }}>
//                   Address : 28, GOVIND PRABHU NAGAR , RAJAPETH HUDKESHWAR ROAD ,
//                   NAGPUR - 34
//                 </p>
//                 <p style={{ marginBottom: "5px", fontSize: "12px" }}>
//                   CONTACT: + 91-9028999253 | 9373450092
//                 </p>
//               </div>
//               <hr
//                 style={{
//                   border: "2px solid green",
//                 }}
//               />

//               <p
//                 style={{
//                   marginTop: "10px",
//                   marginLeft: "25px",
//                   fontSize: "12px",
//                 }}
//               >
//                 Date: {new Date().toLocaleDateString("en-GB")}
//               </p>

//               <div
//                 className="payment_slip_first_table_wrapper"
//                 style={{ marginLeft: "25px", marginTop: "10px" }}
//               >
//                 <table
//                   style={{
//                     border: "1px solid gray",
//                     borderCollapse: "collapse",
//                     width: "400px",
//                   }}
//                   className="payment_slip_first_table"
//                 >
//                   <tr>
//                     <td style={{ border: "1px solid gray" }}>
//                       <b style={{ fontSize: "12px", padding: "2px 10px" }}>
//                         Flat No / Plot No{" "}
//                       </b>
//                     </td>
//                     <td style={{ border: "1px solid gray" }}>
//                       <b style={{ fontSize: "12px", padding: "2px 10px" }}>
//                         {" "}
//                         {customerDetail.residency.identifier}
//                       </b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ border: "1px solid gray" }}>
//                       <b style={{ fontSize: "12px", padding: "2px 10px" }}>
//                         {" "}
//                         Area
//                       </b>
//                     </td>
//                     <td style={{ border: "1px solid gray" }}>
//                       <b style={{ fontSize: "12px", padding: "2px 10px" }}>
//                         {" "}
//                         {customerDetail.customer.address}
//                       </b>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td style={{ border: "1px solid gray" }}>
//                       <b style={{ fontSize: "12px", padding: "2px 10px" }}>
//                         Location
//                       </b>
//                     </td>
//                     <td style={{ border: "1px solid gray" }}>
//                       <b style={{ fontSize: "12px", padding: "2px 10px" }}>
//                         {customerDetail.residency.name}
//                       </b>
//                     </td>
//                   </tr>
//                 </table>
//               </div>
//               <p
//                 style={{
//                   marginLeft: "25px",
//                   marginTop: "25px",
//                   textAlign: "center",
//                   fontSize: "15px",
//                 }}
//               >
//                 RECEIVED with thanks from <b>{customerDetail.customer.name} </b>
//                 the sum of Rupees{" "}
//                 <b> {customerDetail.dealPrice.toLocaleString()} </b> by Cheque /
//                 Cash / Draft No. <b>{customerDetail.residency.identifier}</b>{" "}
//                 flat / plot address <b> {customerDetail.customer.address} </b>{" "}
//                 in part / full / advance payment.
//               </p>

//               <div
//                 className="payment_slip_container"
//                 style={{
//                   border: "2px solid black",
//                   width: "150px",
//                   borderRadius: "50px",
//                   marginLeft: "25px",
//                   marginTop: "15px",
//                 }}
//               >
//                 <p style={{ fontSize: "15px", marginLeft: "5px" }}>
//                   ₹ : <b> {customerDetail.dealPrice.toLocaleString()}</b>
//                 </p>
//               </div>
//               <p
//                 style={{
//                   marginLeft: "25px",
//                   marginTop: "5px",
//                   fontSize: "15px",
//                 }}
//               >
//                 <b>
//                   {" "}
//                   Balance Amount :{" "}
//                   {(
//                     customerDetail.dealPrice -
//                     (customerDetail.agreementAmount +
//                       customerDetail.tokenAmount)
//                   ).toLocaleString()}
//                 </b>
//               </p>
//               <p
//                 style={{
//                   marginLeft: "25px",
//                   marginTop: "5px",
//                   fontSize: "15px",
//                 }}
//               >
//                 <b>
//                   Total Payable:{" "}
//                   {(
//                     customerDetail.agreementAmount + customerDetail.tokenAmount
//                   ).toLocaleString()}
//                 </b>
//               </p>

//               <div
//                 className="payment_slip_signature_wrapper"
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   marginTop: "30px",
//                 }}
//               >
//                 <b style={{ marginLeft: "25px", fontSize: "15px" }}>
//                   Customer Signature
//                 </b>
//                 <b style={{ marginRight: "30px", fontSize: "15px" }}>
//                   Authorised Signature
//                 </b>
//               </div>

//               <hr style={{ border: "2px solid green" }} />

//               <div
//                 className="payment_slip_secound_slip"
//                 style={{
//                   display: "flex",
//                   justifyContent: "center",
//                   alignContent: "center",
//                   marginLeft: "25px",
//                 }}
//               >
//                 <table
//                   style={{
//                     width: "100%",
//                     borderCollapse: "collapse",
//                     margin: "20px 0",
//                     fontFamily: "Arial, sans-serif",
//                     fontSize: "13px",
//                   }}
//                 >
//                   <tr>
//                     <th
//                       style={{
//                         border: "1px solid #000",
//                         padding: "2px 10px",
//                         backgroundColor: "#f2f2f2",
//                         color: "black",
//                       }}
//                     >
//                       S.No.
//                     </th>
//                     <th
//                       style={{
//                         border: "1px solid #000",
//                         padding: "2px 10px",
//                         backgroundColor: "#f2f2f2",
//                         color: "black",
//                       }}
//                     >
//                       Other Charges
//                     </th>
//                     <th
//                       style={{
//                         border: "1px solid #000",
//                         padding: "2px 10px",
//                         backgroundColor: "#f2f2f2",
//                         color: "black",
//                       }}
//                     >
//                       Percentage
//                     </th>
//                     <th
//                       style={{
//                         border: "1px solid #000",
//                         padding: "2px 10px",
//                         backgroundColor: "#f2f2f2",
//                         color: "black",
//                       }}
//                     >
//                       Amount
//                     </th>
//                   </tr>
//                   <tr>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       0
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       Total Price
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       -
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {customerDetail.dealPrice.toLocaleString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       1
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       Stamp Duty
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                       {customerDetail.stampDutyAmount.toLocaleString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       2
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       Registration
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                       {customerDetail.registrationAmount.toLocaleString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       3
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       GST
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                       {customerDetail.gstAmount.toLocaleString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       4
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       Electric Meter and Water Charges
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                       {customerDetail.electricWaterAmmount.toLocaleString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       5
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       Legal Charges / Documentation Charges
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                       {customerDetail.legalChargesAmmout.toLocaleString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       6
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       Maintenance Charges for 5 Years
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                   </tr>
//                   <tr>
//                     <td
//                       colSpan="2"
//                       style={{
//                         border: "1px solid #000",
//                         padding: "2px 10px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Total of Overhead Charges:
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                   </tr>
//                   <tr>
//                     <td
//                       colSpan="2"
//                       style={{
//                         border: "1px solid #000",
//                         padding: "2px 10px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Basic Cost of Flat:
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                       {customerDetail.dealPrice.toLocaleString()}
//                     </td>
//                   </tr>
//                   <tr>
//                     <td
//                       colSpan="2"
//                       style={{
//                         border: "1px solid #000",
//                         padding: "2px 10px",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       Grand Total:
//                     </td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     ></td>
//                     <td
//                       style={{ border: "1px solid #000", padding: "2px 10px" }}
//                     >
//                       {" "}
//                       {(
//                         customerDetail.dealPrice +
//                         customerDetail.stampDutyAmount +
//                         customerDetail.registrationAmount +
//                         customerDetail.gstAmount +
//                         customerDetail.electricWaterAmmount +
//                         customerDetail.legalChargesAmmout
//                       ).toLocaleString()}
//                     </td>
//                   </tr>
//                 </table>
//               </div>
//               <h3
//                 style={{ fontFamily: "Arial, sans-serif", marginLeft: "25px" }}
//               >
//                 Terms and Conditions:
//               </h3>
//               <hr style={{ border: "1px solid green" }} />
//               <ol style={{ fontFamily: "Arial, sans-serif" }}>
//                 <li style={{ fontSize: "12px" }}>
//                   1 .Elevation changes not allowed.
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   {" "}
//                   2. Extra item work charges to be paid in advance.
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   3. If purchaser has to change any item like tiles, he has to
//                   purchase it from market, and variable it on site for its own
//                   cost, no deduction allowed for this condition. This condition
//                   is for all material.
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   3. If purchaser has to change any item like wise tiles he has
//                   to purchase it from market and available it on site for use at
//                   his own cost, no deduction allowed for this (This condition is
//                   for all material).
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   4. Agreement of Development for sale will be executed within
//                   10 days from the date of Booking and aftersanctioning the Bank
//                   Loan.
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   5. Stampduty & Registration Charges will be taken at
//                   Registration of Agreement to Sell
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   6. GST charges will be taken accordingly with payment
//                   schedule.
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   7. The Rate of GST or any taxes may vary as per Govt. policies
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   8. Maintenance, MSEB charges will be taken at the time of Sale
//                   Deed/ Possession.
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   9. If any cancellations happens then 30% amount will be
//                   deducted.
//                 </li>
//                 <li style={{ fontSize: "12px" }}>
//                   10. Builder reserve all right to change
//                   planning and elevation.
//                 </li>
//               </ol>
//             </div>
//           </div>
//         </>
//       )}
//     </>
//   );
// }

// export default Flatowner;

"use client";

import axios from "axios";
import { useEffect, useState, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import html2pdf from "html2pdf.js/dist/html2pdf";
import "../addflat/FlatOwner.css";

// Icons
import {
  BsBuilding,
  BsBank,
  BsCreditCard,
  BsFileText,
  BsPrinter,
  BsDownload,
  BsX,
  BsPlus,
  BsEye,
  BsPencil,
  BsTrash,
} from "react-icons/bs";
import {
  FaUser,
  FaEnvelope,
  FaIdCard,
  FaAddressCard,
  FaHandshake,
  FaBuilding,
  FaCalendarAlt,
  FaBook,
} from "react-icons/fa";
import {
  MdOutlineAttachMoney,
  MdConfirmationNumber,
  MdEdit,
  MdClose,
  MdSave,
} from "react-icons/md";
import { RiFilePaper2Fill, RiMoneyDollarCircleFill } from "react-icons/ri";
import { LuFileType } from "react-icons/lu";
import { SiFlathub } from "react-icons/si";
import { GrStatusUnknown } from "react-icons/gr";
import { CiBank } from "react-icons/ci";

import { BASE_URL } from "../../config";

function Flatowner() {
  const letterref = useRef();
  const { id } = useParams();
  const navigate = useNavigate();
  const token = JSON.parse(
    localStorage.getItem("employeROyalmadeLogin")
  )?.token;

  // State management
  const [customerDetail, setCustomerDetail] = useState(null);
  const [bankName, setbankName] = useState("");
  const [LoanAmount, setLoanAmount] = useState("");
  const [customerid, setCustomerId] = useState("");
  const [refreshKey, setRefreshKey] = useState(0);
  const [showBankDetailForm, setshowBankDetailForm] = useState(false);
  const [showInstallmentForm, setShowInstallmentForm] = useState(false);
  const [installmentData, setInstallmentDate] = useState("");
  const [installmentAmount, setInstallMentAmount] = useState("");
  const [selectinstallmentType, setselectinstallmentType] = useState("");
  const [showCustomerInstallMentcard, setshowCustomerInstallMentcard] =
    useState(false);
  const [customerInstallMentDeta, setcustomerInstallMentDeta] = useState("");
  const [customerSlip, setcustomerSlip] = useState(false);
  const [note, setNote] = useState("");
  const [showCustomerInstallmentEditForm, setshowCustomerInstallmentEditForm] =
    useState(false);
  const [installmentId, setinstallmentId] = useState("");
  const [InstallmentEditFormDate, setInstallmentEditFormDate] = useState("");
  const [InstallmentEditFormAmount, setInstallmentEditFormAmount] =
    useState("");
  const [
    InstallmentEditFormPaymentMethod,
    setInstallmentEditFormPaymentMethod,
  ] = useState("");
  const [InstallmentEditFormRemark, setInstallmentEditFormRemark] =
    useState("");
  const [ShowEditCustomerForm, setShowEditCustomerForm] = useState(false);
  const [customerBookingUpdateId, setcustomerBookingUpdateId] = useState("");
  const [dealPrice, setDealPrice] = useState("");
  const [tokenAmount, setTokenAmount] = useState("");
  const [agreementAmount, setAgreementAmount] = useState("");
  const [stampDutyAmount, setStampDutyAmount] = useState("");
  const [registrationAmount, setRegistrationAmount] = useState("");
  const [gstAmount, setGstAmount] = useState("");
  const [electricWaterAmmount, setElectricWaterAmmount] = useState("");
  const [legalChargesAmmout, setLegalChargesAmmout] = useState("");
  const [bookedOn, setBookedOn] = useState("");
  const [bookingStatus, setBookingStatus] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [address, setAddress] = useState("");
  const [panCard, setPanCard] = useState("");
  const [agentName, setAgentName] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [customerBookingId, setcustomerBookingId] = useState("");

  // API calls and handlers (keeping the same logic)
  useEffect(() => {
    async function customerProfile() {
      try {
        const response = await axios.get(`${BASE_URL}/booking/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
        setCustomerId(response?.data?.customer?.id);
        setCustomerDetail(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    customerProfile();
  }, [id, token, refreshKey]);

  async function handleSubmitloan(e) {
    e.preventDefault();
    const formdata = {
      bankName: bankName,
      loanAmount: LoanAmount.replace(/,/g, ""),
    };
    try {
      const response = await axios.post(
        `${BASE_URL}/addLoanDetails/${customerid}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        Swal.fire({
          title: "Success!",
          text: "Bank Details Added Successfully",
          icon: "success",
          confirmButtonColor: "#10b981",
        });
        setRefreshKey((prev) => prev + 1);
        setshowBankDetailForm(false);
        setbankName("");
        setLoanAmount("");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCancleBooking() {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to cancel the booking?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, cancel it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.put(
          `${BASE_URL}/cancelBooking/${id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        Swal.fire("Cancelled!", "Booking has been cancelled.", "success");
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function handleAddflatinstallment(e) {
    e.preventDefault();
    const formdata = [
      {
        installmentDate:
          installmentData || new Date().toISOString().split("T")[0],
        installmentAmount: installmentAmount.replace(/,/g, ""),
        installmentStatus: selectinstallmentType,
        remark: note,
      },
    ];
    try {
      await axios.post(`${BASE_URL}/${id}/addInstallment`, formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      Swal.fire("Success!", "Payment added successfully", "success");
      setShowInstallmentForm(false);
      setInstallmentDate("");
      setInstallMentAmount("");
      setselectinstallmentType("");
      setNote("");
      setRefreshKey(refreshKey + 1);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleShowInstallment() {
    setshowCustomerInstallMentcard(true);
    try {
      const response = await axios.get(`${BASE_URL}/BookingSummary/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      setcustomerInstallMentDeta(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleDownload = () => {
    const element = letterref.current;
    const options = {
      margin: 0.5,
      filename: "Final Booking Slip.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  async function handleEditInstallment(installmentId) {
    setinstallmentId(installmentId);
    setshowCustomerInstallmentEditForm(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/getBookingInstallmentById/${installmentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setInstallmentEditFormAmount(response.data.installmentAmount);
      setInstallmentEditFormDate(response.data.installmentDate);
      setInstallmentEditFormPaymentMethod(response.data.installmentStatus);
      setInstallmentEditFormRemark(response.data.remark);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formdata = {
      installmentDate: InstallmentEditFormDate,
      installmentAmount: String(InstallmentEditFormAmount)?.replace(/,/g, ""),
      remark: InstallmentEditFormRemark,
      installmentStatus: InstallmentEditFormPaymentMethod,
    };
    try {
      const response = await axios.put(
        `${BASE_URL}/updateBookingInstallment/${installmentId}`,
        formdata,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        Swal.fire("Success!", "Installment updated successfully", "success");
        handleShowInstallment();
        setshowCustomerInstallmentEditForm(false);
        setInstallmentEditFormDate("");
        setInstallmentEditFormAmount("");
        setInstallmentEditFormRemark("");
        setInstallmentEditFormPaymentMethod("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  async function handleDeleteInstallment(id) {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this installment?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`${BASE_URL}/deleteBookingInstallment/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        Swal.fire("Deleted!", "Installment has been deleted.", "success");
        setRefreshKey(refreshKey + 1);
        setcustomerInstallMentDeta((prev) => ({
          ...prev,
          bookingInstallments: prev.bookingInstallments.filter(
            (installment) => installment.id !== id
          ),
        }));
      } catch (error) {
        console.log(error);
      }
    }
  }

  const handlePrintInstallment = () => {
    const element = document
      .getElementById("customerInstallmentCard")
      .cloneNode(true);
    element
      .querySelectorAll(".flatowner-action-btn, .flatowner-action-column")
      .forEach((btn) => btn.remove());
    element.style.padding = "20px";
    html2pdf()
      .from(element)
      .save(`Customer_Installment_${customerInstallMentDeta.identifier}.pdf`);
  };

  async function handleEditCustomerDetail(customerId, bookingId) {
    setcustomerBookingUpdateId(customerId);
    setcustomerBookingId(bookingId);
    setShowEditCustomerForm(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/getBookingCoustomerId/${customerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      // Set all form values from response
      setAgreementAmount(response.data.agreementAmount);
      setDealPrice(response.data.dealPrice);
      setTokenAmount(response.data.tokenAmount);
      setStampDutyAmount(response.data.stampDutyAmount);
      setRegistrationAmount(response.data.registrationAmount);
      setGstAmount(response.data.gstAmount);
      setElectricWaterAmmount(response.data.electricWaterAmmount);
      setLegalChargesAmmout(response.data.legalChargesAmmout);
      setBookedOn(response.data.bookedOn);
      setBookingStatus(response.data.bookingStatus);
      setName(response.data?.customer?.name);
      setPhoneNumber(response.data?.customer?.phoneNumber);
      setEmail(response.data?.customer?.email);
      setAadharNumber(response.data?.customer?.aadharNumber);
      setAddress(response.data?.customer?.address);
      setPanCard(response.data?.customer?.panCard);
      setAgentName(response.data?.customer?.agentName);
      setBrokerage(response.data?.customer?.brokerage);
    } catch (error) {
      console.log(error);
    }
  }

  const handleUpdateCustomerDetail = async (e) => {
    e.preventDefault();
    const payload = {
      dealPrice,
      tokenAmount,
      agreementAmount,
      stampDutyAmount,
      registrationAmount,
      gstAmount,
      electricWaterAmmount,
      legalChargesAmmout,
      bookedOn,
      bookingStatus,
      customerDto: {
        name,
        phoneNumber,
        email,
        aadharNumber,
        address,
        panCard,
        agentName,
        brokerage,
      },
    };
    try {
      const response = await axios.put(
        `${BASE_URL}/updateBooking/${customerBookingId}`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        Swal.fire(
          "Success!",
          "Customer details updated successfully",
          "success"
        );
        setRefreshKey((prev) => prev + 1);
        setShowEditCustomerForm(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flatowner-main-container">
      {/* Header Section */}
      <div className="flatowner-header">
        <div className="flatowner-header-content">
          <h1 className="flatowner-title">
            <BsBuilding className="flatowner-title-icon" />
            Flat Owner Management
          </h1>
          <p className="flatowner-subtitle">
            Comprehensive property and customer management system
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flatowner-action-bar">
        <button
          className="flatowner-btn flatowner-btn-primary"
          onClick={() => setcustomerSlip(!customerSlip)}
        >
          <BsFileText />
          Customer Slip
        </button>
        <button
          className="flatowner-btn flatowner-btn-secondary"
          onClick={() => setshowBankDetailForm(true)}
        >
          <BsBank />
          Add Bank Details
        </button>
        <button
          className="flatowner-btn flatowner-btn-success"
          onClick={() => setShowInstallmentForm(true)}
        >
          <BsPlus />
          Add Installment
        </button>
        <button
          className="flatowner-btn flatowner-btn-info"
          onClick={handleShowInstallment}
        >
          <BsEye />
          View Installments
        </button>
        <button
          className="flatowner-btn flatowner-btn-danger"
          onClick={handleCancleBooking}
        >
          <BsX />
          Cancel Booking
        </button>
      </div>

      {/* Customer Details Card */}
      {customerDetail ? (
        <div className="flatowner-customer-card">
          <div className="flatowner-card-header">
            <div className="flatowner-flat-info">
              <h2 className="flatowner-flat-number">
                <BsBuilding className="flatowner-icon" />
                Flat No: {customerDetail.residency?.identifier || "N/A"}
              </h2>
              <button
                className="flatowner-edit-btn"
                onClick={() =>
                  handleEditCustomerDetail(
                    customerDetail.customer?.id,
                    customerDetail.id
                  )
                }
              >
                <MdEdit />
                Edit Details
              </button>
            </div>
            <div className="flatowner-customer-name">
              <h3>{customerDetail.customer?.name || "N/A"}</h3>
              <p>{customerDetail.customer?.phoneNumber || "N/A"}</p>
            </div>
          </div>

          <div className="flatowner-details-grid">
            {/* Customer Information */}
            <div className="flatowner-info-section">
              <h4 className="flatowner-section-title">
                <FaUser className="flatowner-section-icon" />
                Customer Information
              </h4>
              <div className="flatowner-info-list">
                <div className="flatowner-info-item">
                  <FaEnvelope className="flatowner-item-icon" />
                  <span className="flatowner-label">Email:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.email || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <FaIdCard className="flatowner-item-icon" />
                  <span className="flatowner-label">PAN Card:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.panCard || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <BsCreditCard className="flatowner-item-icon" />
                  <span className="flatowner-label">Aadhar:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.aadharNumber || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <FaAddressCard className="flatowner-item-icon" />
                  <span className="flatowner-label">Address:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.address || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <FaHandshake className="flatowner-item-icon" />
                  <span className="flatowner-label">Agent:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.agentName || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <MdOutlineAttachMoney className="flatowner-item-icon" />
                  <span className="flatowner-label">Brokerage:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.brokerage
                      ? Number(
                          customerDetail.customer.brokerage
                        ).toLocaleString()
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Residency Information */}
            <div className="flatowner-info-section">
              <h4 className="flatowner-section-title">
                <FaBuilding className="flatowner-section-icon" />
                Property Details
              </h4>
              <div className="flatowner-info-list">
                <div className="flatowner-info-item">
                  <BsBuilding className="flatowner-item-icon" />
                  <span className="flatowner-label">Project:</span>
                  <span className="flatowner-value">
                    {customerDetail.residency?.name || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <LuFileType className="flatowner-item-icon" />
                  <span className="flatowner-label">Flat Type:</span>
                  <span className="flatowner-value">
                    {customerDetail.residency?.flatType || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <SiFlathub className="flatowner-item-icon" />
                  <span className="flatowner-label">Type:</span>
                  <span className="flatowner-value">
                    {customerDetail.residency?.residencyType || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <MdConfirmationNumber className="flatowner-item-icon" />
                  <span className="flatowner-label">Floor:</span>
                  <span className="flatowner-value">
                    {customerDetail.residency?.floorNumber || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <RiMoneyDollarCircleFill className="flatowner-item-icon" />
                  <span className="flatowner-label">Price:</span>
                  <span className="flatowner-value">
                    {customerDetail.residency?.price?.toLocaleString() || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <GrStatusUnknown className="flatowner-item-icon" />
                  <span className="flatowner-label">Status:</span>
                  <span className="flatowner-value">
                    {customerDetail.residency?.availabilityStatus || "N/A"}
                  </span>
                </div>
              </div>
            </div>

            {/* Deal Information */}
            <div className="flatowner-info-section">
              <h4 className="flatowner-section-title">
                <RiFilePaper2Fill className="flatowner-section-icon" />
                Deal Information
              </h4>
              <div className="flatowner-info-list">
                <div className="flatowner-info-item">
                  <FaCalendarAlt className="flatowner-item-icon" />
                  <span className="flatowner-label">Booked On:</span>
                  <span className="flatowner-value">
                    {customerDetail.bookedOn
                      ? new Date(customerDetail.bookedOn).toLocaleDateString(
                          "en-GB"
                        )
                      : "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <FaBook className="flatowner-item-icon" />
                  <span className="flatowner-label">Status:</span>
                  <span className="flatowner-value">
                    {customerDetail.bookingStatus || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <MdOutlineAttachMoney className="flatowner-item-icon" />
                  <span className="flatowner-label">Deal Price:</span>
                  <span className="flatowner-value">
                    {customerDetail.dealPrice?.toLocaleString() || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <MdOutlineAttachMoney className="flatowner-item-icon" />
                  <span className="flatowner-label">Token:</span>
                  <span className="flatowner-value">
                    {customerDetail.tokenAmount?.toLocaleString() || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <RiFilePaper2Fill className="flatowner-item-icon" />
                  <span className="flatowner-label">Agreement:</span>
                  <span className="flatowner-value">
                    {customerDetail.agreementAmount?.toLocaleString() || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <RiFilePaper2Fill className="flatowner-item-icon" />
                  <span className="flatowner-label">Stamp DutyAmount:</span>
                  <span className="flatowner-value">
                    {customerDetail.stampDutyAmount?.toLocaleString() || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <RiFilePaper2Fill className="flatowner-item-icon" />
                  <span className="flatowner-label">
                    Electric Water Ammount:
                  </span>
                  <span className="flatowner-value">
                    {customerDetail.electricWaterAmmount?.toLocaleString() ||
                      "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <RiFilePaper2Fill className="flatowner-item-icon" />
                  <span className="flatowner-label">GST Amount:</span>
                  <span className="flatowner-value">
                    {customerDetail.gstAmount?.toLocaleString() || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <RiFilePaper2Fill className="flatowner-item-icon" />
                  <span className="flatowner-label">Legal Charges Ammout:</span>
                  <span className="flatowner-value">
                    {customerDetail.legalChargesAmmout?.toLocaleString() ||
                      "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <RiFilePaper2Fill className="flatowner-item-icon" />
                  <span className="flatowner-label">Registration Amount:</span>
                  <span className="flatowner-value">
                    {customerDetail.registrationAmount?.toLocaleString() ||
                      "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <CiBank className="flatowner-item-icon" />
                  <span className="flatowner-label">Bank:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.bankName || "N/A"}
                  </span>
                </div>
                <div className="flatowner-info-item">
                  <CiBank className="flatowner-item-icon" />
                  <span className="flatowner-label">Bank Amount:</span>
                  <span className="flatowner-value">
                    {customerDetail.customer?.loanAmount?.toLocaleString() ||
                      "N/A"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flatowner-loading">
          <div className="flatowner-spinner"></div>
          <p>Loading customer details...</p>
        </div>
      )}

      {/* Bank Details Form Modal */}
      {showBankDetailForm && (
        <div className="flatowner-modal-overlay">
          <div className="flatowner-modal">
            <div className="flatowner-modal-header">
              <h3>Add Bank Details</h3>
              <button
                className="flatowner-close-btn"
                onClick={() => setshowBankDetailForm(false)}
              >
                <MdClose />
              </button>
            </div>
            <form onSubmit={handleSubmitloan} className="flatowner-form">
              <div className="flatowner-form-group">
                <label>Bank Name</label>
                <input
                  type="text"
                  value={bankName}
                  onChange={(e) => setbankName(e.target.value)}
                  className="flatowner-input"
                  required
                />
              </div>
              <div className="flatowner-form-group">
                <label>Loan Amount</label>
                <input
                  type="text"
                  value={LoanAmount}
                  onChange={(e) => setLoanAmount(e.target.value)}
                  className="flatowner-input"
                  required
                />
              </div>
              <div className="flatowner-form-actions">
                <button
                  type="button"
                  onClick={() => setshowBankDetailForm(false)}
                  className="flatowner-btn flatowner-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flatowner-btn flatowner-btn-primary"
                >
                  <MdSave />
                  Save Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Installment Form Modal */}
      {showInstallmentForm && (
        <div className="flatowner-modal-overlay">
          <div className="flatowner-modal">
            <div className="flatowner-modal-header">
              <h3>Add Installment</h3>
              <button
                className="flatowner-close-btn"
                onClick={() => setShowInstallmentForm(false)}
              >
                <MdClose />
              </button>
            </div>
            <form
              onSubmit={handleAddflatinstallment}
              className="flatowner-form"
            >
              <div className="flatowner-form-group">
                <label>Installment Date</label>
                <input
                  type="date"
                  value={
                    installmentData || new Date().toISOString().split("T")[0]
                  }
                  onChange={(e) => setInstallmentDate(e.target.value)}
                  className="flatowner-input"
                />
              </div>
              <div className="flatowner-form-group">
                <label>Amount</label>
                <input
                  type="text"
                  placeholder="Enter installment amount"
                  value={installmentAmount}
                  onChange={(e) => setInstallMentAmount(e.target.value)}
                  className="flatowner-input"
                  required
                />
              </div>
              <div className="flatowner-form-group">
                <label>Payment Method</label>
                <select
                  value={selectinstallmentType}
                  onChange={(e) => setselectinstallmentType(e.target.value)}
                  className="flatowner-select"
                  required
                >
                  <option value="">Select Payment Method</option>
                  <option value="CASH">Cash</option>
                  <option value="CHECK">Cheque</option>
                  <option value="UPI">UPI</option>
                  <option value="RTGS">RTGS</option>
                  <option value="NEFT">NEFT</option>
                </select>
              </div>
              <div className="flatowner-form-group">
                <label>Note</label>
                <textarea
                  placeholder="Add a note..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="flatowner-textarea"
                  rows="3"
                />
              </div>
              <div className="flatowner-form-actions">
                <button
                  type="button"
                  onClick={() => setShowInstallmentForm(false)}
                  className="flatowner-btn flatowner-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flatowner-btn flatowner-btn-success"
                >
                  <BsPlus />
                  Add Installment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Installment Details Modal */}
      {showCustomerInstallMentcard && customerInstallMentDeta && (
        <div className="flatowner-modal-overlay">
          <div className="flatowner-modal flatowner-modal-large">
            <div className="flatowner-modal-header">
              <h3>Customer Installments</h3>
              <div className="flatowner-header-actions">
                <button
                  className="flatowner-btn flatowner-btn-success"
                  onClick={handlePrintInstallment}
                >
                  <BsPrinter />
                  Print
                </button>
                <button
                  className="flatowner-close-btn"
                  onClick={() => setshowCustomerInstallMentcard(false)}
                >
                  <MdClose />
                </button>
              </div>
            </div>

            <div
              id="customerInstallmentCard"
              className="flatowner-installment-content"
            >
              <div className="flatowner-residency-details">
                <h4>Property Summary</h4>
                <div className="flatowner-summary-grid">
                  <div className="flatowner-summary-item">
                    <span className="flatowner-summary-label">Project:</span>
                    <span className="flatowner-summary-value">
                      {customerInstallMentDeta.residencyName}
                    </span>
                  </div>
                  <div className="flatowner-summary-item">
                    <span className="flatowner-summary-label">Customer:</span>
                    <span className="flatowner-summary-value">
                      {customerInstallMentDeta?.customerName}
                    </span>
                  </div>
                  <div className="flatowner-summary-item">
                    <span className="flatowner-summary-label">Plot No:</span>
                    <span className="flatowner-summary-value">
                      {customerInstallMentDeta.identifier}
                    </span>
                  </div>
                  <div className="flatowner-summary-item">
                    <span className="flatowner-summary-label">Deal Price:</span>
                    <span className="flatowner-summary-value">
                      ₹
                      {customerInstallMentDeta.dealPrice
                        ? customerInstallMentDeta.dealPrice.toLocaleString()
                        : "N/A"}
                    </span>
                  </div>
                  <div className="flatowner-summary-item">
                    <span className="flatowner-summary-label">
                      Token Amount:
                    </span>
                    <span className="flatowner-summary-value">
                      ₹{customerInstallMentDeta.tokenAmount.toLocaleString()}
                    </span>
                  </div>
                  <div className="flatowner-summary-item">
                    <span className="flatowner-summary-label">Remaining:</span>
                    <span className="flatowner-summary-value">
                      ₹
                      {customerInstallMentDeta.remainingAmount.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flatowner-table-container">
                <table className="flatowner-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Method</th>
                      <th>Note</th>
                      <th className="flatowner-action-column">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customerInstallMentDeta.bookingInstallments.map((item) => (
                      <tr key={item.id}>
                        <td>
                          {new Date(item.installmentDate).toLocaleDateString(
                            "en-GB"
                          )}
                        </td>
                        <td>₹{item.installmentAmount.toLocaleString()}</td>
                        <td>
                          <span className="flatowner-payment-method">
                            {item.installmentStatus}
                          </span>
                        </td>
                        <td>{item.remark}</td>
                        <td className="flatowner-action-column">
                          <button
                            className="flatowner-action-btn flatowner-btn-edit"
                            onClick={() => handleEditInstallment(item.id)}
                          >
                            <BsPencil />
                          </button>
                          <button
                            className="flatowner-action-btn flatowner-btn-delete"
                            onClick={() => handleDeleteInstallment(item.id)}
                          >
                            <BsTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Installment Modal */}
      {showCustomerInstallmentEditForm && (
        <div className="flatowner-modal-overlay">
          <div className="flatowner-modal">
            <div className="flatowner-modal-header">
              <h3>Edit Installment</h3>
              <button
                className="flatowner-close-btn"
                onClick={() => setshowCustomerInstallmentEditForm(false)}
              >
                <MdClose />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="flatowner-form">
              <div className="flatowner-form-group">
                <label>Date</label>
                <input
                  type="date"
                  value={
                    InstallmentEditFormDate ||
                    new Date().toISOString().split("T")[0]
                  }
                  onChange={(e) => setInstallmentEditFormDate(e.target.value)}
                  className="flatowner-input"
                />
              </div>
              <div className="flatowner-form-group">
                <label>Amount</label>
                <input
                  type="text"
                  value={InstallmentEditFormAmount}
                  onChange={(e) => setInstallmentEditFormAmount(e.target.value)}
                  className="flatowner-input"
                />
              </div>
              <div className="flatowner-form-group">
                <label>Payment Method</label>
                <select
                  value={InstallmentEditFormPaymentMethod}
                  onChange={(e) =>
                    setInstallmentEditFormPaymentMethod(e.target.value)
                  }
                  className="flatowner-select"
                >
                  <option value="">Select Payment Method</option>
                  <option value="CASH">Cash</option>
                  <option value="CHECK">Cheque</option>
                  <option value="UPI">UPI</option>
                  <option value="RTGS">RTGS</option>
                  <option value="NEFT">NEFT</option>
                </select>
              </div>
              <div className="flatowner-form-group">
                <label>Remark</label>
                <textarea
                  value={InstallmentEditFormRemark}
                  onChange={(e) => setInstallmentEditFormRemark(e.target.value)}
                  className="flatowner-textarea"
                  rows="3"
                />
              </div>
              <div className="flatowner-form-actions">
                <button
                  type="button"
                  onClick={() => setshowCustomerInstallmentEditForm(false)}
                  className="flatowner-btn flatowner-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flatowner-btn flatowner-btn-primary"
                >
                  <MdSave />
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Customer Form Modal */}
      {ShowEditCustomerForm && (
        <div className="flatowner-modal-overlay">
          <div className="flatowner-modal flatowner-modal-large">
            <div className="flatowner-modal-header">
              <h3>Edit Customer Details</h3>
              <button
                className="flatowner-close-btn"
                onClick={() => setShowEditCustomerForm(false)}
              >
                <MdClose />
              </button>
            </div>
            <form
              onSubmit={handleUpdateCustomerDetail}
              className="flatowner-form"
            >
              <div className="flatowner-form-section">
                <h4>Booking Details</h4>
                <div className="flatowner-form-grid">
                  <div className="flatowner-form-group">
                    <label>Deal Price</label>
                    <input
                      type="number"
                      value={dealPrice}
                      onChange={(e) => setDealPrice(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Token Amount</label>
                    <input
                      type="number"
                      value={tokenAmount}
                      onChange={(e) => setTokenAmount(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Agreement Amount</label>
                    <input
                      type="number"
                      value={agreementAmount}
                      onChange={(e) => setAgreementAmount(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Stamp Duty</label>
                    <input
                      type="number"
                      value={stampDutyAmount}
                      onChange={(e) => setStampDutyAmount(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Registration Amount</label>
                    <input
                      type="number"
                      value={registrationAmount}
                      onChange={(e) => setRegistrationAmount(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>GST Amount</label>
                    <input
                      type="number"
                      value={gstAmount}
                      onChange={(e) => setGstAmount(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Electric Water Amount</label>
                    <input
                      type="number"
                      value={electricWaterAmmount}
                      onChange={(e) => setElectricWaterAmmount(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Legal Charges Amount</label>
                    <input
                      type="number"
                      value={legalChargesAmmout}
                      onChange={(e) => setLegalChargesAmmout(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Booked On</label>
                    <input
                      type="number"
                      value={bookedOn}
                      onChange={(e) => setBookedOn(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Booking Status</label>
                    <select
                      value={bookingStatus}
                      onChange={(e) => setBookingStatus(e.target.value)}
                      className="flatowner-input"
                    >
                      <option value="PENDING">PENDING</option>
                      <option value="COMPLETE">COMPLETE</option>
                      <option value="CANCELLED">CANCELLED</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flatowner-form-section">
                <h4>Customer Information</h4>
                <div className="flatowner-form-grid">
                  <div className="flatowner-form-group">
                    <label>Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Phone Number</label>
                    <input
                      type="text"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Aadhar Number</label>
                    <input
                      type="text"
                      value={aadharNumber}
                      onChange={(e) => setAadharNumber(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>PAN Number</label>
                    <input
                      type="text"
                      value={panCard}
                      onChange={(e) => setPanCard(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Agent Name</label>
                    <input
                      type="text"
                      value={agentName}
                      onChange={(e) => setAgentName(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group">
                    <label>Brokerage</label>
                    <input
                      type="text"
                      value={brokerage}
                      onChange={(e) => setBrokerage(e.target.value)}
                      className="flatowner-input"
                    />
                  </div>
                  <div className="flatowner-form-group flatowner-form-group-full">
                    <label>Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="flatowner-textarea"
                      rows="3"
                    />
                  </div>
                </div>
              </div>

              <div className="flatowner-form-actions">
                <button
                  type="button"
                  onClick={() => setShowEditCustomerForm(false)}
                  className="flatowner-btn flatowner-btn-secondary"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flatowner-btn flatowner-btn-primary"
                >
                  <MdSave />
                  Update Details
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Customer Slip Modal */}
      {customerSlip && customerDetail && (
        <div className="flatowner-modal-overlay">
          <div className="flatowner-modal flatowner-modal-large">
            <div className="flatowner-modal-header">
              <h3>Customer Slip</h3>
              <div className="flatowner-header-actions">
                <button
                  className="flatowner-btn flatowner-btn-success"
                  onClick={handleDownload}
                >
                  <BsDownload />
                  Download PDF
                </button>
                <button
                  className="flatowner-close-btn"
                  onClick={() => setcustomerSlip(false)}
                >
                  <MdClose />
                </button>
              </div>
            </div>

            <div ref={letterref} className="flatowner-slip-content">
              {/* PDF content would go here - keeping original structure for PDF generation */}
              <div className="flatowner-slip-header">
                <h2>AG - Construction</h2>
                <p>
                  Address: 28, GOVIND PRABHU NAGAR, RAJAPETH HUDKESHWAR ROAD,
                  NAGPUR - 34
                </p>
                <p>CONTACT: +91-9028999253 | 9373450092</p>
              </div>

              <div className="flatowner-slip-body">
                <p>Date: {new Date().toLocaleDateString("en-GB")}</p>

                <div className="flatowner-slip-details">
                  <table className="flatowner-slip-table">
                    <tr>
                      <td>
                        <strong>Flat No / Plot No</strong>
                      </td>
                      <td>
                        <strong>{customerDetail.residency.identifier}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Area</strong>
                      </td>
                      <td>
                        <strong>{customerDetail.customer.address}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Location</strong>
                      </td>
                      <td>
                        <strong>{customerDetail.residency.name}</strong>
                      </td>
                    </tr>
                  </table>
                </div>

                <p className="flatowner-slip-text">
                  RECEIVED with thanks from{" "}
                  <strong>{customerDetail.customer.name}</strong> the sum of
                  Rupees{" "}
                  <strong>₹{customerDetail.dealPrice.toLocaleString()}</strong>{" "}
                  by Cheque / Cash / Draft No.{" "}
                  <strong>{customerDetail.residency.identifier}</strong> flat /
                  plot address{" "}
                  <strong>{customerDetail.customer.address}</strong> in part /
                  full / advance payment.
                </p>

                <div className="flatowner-slip-amount">
                  <p>
                    ₹:{" "}
                    <strong>{customerDetail.dealPrice.toLocaleString()}</strong>
                  </p>
                </div>

                <p>
                  <strong>
                    Balance Amount: ₹
                    {(
                      customerDetail.dealPrice -
                      (customerDetail.agreementAmount +
                        customerDetail.tokenAmount)
                    ).toLocaleString()}
                  </strong>
                </p>
                <p>
                  <strong>
                    Total Payable: ₹
                    {(
                      customerDetail.agreementAmount +
                      customerDetail.tokenAmount
                    ).toLocaleString()}
                  </strong>
                </p>

                <div className="flatowner-slip-signatures">
                  <div>Customer Signature</div>
                  <div>Authorised Signature</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Flatowner;
