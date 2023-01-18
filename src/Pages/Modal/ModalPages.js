// import React, { useState } from "react";
// import Modal from "react-modal";
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: "30%",
//     boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
//   },
// };
// const ModalPages = () => {
//   const [modalIsOpen, setIsOpen] = useState(true);
//   let subtitle;
//   function openModal() {
//     setIsOpen(true);
//   }
//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal() {
//     setIsOpen(false);
//   }
//   return (
//     <div>
//       {/* <button onClick={openModal}>modal</button> */}
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <div className="container available">
//           <h5 className="mb-5 font-italic mt-5">
//             Your Request has been under Review. Please wait for approval{" "}
//           </h5>

//           <div className="d-flex justify-content-end mt-3">
//             <button className="cancel-btn me-3" onClick={closeModal}>
//               Ok
//             </button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default ModalPages;
