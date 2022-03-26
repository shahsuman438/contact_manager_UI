export const userColumns=[
    {
        field:"user",headerName:"USER",width:230,renderCell:(params)=>{

            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"></img>
                    {params.row.username}
                </div>
            )
        }
},
{
    field:"email",headerName:"EMAIL",width:230
},
{
    field:"age",headerName:"AGE",width:200
},
{
    field:"age",headerName:"AGE",width:100
}
];


export const userRows=[
    {
        id:1,
        username:"snow",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:2,
        username:"suman sah",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:30
    },
    {
        id:3,
        username:"radhe shyam",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:4,
        username:"hari krishna",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:22
    },
    {
        id:5,
        username:"bholenath",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:6,
        username:"jay sree ram",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:20
    },
    {
        id:7,
        username:"jay hanuman",
        img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
]