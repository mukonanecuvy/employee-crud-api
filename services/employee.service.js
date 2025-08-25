import db from "../db.js";

export const getAllEmployees = async () => {

    const [record] = await db.query("SELECt * fROM employees")

    return record;

}


export const getEmployeeById = async (id) => {

    const [record] = await db.query("SELECt * fROM employees WHERE id = ?", [id])

    return record;

}

export const deleteEmployee = async (id) => {

    const [{ affectedRows }] = await db.query("DELETE fROM employees WHERE id = ?", [id])

    return affectedRows;

}

export const addOrEditEmployee = async (obj, id = 0) => {

    const [[[affectedRows]]] = await db.query("CALL usp_employee_add_or_edit(?,?,?,?)", [id, obj.name, obj.employee_code, obj.salary])

    return affectedRows;

}

