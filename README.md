# tutorials-nodejs-openai-tailwindcss
How to use Openai with Nodejs and using tailwindcss as Css 

### เตรียมสิ่งต่างๆ ให้พร้อม
#### สร้าง github Repository สำหรับโปรเจค
1. สร้าง github repository สำหรับ โปรเจคขึ้นมา โดยในครั้งนี้ใช้ชื่อว่า tutorial-nodejs-openai-tailwindcss
2. หลังจากสร้าง github repo เรียบร้อยให้ทำการ clone มาไว้ที่คอมพิวเตอร์เพื่อเตรียมพร้อมเริ่มทำงาน
ทำการ clone ด้วยคำสั่ง 
```
git clone https://www.github.com/tutorial-nodejs-openai-tailwindcss
```
เมื่อ clone เสร็จแล้วให้ทำการเข้า cd เข้าไปในโฟลเดอร์ที่เพิ่งโคลนลงมา 
```
cd tutorial-nodejs-openai-tailwindcss
```
เมื่อเข้าไปแล้วให้ทำการเปิิดโฟลเดอร์ด้วย Editor ที่เราใช้งานอยู่ ส่วนในครั้งนี้ใช้ VSCODE เป็น Editor สามารถใช้คำสั่งเปิดจาก terminal ได้เลยด้วยคำสั่ง
```
code .
``` 
#### จัดการ Workspace ให้เรียบร้อย
หลังจาก Vscode เปิดขึ้นมาให้ทำการเพิ่ม Folder โปรเจคของเราเข้าไปใน Workspce และทำการ Save workspace เอาไว้เพื่อที่จะเรียกใช้ workspace นี้ในครั้งต่อๆ ไปได้สะดวกยิ่งขึ้น

การเพิ่ม Project Folder เข้า Workspace ให้ไปที่เมนู File -> Add folder to workspace และเลือก project folder ของเรา
หลังจากนั้นให้ทำการ save space ของเราเก็บเอาไว้ โดยไปที่เมนู File -> save workspce as การจ้ดการ workspace ก็เสร็จเรียบร้อยพร้อมใช้งาน

### เตรียมพร้อม modules สำหรับโปรเจค
1. สร้างไฟล์ package.json เพื่อรองรับการติดตั้งที่จะใช้งานในโปรเจคนี้ด้วย NPM (node package management) โดยใช้คำสั่งต่อไปนี้ผ่าน Terminal 
```
npm init -y
```
2. ติดตั้ง module สำหรับที่จะเรียกใช้ในโปรเจคโดย module ที่จะใช้มีดังนี้ axios express nodemon openai ส่วน Tailwindcss นั้นจะแยกติดตั้งเนื่องจากมีรายละเอียดการติดตั้งแยกย่อยพอสมควร 
```
npm install axios express nodemon openai 
```
เมื่อ run คำสั่งแล้วจะจะใช้เวลาพอสมควรในการติดตั้งเมื่อติดตั้งเร็จแล้วหากต้องการทราบว่าติดตั้งอะไรไปบ้างแล้วให้ดูที่ ไฟล์ package.json จะแสดงรายการติดตั้งอยู่ภายในนั้น

### เตรียม Folder Structure สำหรับโปรเจค
สร้างโฟลเดอร์สำหรับโปรเจคนั้นจำทำการสร้างเพื่อเตรียมพร้อมสำหรับการขยายระบบได้ในอนาคตด้วย (Scalable) ซึ่งผมมองมีประโยชน์และควรเริ่มต้นทุกครั้งด้วยการเตรียมกาดรจัดการโฟเดอร์ให้เรียบร้อยนั้นเป็นเรื่องที่จะทำให้มองเห็นภาพโครงสร้างโปรเจคได้ง่ายขึ้นด้วย
#### สร้าง Folder และ file สำหรับโปรเจคที่ใช้ Nodejs 
```
├── build  (or dist)
│ 
├── controllers
│   ├── openaiController.js
├── public
│   ├── styles
        ├── style.css
        ├── tailwind.css
│   │   ├── **/*.css
│   ├── images
        ├── **/*.jpeg,png,svg
│   ├── js
        ├── main.js
│   ├── index.html
├── routes 
│   ├── openaiRoute.sj
│ 
├── node_modules
├── .env
├── package.json
├── package-lock.json 
├── postcss.config.js 
└── index.js
└── .gitignore
```

### เริ่มต้นกับ Nodejs server ด้วย express framework
1. สร้าง index.js ที่ root โปรเจคโฟลเดอร์และเพิ่มโค้ดด้านล่าง
```
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

const srvPort = process.env.PORT || 8000; 

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.status(200).json({ msg: "hello Nodejs and OpenAi"})
});

app.listen(srvPort, () => {
    console.log("server is up and running on port: ", srvPort);
});
```
- เพิ่ม script "start" บน package.json ไฟล์เพื่อสั่งให้ server เริ่มทำงานและ monitor หากไฟล์ที่กำหนดมีการเปลี่ยนแปลงให้ระบบ ทำการ restart อัตโนมัติโดยในโปรเจคนี้ให้ monitor ไฟล์ต่างๆ ดังนี้ index.js index.html และ style.css (ใช้ nodemon module ในการ monotor การเปลี่ยนแปลงของไฟล์ที่กำหนด)
  
```
"scripts": {
    "start": "nodemon index.js index.html style.css",
    "test": "echo \"Error: no test specified\" && exit 1",
    "tailwind:css": "postcss public/styles/tailwind.css -o public/styles/style.css"
  },
```


เมื่อสร้าง index.js และเพิ่ม script "start" ใน package.json เสร็จแล้วให้ทดสอบด้วยการ run คำสั่ง start บน terminal ด้วยคำสั่งดังนี้
```
npm run start 
หรือ
ืnpm run
``` 
หากไม่ทีข้อผิดพลาดใดๆ ควรจะเห็นระบบแสดงข้อความบน terminal ตั้งนี้ ที่บรรทัดสุดท้ายของ terminal นั้นหมายความว่า nodejs server ทำงานปกติและพร้อมสำหรับการ implement feature อื่นเข้าไปที่ระบบแล้ว
```
server is up and running on port: 8000
```
หServer 

### สร้างไฟล์ index.html สำรับหน้าเว็บเพจแรก
สร้าาง index.html ไฟล์และเพิ่มข้อมูลภายในไฟล์เบื้องต้นดังนี้
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="styles/style.css" rel="stylesheet">
    <title>OpenAiX | Nodejs + TailwindCss</title>
</head>
<body>
    <div class="flex flex-col justify-center items-center overflow-hidden m-auto h-screen max-w-screen-lg ">
        <h1 class="text-sm text-gray-700">hEllo Open Ai</h1>
        <div>Power of Ai is testing here</div>
    </div>
</body>
</html>
```





 
