const express=require('express');
const router=express.Router();
const upload=require('../helpers/multer');
const notesController=require('../Controllers/notesController');

router.post('/',async(req,resp)=>{
    await notesController.notesUpload(req,resp);
})

router.delete('/:id',async(req,resp)=>{
    await notesController.notesDelete(req,resp);
})

router.get('/:id',async(req,resp)=>{
    await notesController.notesView(req,resp);
})

module.exports=router;