// import './admin-dashboard.styles.scss'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import React, { useRef, useEffect } from 'react'
// import { Bar } from 'react-chartjs-2'

// import Chart from 'chart.js/auto'
// import MovingUpIcon from '@mui/icons-material/Moving'
// import TrendingDownIcon from '@mui/icons-material/TrendingDown'
// function AdminDashboard() {
//   const generateChartData = () => {
//     const data = {
//       labels: [
//         'Tháng 1',
//         'Tháng 2',
//         'Tháng 3',
//         'Tháng 4',
//         'Tháng 5',
//         'Tháng 6',
//         'Tháng 7',
//         'Tháng 8',
//         'Tháng 9',
//         'Tháng 10',
//         'Tháng 11',
//         'Tháng 12',
//       ],
//       datasets: [
//         {
//           label: 'Thống kê',
//           tension: 0.4,
//           borderWidth: 0,
//           pointRadius: 0,
//           borderColor: 'green',
//           backgroundColor: '#4caf50',
//           fill: true,
//           data: [600, 400, 500, 490, 480, 480, 750, 700, 100, 50, 500, 800, 250],
//           maxBarThickness: 50,
//         },
//       ],
//     }

//     const options = {
//       responsive: true,
//       maintainAspectRatio: false,
//       plugins: {
//         legend: {
//           display: false,
//         },
//       },
//       interaction: {
//         intersect: false,
//         mode: 'index',
//       },
//       scales: {
//         y: {
//           grid: {
//             drawBorder: false,
//             display: true,
//             drawOnChartArea: true,
//             drawTicks: false,
//             borderDash: [5, 5],
//           },
//           ticks: {
//             display: true,
//             padding: 10,
//             color: '#000',
//             font: {
//               size: 11,
//               family: 'Open Sans',
//               style: 'normal',
//               lineHeight: 2,
//             },
//           },
//         },
//         x: {
//           grid: {
//             drawBorder: false,
//             display: true,
//             drawOnChartArea: false,
//             drawTicks: false,
//             borderDash: [5, 5],
//           },
//           ticks: {
//             display: true,
//             color: '#000',
//             padding: 20,
//             font: {
//               size: 11,
//               family: 'Open Sans',
//               style: 'normal',
//               lineHeight: 2,
//             },
//           },
//         },
//       },
//     }

//     return { data, options }
//   }

//   const { data, options } = generateChartData()

//   return (
//     <div>
//       <main className="main-content position-relative border-radius-lg ">
//         <div className="container-fluid py-4">
//           <div className="row mt-1 ">
//             <div className="row col-lg-8">
//               <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
//                 <div className="card">
//                   <div className="card-body p-3">
//                     <div className="row">
//                       <div className="col-8">
//                         <div className="numbers">
//                           <h5 className="font-weight-bolder">$30,000</h5>
//                           <p className="mb-0">Khách hàng mới</p>
//                         </div>
//                       </div>
//                       <div className="col-4 text-end inf_percent">
//                         <p className="text-sm mb-0">
//                           <MovingUpIcon />
//                           <span className="font-weight-bold">4%</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-sm-6 mb-xl-0 mb-4">
//                 <div className="card">
//                   <div className="card-body p-3">
//                     <div className="row">
//                       <div className="col-8">
//                         <div className="numbers">
//                           <h5 className="font-weight-bolder">30,000</h5>
//                           <p className="mb-0">Rau cải</p>
//                         </div>
//                       </div>
//                       <div className="col-4 text-end inf_percent">
//                         <p className="text-sm mb-0">
//                           <MovingUpIcon />
//                           <span className="font-weight-bold">4%</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-xl-4 col-sm-6">
//                 <div className="card">
//                   <div className="card-body p-3">
//                     <div className="row">
//                       <div className="col-8">
//                         <div className="numbers">
//                           <h5 className="font-weight-bolder">$30,000</h5>
//                           <p className="mb-0">Doanh thu</p>
//                         </div>
//                       </div>
//                       <div className="col-4 text-end inf_percent">
//                         <p className="text-sm mb-0">
//                           <TrendingDownIcon />
//                           <span className="font-weight-bold">4%</span>
//                         </p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className=" mb-lg-0 mb-4 mt-1">
//                 <div className="card z-index-2 h-100">
//                   <div className="card-header pb-0 pt-3 bg-transparent">
//                     <h6 className="text-capitalize">Thống kê đơn hàng theo tháng</h6>
//                   </div>
//                   <div className="card-body p-3">
//                     <div className="chart">
//                       <Bar data={data} options={options} height={300} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-2 col-lg-8"></div>
//               <div className="mt-2 col-lg-4">
//                 <div className="mb-lg-0 mb-4 ">
//                   <div
//                     style={{
//                       width: '100%',
//                       backgroundColor: '#fff',
//                       height: '50px',
//                       display: 'flex',
//                       justifyContent: 'center',
//                       alignItems: 'center',
//                       borderRadius: '10px',
//                     }}
//                   >
//                     <h4 className="sp_times">10</h4>
//                     <h4 className="sp_times">:</h4>
//                     <h4 className="sp_times">30</h4>
//                     <h4
//                       className="sp_times"
//                       style={{ backgroundColor: ' #4caf50', color: '#fff', borderRadius: '5px' }}
//                     >
//                       PM
//                     </h4>
//                     <h4 className="sp_times" style={{ paddingLeft: '20px' }}>
//                       26/03/2023
//                     </h4>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-4">
//               <div className="mt-2">
//                 <div className="mb-lg-0 mb-4">
//                   <div className="card">
//                     <div className="card-header pb-0 p-3 pb-3">
//                       <div className="d-flex justify-content-center">
//                         <h6 className="mb-2">Thống kê khách hàng</h6>
//                       </div>
//                     </div>
//                     <div className="table-responsive pt-2 align-items-center">
//                       <table className="table align-items-center ">
//                         <tbody>
//                           <tr>
//                             <td className="w-30">
//                               <div className="d-flex px-2 py-1 align-items-center">
//                                 <div>
//                                   <img
//                                     src="./assets/img/icons/flags/US.png"
//                                     alt="Country flag"
//                                     className="img_members"
//                                   />
//                                 </div>
//                                 <div className="ms-4">
//                                   <h6 className="text-sm mb-0">Toàn</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center">
//                                 <h6 className="text-sm mb-0">Hạng vàng</h6>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center">
//                                 <h6 className="text-sm mb-0">74 đơn hàng</h6>
//                               </div>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="w-30">
//                               <div className="d-flex px-2 py-1 align-items-center">
//                                 <div>
//                                   <img
//                                     src="./assets/img/icons/flags/GB.png"
//                                     alt="Country flag"
//                                     className="img_members"
//                                   />
//                                 </div>
//                                 <div className="ms-4">
//                                   <h6 className="text-sm mb-0">Liên</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center">
//                                 <h6 className="text-sm mb-0">Hạng vàng</h6>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center">
//                                 <h6 className="text-sm mb-0">74 đơn hàng</h6>
//                               </div>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="w-30">
//                               <div className="d-flex px-2 py-1 align-items-center">
//                                 <div>
//                                   <img
//                                     src="./assets/img/icons/flags/BR.png"
//                                     alt="Country flag"
//                                     className="img_members"
//                                   />
//                                 </div>
//                                 <div className="ms-4">
//                                   <h6 className="text-sm mb-0">Nasa</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center">
//                                 <h6 className="text-sm mb-0">Hạng vàng</h6>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center">
//                                 <h6 className="text-sm mb-0">74 đơn hàng</h6>
//                               </div>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                       <div className="d-flex justify-content-center align-items-center">
//                         <button className="btn btn-custom btn-lg">
//                           <i className="bi bi-person-fill"></i>
//                           Xem tất cả
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-3">
//                 <div className="mb-lg-0 mb-4">
//                   <div className="card">
//                     <div className="card-header pb-0 p-3 pb-3">
//                       <div className="d-flex justify-content-center">
//                         <h6 className="mb-2">Thống kê sản phẩm</h6>
//                       </div>
//                     </div>
//                     <div className="table-responsive">
//                       <table className="table align-items-center ">
//                         <tbody>
//                           <tr className="col_products">
//                             <td className="w-50 ">
//                               <div className="d-flex px-2 py-1 align-items-center title_products">
//                                 <div>
//                                   <img
//                                     src="./assets/img/icons/flags/US.png"
//                                     alt="Country flag"
//                                     className="img_members"
//                                   />
//                                 </div>
//                                 <div className="ms-4">
//                                   <h6 className="text-sm mb-0">Rau cải</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center view_products">
//                                 <h6 className="text-sm mb-0">144 lượt mua</h6>
//                               </div>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="w-30">
//                               <div className="d-flex px-2 py-1 align-items-center title_products">
//                                 <div>
//                                   <img
//                                     src="./assets/img/icons/flags/GB.png"
//                                     alt="Country flag"
//                                     className="img_members"
//                                   />
//                                 </div>
//                                 <div className="ms-4">
//                                   <h6 className="text-sm mb-0">Rau cải</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center view_products">
//                                 <h6 className="text-sm mb-0">144 lượt mua</h6>
//                               </div>
//                             </td>
//                           </tr>
//                           <tr>
//                             <td className="w-30">
//                               <div className="d-flex px-2 py-1 align-items-center title_products">
//                                 <div>
//                                   <img
//                                     src="./assets/img/icons/flags/BR.png"
//                                     alt="Country flag"
//                                     className="img_members"
//                                   />
//                                 </div>
//                                 <div className="ms-4">
//                                   <h6 className="text-sm mb-0">Rau cải</h6>
//                                 </div>
//                               </div>
//                             </td>
//                             <td>
//                               <div className="text-center view_products ">
//                                 <h6 className="text-sm mb-0">144 lượt mua</h6>
//                               </div>
//                             </td>
//                           </tr>
//                         </tbody>
//                       </table>
//                       <div className="d-flex justify-content-center align-items-center">
//                         <button className="btn btn-custom btn-lg">
//                           <i className="bi bi-person-fill"></i>
//                           Xem tất cả
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   )
// }

// export default AdminDashboard
