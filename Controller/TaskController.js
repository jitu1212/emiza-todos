

const router =require('express').Router();

const TaskModel=require('../model/todotask');

router.post('/api/task',async(req,res)=>{

        let task = new TaskModel(req.body);
            task.save()
                .then(game => {
                    res.send(200, req.body);
                })
                .catch(err => {
                    res.status(400).send("Something Went Wrong");
                });
})
router.get('/api/task', async (req, res)=>{
    try{
      
      const allTaskItems = await TaskModel.find({});
      res.status(200).json(allTaskItems)
    }catch(err){
      res.json(err);
    }
  })

  router.put('/api/task/:id', async (req, res)=>{
    try{
      //find the task by its id and update it
      const updateItem = await TaskModel.findByIdAndUpdate(req.params.id, {$set: req.body});
      res.status(200).json(updateItem);
    }catch(err){
      res.json(err);
    }
  })

  router.delete('/api/task/:id', async (req, res)=>{
    try{
      //find the task by its id and delete it
      const deleteItem = await TaskModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Item Deleted');
    }catch(err){
      res.json(err);
    }
  })

  module.exports=router;