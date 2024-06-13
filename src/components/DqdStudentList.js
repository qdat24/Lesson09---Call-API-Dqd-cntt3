import React from 'react'

export default function dqdStudentList(renderdqdStudentList) {
    console.log("Data:", renderdqdStudentList);
    let dqdElement = renderdqdStudentList.map((dqdStudent, index)=>{
        return (
        <tr key={index}>
            <th scope="row">{index+1}</th>
            <td>{dqdStudent.dqdId}</td>
            <td>{dqdStudent.dqdName}</td>
            <td>{dqdStudent.dqdAge}</td>
            <td>{dqdStudent.dqdPhone}</td>
            <td>{dqdStudent.dqdEmail}</td>            
            <td>{dqdStudent.dqdStatus}</td>
            <td>
                Edit / Delete
            </td>
        </tr>

        )
    });
    return (
        <div>
            <h2>Danh sách sinh viên</h2>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Mã sinh viên</th>
                        <th scope="col">Họ tên</th>
                        <th scope="col">Tuổi</th>
                        <th scope="col">Diện thoại</th>
                        <th scope="col">Email</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Chức năng</th>
                    </tr>
                </thead>
                <tbody>
                    {dqdElement}
                </tbody>
            </table>

        </div>
    )
}