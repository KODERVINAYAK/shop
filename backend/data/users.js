import bcrypt from 'bcryptjs'

const users= [
   { name : 'Admin Users ',
    email: 'admin@gmail.com' ,
    password: bcrypt.hashSync('123456',10),
    isAdmin: true
} ,
{ name : 'Ram ',
email: 'ram@gmail.com' ,
password: bcrypt.hashSync('123456',10),
isAdmin: false
} ,
{ name : 'Krishn ',
email: 'krishn@gmail.com' ,
password: bcrypt.hashSync('123456',10),
isAdmin: false
} ,
{ name : 'Manjushk ',
email: 'manjushk@gmail.com' ,
password: bcrypt.hashSync('123456',10),
isAdmin: false
}  
]
export default users;