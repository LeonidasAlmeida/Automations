
const DataParagens = [
       {    id : "p400",
            subCategoria: [401,402,403]
        },
        {   id: "p300",
            subCategoria: [301,302]
        },
        {   id : "p200", 
            subCategoria: [201,202]
        },
        {   id : "p100", 
            subCategoria: [101,102]
        }
];

const TipoParagem =[
    {   id : "401",
        type:"Paragem interna",
        info:"Falha no tapete",
        tempo:"400",
    },
    {   id :"402",
        type:"Paragem interna",
        info:"Falha no tapete",
        tempo:"400",
    },
    {   id :"403",
        type:"Paragem interna",
        info:"Falha no tapete",
        tempo:"400",
    },
    //---------------------------------------
    {   id :"201",
        type:"Paragem interna",
        info:"Falha no tapete",
        tempo:"200",
    },
    {   id :"202",
        type:"Paragem interna",
        info:"Falha no tapete",
        tempo:"200",
    },
    {   id :"301",
        type:"Paragem interna",
        info:"Falha no tapete",
        tempo:"300",
    },
    //----------------------------------------
    {   id :"302",
        type:"Paragem Planeadas",
        info:"start-up",
        tempo:"300",

    }, 
    { id :"101",
        type:"Paragem Planeadas",
        info:"start-up",
        tempo:"100",
    },
     {   id :"102",
        type:"Paragem Planeadas",
        info:"start-up",
        tempo:"100",
    },
    
]

const ParagensJSON =()=>{
    return({
        DataParagens,
        TipoParagem,
    })
}
export default ParagensJSON

