import * as services from '../sevices'
export const dangKi = async (req, res) => {
    try {
        const fileData = req.file;
        const avatar = fileData?.path ? fileData.path : req.body?.avatar;
        const { name, email, password, gioiTinh, sdt, diaChi, namSinh, role_id } = req.body
        if (!name || !email || !password || !sdt || !diaChi) return res.status(400).json({
            err: 1,
            mess: "Điền đầy đủ thông tin"
        })
        const response = await services.dangKi({ name, email, password, gioiTinh, sdt, diaChi, namSinh, role_id, avatar })
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json({
            err: -1,
            mess: "Loi sever"
        })
    }
}

export const dangNhap = async (req, res) => {
    try {
        const {email, password} = req.body
        if ( !email || !password ) return res.status(400).json({
            
            err: 1,
            mess: "Điền đầy đủ thông tin"
        })
        const response = await services.dangNhap({email, password })

        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json({
            err: -1,
            mess: "Loi sever"
        })
    }
}

export const forgotPassword =async (req,res)=>{
    const {email}=req.body
    try{
        await services.forgotPassword(email);
        res.status(200).json({
            err: 1,
            message: 'Bạn hãy vào email để xác thực cấp lại mật khẩu !!!!'
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            err: -1,
            message: 'Tài khoản không tồn tại!!!'
        });
    }
}

export const getAllUser=async (req,res)=>{
    try{
        const respones=await services.getAllUser()
        return res.status(200).json(respones)
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}


export const getUser=async (req,res)=>{
    try{
        const idUser=req.params.idUser;
        const response=await services.getUser({idUser})
        return res.status(200).json(response)
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}

export const getBill =async (req, res)=>{
    try{
        const idGetBill=req.params.idBill;
        const response=await services.getBill(idGetBill)
        return res.status(200).json(response)
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}

export const getOrder = async (req,res)=>{
    try{
        const idUser=req.params.idUser;
        const response= await services.getOrder({idUser})
        return res.status(200).json(response)
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}

export const getOrderPK= async (req,res)=>{
    try{
        const idOrder=req.params.idOrder;
        const response= await services.getOrderPK({idOrder})
        return res.status(200).json(response)
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}

export const getThuCung = async (req,res)=>{
    try{
        const idThuCung=req.params.idThuCung;
        const response = await services.getThuCung({idThuCung})
        return res.status(200).json(response)
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}
export const getAllCustomer=async (req,res)=>{
    try{
        const respones=await services.getAllCustomer()
        return res.status(200).json({respones})
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}
export const getAllEmployee= async (req,res)=>{
    try{
        const response =await services.getAllEmployee();
        return res.status(200).json({response})
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}

export const updateUserController =async (req,res)=>{
    try{
        const fileData= req.file;
        const image=fileData?.path;
        const idUser=req.params.userId;
        const {name,sdt,diaChi,gioiTinh,namSinh}=req.body;
        const response = await services.updateUserController(idUser,name,sdt,diaChi,gioiTinh,namSinh,image);
        return res.status(200).json({response})
    }catch(e){
        return res.status(500).json({
            err:-1,
            mess:"Lỗi sever"
        })
    }
}