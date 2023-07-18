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
#### Folder structure และ file สำหรับโปรเจคที่ใช้ Nodejs
```
├── controllers
│   ├── openaiController.js
├── routes 
│   ├── openaiRoute.sj
├── public
│   ├── css
│   │   ├── **/*.css
│   ├── images
│   ├── js
│   ├── index.html
├── build  (or dist)
├── node_modules
├── package.json
├── package-lock.json 
├── postcss.config.js 
└── index.js
└── .gitignore
```



 
