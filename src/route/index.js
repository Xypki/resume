// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
// ================================================================

var address = "Orchard Road: Singapore."
var header = {
	name:{
		firstname:"Ivan",
		lastname:"Ivanov",
	},
	position: "Junior Fullstack JS Developer",
	salary:"600$ в мiсяць",
	address,
}

var footer = {
    social:{
      email:{
        text:"ivanov@mail.com",
        href:"mailto:ivanov@mail.com",
      },
      phone:{
        text:"+380670000123",
        href:"tel:+380670000123",
      },
      linkedin:{
        text:"LinkedIn",
        href:"https://www.linkedin.com/in/dmytro-test",
      },
    },
    address,
  }

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

  page:{
    title:"Resume | Summary",
  },


  header,

  footer,
    
  main:{
    summary:{
      title:"Summary",
      text:"Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.",
    },
  
    experience:{
      title:"Other experience",
      text:"Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.",
    },
  },


  

  })
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані
    
  page:{
    title:"Resume | Skills",
  },

  header,

  main:{
    skills:[
      {
		name:"HTML",
		point: 10,
		isTop: true,
},
	  {
		name:"Git & Terminal",
		point: 10,
		isTop: true,
},
	  {
		name:"Handlebars",
		point: 7,
		isTop: false,
},
	  {
		name:"VS Code & NPM",
		point: 8,
},
	  {
		name:"React.js",
		point: 0,
},
	  {
		name:"PHP",
		point: null,
},
    ],




    hobbies:[
      {
		name:"Cooking",
		isMain:true,
},
	  {
		name:"Singing",
		isMain:false,
},
	  {
		name:"Dancing",
		isMain:false,
},
    ],
  },

  footer,


  })
})

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані
    
    page:{
      title:"Resume | Education",
    },
  
    header,

    main:{

      educations:[
		{
			name:"Massachusetts Institute of Technology (MIT)",
			isEnd:true,
	},
		{
			name:"University of Cambridge",
			isEnd:false,
	},
		{
			name:"Stanford University",
			isEnd:true,
	},
    ],
	  certificates:[
		{
		name:"Certified data professional (CDP)",
		id:"1",
	},
	{
		name:"Microsoft Certified Azure Solutions Architect",
		id:"2",
	},
	{
		name:"Project management professional (PMP)",
		id:"3",
	},
	],
  },

      footer,
    


  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout:"big",
    
    page:{
      title:"Resume | Work",
    },
  
    header,

    main:{
      works:[{
          position:"Junior Fullstack Developer",
          company:{
            name:"IT Brains",
            url:"https://it-brains.com.ua/",
          },
          duration:{
            from:"10.10.2022",
            to:null,
          },
          projectAmount:3,

          projects:[
            {
            name:"Resume",
            about: "Coding tells a machine which actions to perform and how to complete tasks.",
            url:"https://resume.com.ua/",
            stackAmount:3,
            awardAmount:2,
            stacks:[
              {
                  name:"React.js",
              },
              {
                name:"HTML / CSS",
              },
              {
                name:"Nodejs",
              },
            ],
            awards:[
              {
              name:"Oscar",
              },
              {
                name:"Grammy",
              },
            ],
            },
          ],
        },
      ],
  },

      footer,
    


  })
})



// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router
