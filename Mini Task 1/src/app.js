const express=require('express')
const app=express()

app.use(express.json())

const notes=[]

// Add Notes

app.post('/notes', (req, res)=>{

    res.send("Hii User...")

    notes.push(req.body)

    res.status(201).json({
        message: 'Note created successfully'
    })
})

// Read Notes

app.get('/notes', (req, res)=>{
    res.status(200).json({
        message:'Notes fetched successfully',
        note:notes
    })
})

app.delete('/notes/:idx', (req, res)=>{
    const index=req.params.idx
    delete notes[index]

    res.status(200).json({
        message: 'Note deleted successfully'
    })
})

app.patch('/notes/:idx', (req, res)=>{
    const index=req.params.idx
    const description= req.body.description

    notes[index].description=description

    res.status(201).json({
        message:'Note updated successfully'
    })

})



module.exports = app