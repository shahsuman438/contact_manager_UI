export const userColumns=[
    {
        field:"user",headerName:"USER",width:300,renderCell:(params)=>{

            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar"></img>
                    {params.row.username}
                </div>
            )
        }
},
{
    field:"email",headerName:"EMAIL",width:300
},
{
    field:"age",headerName:"AGE",width:300
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
        img:"https://assets.entrepreneur.com/content/3x2/2000/20150820205507-single-man-outdoors-happy-bliss.jpeg",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:30
    },
    {
        id:3,
        username:"radhe shyam",
        img:"https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHN1Y2Nlc3N8ZW58MHx8MHx8&w=1000&q=80",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:4,
        username:"hari krishna",
        img:"https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:22
    },
    {
        id:5,
        username:"bholenath",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPpL6Hl7NtoaIQksyHLMd9ipglEQsVpwfeWlqmv2pLc0CEarX6w82yExq4_q841u6qpn8&usqp=CAU",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:6,
        username:"jay sree ram",
        img:"https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/social-media-profile-photos-3.jpg",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:20
    },
    {
        id:7,
        username:"jay hanuman",
        img:"https://www.mensjournal.com/wp-content/uploads/mf/1280-selfie.jpg?w=900&quality=86&strip=all",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:8,
        username:"snow",
        img:"https://www.mensjournal.com/wp-content/uploads/mf/man-selfoe-wildnerness-1280.jpg?w=900&h=506&crop=1&quality=86&strip=all",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:9,
        username:"suman sah",
        img:"https://www.catholicsingles.com/wp-content/uploads/2020/06/blog-header-3.png",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:30
    },
    {
        id:10,
        username:"radhe shyam",
        img:"https://1.bp.blogspot.com/-DQ3cyYsQS00/YJO-Yer6WNI/AAAAAAAAEBQ/PL9fWRMGdto7LyOexfqh--ZAIBOUgViTQCLcBGAsYHQ/w512-h640/World%2BStylish%2BGirl%2BDP%2Bfor%2BFacebook%2BProfile%2B2020%2B%25281%2529-min.jpg",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:11,
        username:"hari krishna",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH-q3WWsLEVdDsXEddGHxpoE00Y2knvcEJ5pAmjsoUM2DFPFxfZO7_Y2GjBunSUmlbJds&usqp=CAU",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:22
    },
    {
        id:12,
        username:"bholenath",
        img:"https://writestylesonline.com/wp-content/uploads/2019/01/What-To-Wear-For-Your-Professional-Profile-Picture-or-Headshot.jpg",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
    {
        id:13,
        username:"jay sree ram",
        img:"https://media.istockphoto.com/photos/close-up-portrait-of-brunette-woman-picture-id1154642632?k=20&m=1154642632&s=612x612&w=0&h=dQPjQCt_WOKhD0ysSJG6gIsu7xW65vH8Wf_SaqetIqY=",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:20
    },
    {
        id:14,
        username:"jay hanuman",
        img:"https://media-exp1.licdn.com/dms/image/C4D08AQENiLenOKZVtw/croft-frontend-shrinkToFit1024/0/1618352947551?e=2159024400&v=beta&t=a0uZiU00Xap-2mXoieN_hDlRvEkL2P8ZvaWbh12RfgM",
        statu:"active",
        email:"shahsuman438@gmail.com",
        age:35
    },
]