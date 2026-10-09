const express=require('express')



const app=express()

const notemodel=require('./models/note.model')

app.use(express.json())

app.post('/notes', async (req, res)=>{
    const data=req.body
    await notemodel.create({
        title:data.title,
        description:data.description
    })

    res.status(201).json({
        message: "Note Created Successfully"
    })
})

app.get('/notes', async (req, res)=>{
    const notes = await notemodel.find()

    res.status(200).json({
        message:"Notes Fetched Successfully",
        notes:notes
    })
})

app.delete('/notes/:id', async (req, res)=>{
    const id=req.params.id
    await notemodel.findOneAndDelete({
        _id:id
    })

    res.status(200).json({
        message: 'Note Deleted Successfully'
    })
})

app.patch('/notes/:id', async (req, res)=>{

    const id=req.params.id
    const description=req.body.description

    await notemodel.findOneAndUpdate(
        {
            _id:id
        }, 
        {
            description:description
        }
    )

    res.status(201).json({
        message: 'Note Updated Successfully'
    })
})


module.exports=app